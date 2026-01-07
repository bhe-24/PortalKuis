// js/kuis-daftar.js

auth.onAuthStateChanged(async (user) => {
    if (user) {
        loadKuisList(user.uid);
    } else {
        window.location.href = 'index.html';
    }
});

async function loadKuisList(studentUid) {
    const listContainer = document.getElementById('kuis-list-container');
    
    try {
        // 1. Ambil Semua Kuis (Tipe 'Kuis')
        const kuisSnapshot = await db.collection('quizzes')
            .where('type', '==', 'Kuis') // Filter hanya tipe Kuis
            .get();

        // 2. Ambil Riwayat Pengerjaan Siswa Ini
        const submissionSnapshot = await db.collection('quiz_submissions')
            .where('studentUid', '==', studentUid)
            .get();

        // Buat Peta (Map) agar mudah mengecek: "Kuis ID ini nilainya berapa?"
        const submissions = {};
        submissionSnapshot.forEach(doc => {
            const data = doc.data();
            submissions[data.quizId] = data.score;
        });

        // 3. Render Tampilan
        listContainer.innerHTML = ''; // Bersihkan loading text

        if (kuisSnapshot.empty) {
            listContainer.innerHTML = '<p style="text-align:center;">Belum ada kuis yang tersedia.</p>';
            return;
        }

        kuisSnapshot.forEach(doc => {
            const kuis = doc.data();
            const kuisId = doc.id;
            const userScore = submissions[kuisId]; // Nilai (undefined jika belum dikerjakan)
            const isDone = userScore !== undefined;

            // Buat elemen Kartu HTML
            const card = document.createElement('div');
            card.className = 'item-card'; // Pakai class CSS kita
            
            // Tentukan isi kartu berdasarkan status (Sudah/Belum)
            if (isDone) {
                // Tampilan SUDAH MENGERJAKAN
                card.classList.add('clickable'); // Supaya efek hover jalan
                card.style.borderColor = 'var(--success-color)'; // Border hijau
                card.innerHTML = `
                    <div class="card-header">
                        <h3 style="margin:0;">${kuis.title}</h3>
                        <span class="tag tag-green"><i class="fa-solid fa-check"></i> Selesai</span>
                    </div>
                    <p>${kuis.subject}</p>
                    <hr style="margin: 10px 0; border: 0; border-top: 1px dashed #ccc;">
                    <div style="text-align: center;">
                        <p style="margin:0;">Nilai Anda:</p>
                        <h2 style="color: var(--success-color); font-size: 2em; margin: 5px 0;">${userScore}</h2>
                    </div>
                `;
                // Kalau diklik, mungkin nanti kita buat fitur lihat detail/review (Next Project)
                card.onclick = () => alert(`Anda sudah menyelesaikan kuis ini dengan nilai ${userScore}.`);
            } else {
                // Tampilan BELUM MENGERJAKAN
                card.innerHTML = `
                    <div class="card-header">
                        <h3 style="margin:0;">${kuis.title}</h3>
                        <span class="tag tag-orange">Belum Dikerjakan</span>
                    </div>
                    <p><strong>Mapel:</strong> ${kuis.subject}</p>
                    <p><i class="fa-regular fa-clock"></i> ${kuis.duration} Menit &nbsp;|&nbsp; <i class="fa-solid fa-list-ol"></i> ${kuis.questions.length} Soal</p>
                    <div style="margin-top: 15px;">
                        <a href="kuis-pre.html?id=${kuisId}" class="btn btn-primary" style="text-decoration:none;">
                            Mulai Mengerjakan <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                `;
            }

            listContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error memuat kuis:", error);
        listContainer.innerHTML = '<p style="text-align:center; color:red;">Gagal memuat data. Periksa koneksi internet.</p>';
    }
}
