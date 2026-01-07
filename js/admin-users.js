// js/admin-users.js

// Cek Auth Admin
auth.onAuthStateChanged(user => {
    if (!user) { window.location.href = '../index.html'; return; }
    
    db.collection('users').doc(user.uid).get().then(doc => {
        if (!doc.exists || doc.data().role !== 'pengajar') {
            alert("Akses Ditolak"); window.location.href = '../dashboard.html';
        } else {
            // DETEKSI HALAMAN
            if (document.getElementById('users-grid')) {
                loadAllStudents(); // List Siswa
            } 
            if (document.getElementById('d-name')) {
                loadStudentDetail(); // Detail Siswa
            }
        }
    });
});

// --- BAGIAN 1: LIST SEMUA SISWA (ID CARD STYLE) ---
async function loadAllStudents() {
    const grid = document.getElementById('users-grid');
    const searchInput = document.getElementById('search-input');
    
    try {
        console.log("Mengambil data...");
        const snapshot = await db.collection('users').get();
        let students = [];
        
        snapshot.forEach(doc => {
            const data = doc.data();
            // Filter manual: Hanya Siswa
            if (data.role && data.role.toLowerCase() === 'siswa') {
                students.push({ id: doc.id, ...data });
            }
        });

        // FUNGSI RENDER KARTU (ID CARD STYLE)
        const renderCards = (dataList) => {
            grid.innerHTML = ''; 

            if(dataList.length === 0) {
                grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:gray;">Tidak ada data.</p>';
                return;
            }

            dataList.forEach(s => {
                // Avatar Logic
                let seed = s.id;
                let avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
                
                if (s.gender === 'Laki-laki') {
                    avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=shortHair,shortFlat,shortRound,shavedSides&hairColor=2c1b18`;
                } else if (s.gender === 'Perempuan') {
                    avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=longHair,straight01,straight02,bun,curvy&hairColor=2c1b18&clothe=blazerAndShirt`;
                }

                const semester = s.semester || 'Smt -';
                const displayName = s.name || 'Siswa';
                const displayClass = s.class_room || 'Umum'; // Jika ada data kelas

                // STRUKTUR HTML SESUAI CSS DI FILE HTML TADI
                const card = document.createElement('div');
                card.className = 'id-card'; // Class utama
                card.innerHTML = `
                    <div class="card-hole"></div>
                    <div class="card-header-bg"></div>
                    
                    <div class="card-photo">
                        <img src="${avatarUrl}" alt="Foto">
                    </div>
                    
                    <div class="card-body">
                        <h3 class="student-name">${displayName}</h3>
                        <span class="student-id">SISWA</span>
                        
                        <div class="divider"></div>
                        
                        <div class="meta-info">
                            <span class="meta-label">Semester</span>
                            <span>${semester}</span>
                        </div>
                         <div class="meta-info">
                            <span class="meta-label">Gender</span>
                            <span>${s.gender || '-'}</span>
                        </div>
                    </div>

                    <a href="user-detail.html?uid=${s.id}" class="btn-card-action">
                        <i class="fa-solid fa-folder-open"></i> LIHAT ARSIP NILAI
                    </a>
                `;
                grid.appendChild(card);
            });
        };

        renderCards(students);

        // Live Search
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = students.filter(s => {
                const nameCheck = s.name ? s.name.toLowerCase().includes(keyword) : false;
                return nameCheck;
            });
            renderCards(filtered);
        });

    } catch (err) {
        console.error(err);
        grid.innerHTML = `<p style="color:red; text-align:center;">Gagal: ${err.message}</p>`;
    }
}

// --- BAGIAN 2: DETAIL (Tidak perlu diubah) ---
async function loadStudentDetail() {
    // ... (Biarkan kode loadStudentDetail sama seperti sebelumnya) ...
    // Copy ulang fungsi loadStudentDetail dari jawaban sebelumnya jika hilang
    const urlParams = new URLSearchParams(window.location.search);
    const targetUid = urlParams.get('uid');

    if(!targetUid) { window.location.href = 'users-list.html'; return; }

    try {
        const userDoc = await db.collection('users').doc(targetUid).get();
        if(!userDoc.exists) throw new Error("User hilang");
        const s = userDoc.data();
        
        document.getElementById('d-name').textContent = s.name || 'Tanpa Nama';
        document.getElementById('d-email').textContent = s.email;
        document.getElementById('d-gender').textContent = s.gender || '-';
        document.getElementById('d-age').textContent = s.age || '-';
        document.getElementById('d-semester').textContent = s.semester || '-';
        document.getElementById('d-address').textContent = s.address || '-';

        let avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${targetUid}`;
        if (s.gender === 'Laki-laki') avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${targetUid}&top=shortHair,shortFlat,shortRound,shavedSides&hairColor=2c1b18`;
        else if (s.gender === 'Perempuan') avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${targetUid}&top=longHair,straight01,straight02,bun,curvy&hairColor=2c1b18&clothe=blazerAndShirt`;
        
        document.getElementById('d-avatar').src = avatarUrl;

        const subSnap = await db.collection('quiz_submissions').where('studentUid', '==', targetUid).get();
        const listDiv = document.getElementById('grades-list');
        
        if(subSnap.empty) {
            listDiv.innerHTML = `<div style="text-align:center; padding:30px; border:2px dashed #eee; border-radius:10px;"><p>Belum ada nilai.</p></div>`;
            return;
        }

        let subs = [];
        subSnap.forEach(doc => subs.push(doc.data()));
        subs.sort((a,b) => (b.submittedAt?.seconds || 0) - (a.submittedAt?.seconds || 0));

        let html = `<table style="width:100%; border-collapse:collapse;"><thead><tr style="background:#f8f9fa; text-align:left;"><th style="padding:12px;">Kuis</th><th style="padding:12px;">Tgl</th><th style="padding:12px;">Nilai</th></tr></thead><tbody>`;
        subs.forEach(sub => {
            const date = sub.submittedAt ? sub.submittedAt.toDate().toLocaleDateString('id-ID') : '-';
            const badge = sub.score >= 70 ? 'background:#e6f7ec; color:#28a745;' : 'background:#fdeeee; color:#dc3545;';
            html += `<tr style="border-bottom:1px solid #eee;"><td style="padding:12px;"><strong>${sub.quizTitle}</strong></td><td style="padding:12px;">${date}</td><td style="padding:12px;"><span style="padding:5px 10px; border-radius:20px; font-weight:bold; font-size:0.9em; ${badge}">${sub.score}</span></td></tr>`;
        });
        html += '</tbody></table>';
        listDiv.innerHTML = html;

    } catch (err) { console.error(err); }
}
