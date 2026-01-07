// js/admin-users.js

// Cek Auth Admin Dulu
auth.onAuthStateChanged(user => {
    if (!user) { window.location.href = '../index.html'; return; }
    
    db.collection('users').doc(user.uid).get().then(doc => {
        if (!doc.exists || doc.data().role !== 'pengajar') {
            alert("Akses Ditolak"); window.location.href = '../dashboard.html';
        } else {
            // Jika Aman, Cek kita lagi di halaman mana
            if (document.getElementById('users-grid')) {
                loadAllStudents(); // Kita di Halaman List
            } 
            if (document.getElementById('d-name')) {
                loadStudentDetail(); // Kita di Halaman Detail
            }
        }
    });
});

// --- BAGIAN 1: LIST SEMUA SISWA ---
async function loadAllStudents() {
    const grid = document.getElementById('users-grid');
    const searchInput = document.getElementById('search-input');
    
    try {
        // Ambil semua user yang role-nya 'siswa'
        const snapshot = await db.collection('users').where('role', '==', 'siswa').get();
        
        if(snapshot.empty) {
            grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Belum ada siswa terdaftar.</p>';
            return;
        }

        let students = [];
        snapshot.forEach(doc => {
            students.push({ id: doc.id, ...doc.data() });
        });

        // Fungsi Render Kartu
        const renderCards = (dataList) => {
            grid.innerHTML = '';
            dataList.forEach(s => {
                // Logika Avatar (Sama persis dengan profil siswa)
                let seed = s.id;
                let avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
                
                if (s.gender === 'Laki-laki') {
                    avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=shortHair,shortFlat,shortRound,shavedSides&hairColor=2c1b18`;
                } else if (s.gender === 'Perempuan') {
                    avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=longHair,straight01,straight02,bun,curvy&hairColor=2c1b18&clothe=blazerAndShirt`;
                }

                const semester = s.semester || 'Belum Set Semester';
                
                const card = document.createElement('div');
                card.className = 'user-card';
                card.innerHTML = `
                    <div class="card-avatar"><img src="${avatarUrl}"></div>
                    <h3 class="u-name">${s.name}</h3>
                    <span class="u-role">${semester}</span>
                    <p class="u-info">${s.email}</p>
                    <a href="user-detail.html?uid=${s.id}" class="btn-archive">
                        <i class="fa-solid fa-folder-open"></i> Buka Arsip Nilai
                    </a>
                `;
                grid.appendChild(card);
            });
        };

        // Render Awal
        renderCards(students);

        // Fitur Search (Live)
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = students.filter(s => s.name.toLowerCase().includes(keyword));
            renderCards(filtered);
        });

    } catch (err) {
        console.error(err);
        grid.innerHTML = '<p style="color:red; text-align:center;">Gagal memuat data.</p>';
    }
}

// --- BAGIAN 2: DETAIL ARSIP SISWA ---
async function loadStudentDetail() {
    // Ambil UID dari URL (?uid=xxxxx)
    const urlParams = new URLSearchParams(window.location.search);
    const targetUid = urlParams.get('uid');

    if(!targetUid) { alert("Siswa tidak ditemukan"); window.location.href = 'users-list.html'; return; }

    try {
        // 1. Ambil Profil Siswa
        const userDoc = await db.collection('users').doc(targetUid).get();
        if(!userDoc.exists) throw new Error("User hilang");
        
        const s = userDoc.data();
        
        // Isi Sidebar Kiri
        document.getElementById('d-name').textContent = s.name;
        document.getElementById('d-email').textContent = s.email;
        document.getElementById('d-gender').textContent = s.gender || '-';
        document.getElementById('d-age').textContent = s.age || '-';
        document.getElementById('d-semester').textContent = s.semester || '-';
        document.getElementById('d-address').textContent = s.address || '-';

        // Avatar Logic Lagi
        let avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${targetUid}`;
        if (s.gender === 'Laki-laki') avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${targetUid}&top=shortHair,shortFlat,shortRound,shavedSides&hairColor=2c1b18`;
        else if (s.gender === 'Perempuan') avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${targetUid}&top=longHair,straight01,straight02,bun,curvy&hairColor=2c1b18&clothe=blazerAndShirt`;
        
        document.getElementById('d-avatar').src = avatarUrl;

        // 2. Ambil Arsip Nilai (Tanpa OrderBy agar aman Index)
        const subSnap = await db.collection('quiz_submissions')
            .where('studentUid', '==', targetUid)
            .get();

        const listDiv = document.getElementById('grades-list');
        
        if(subSnap.empty) {
            listDiv.innerHTML = `
                <div style="text-align:center; padding:30px; border:2px dashed #eee; border-radius:10px;">
                    <i class="fa-solid fa-folder-open" style="font-size:3em; color:#ddd; margin-bottom:10px;"></i>
                    <p>Siswa ini belum mengerjakan kuis apapun.</p>
                </div>`;
            return;
        }

        // Urutkan Manual (Terbaru di atas)
        let subs = [];
        subSnap.forEach(doc => subs.push(doc.data()));
        subs.sort((a,b) => (b.submittedAt?.seconds || 0) - (a.submittedAt?.seconds || 0));

        // Buat Tabel
        let html = `
            <table style="width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="background:#f8f9fa; text-align:left;">
                        <th style="padding:12px;">Kuis</th>
                        <th style="padding:12px;">Tanggal</th>
                        <th style="padding:12px;">Nilai</th>
                    </tr>
                </thead>
                <tbody>
        `;

        subs.forEach(sub => {
            const date = sub.submittedAt ? sub.submittedAt.toDate().toLocaleDateString('id-ID') : '-';
            const badge = sub.score >= 70 ? 'score-high' : 'score-low';
            
            html += `
                <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:12px;">
                        <strong>${sub.quizTitle}</strong><br>
                        <small style="color:gray;">ID: ${sub.quizId}</small>
                    </td>
                    <td style="padding:12px;">${date}</td>
                    <td style="padding:12px;"><span class="score-pill ${badge}">${sub.score}</span></td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        listDiv.innerHTML = html;

    } catch (err) {
        console.error(err);
        alert("Gagal memuat detail siswa.");
    }
}
