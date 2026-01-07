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
        // 1. Ambil Data Kuis
        const kuisSnapshot = await db.collection('quizzes')
            .where('type', '==', 'Kuis')
            .get();

        // 2. Ambil Riwayat (Untuk cek mana yang sudah dikerjakan)
        const submissionSnapshot = await db.collection('quiz_submissions')
            .where('studentUid', '==', studentUid)
            .get();

        // Mapping Data Submission
        const submissions = {};
        submissionSnapshot.forEach(doc => {
            const data = doc.data();
            submissions[data.quizId] = data.score;
        });

        // 3. Render Tampilan
        listContainer.innerHTML = ''; // Bersihkan loading

        if (kuisSnapshot.empty) {
            listContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px; background: white; border-radius: 15px;">
                    <i class="fa-solid fa-box-open" style="font-size: 3em; color: #ddd; margin-bottom: 15px;"></i>
                    <p>Belum ada kuis yang tersedia saat ini.</p>
                </div>`;
            return;
        }

        kuisSnapshot.forEach(doc => {
            const kuis = doc.data();
            const kuisId = doc.id;
            const userScore = submissions[kuisId]; // Nilai (undefined jika belum)
            const isDone = userScore !== undefined;

            // Buat Elemen Kartu
            const card = document.createElement('div');
            
            // Logika Tampilan (Sudah vs Belum)
            if (isDone) {
                // --- SUDAH DIKERJAKAN ---
                card.className = 'quiz-card done';
                card.innerHTML = `
                    <div class="q-header">
                        <div>
                            <h3 class="q-title">${kuis.title}</h3>
                            <p class="q-subject">${kuis.subject}</p>
                        </div>
                        <div class="q-icon"><i class="fa-solid fa-check"></i></div>
                    </div>
                    
                    <div class="q-meta">
                        <span><i class="fa-regular fa-clock"></i> Selesai</span>
                        <span><i class="fa-solid fa-list-ol"></i> ${kuis.questions.length} Soal</span>
                    </div>

                    <div class="q-action">
                        <div class="status-done">
                            Nilai: <span style="font-size: 1.2em;">${userScore}</span>
                        </div>
                    </div>
                `;
                // Klik kartu untuk info
                card.onclick = () => alert(`Anda sudah menyelesaikan kuis ini dengan nilai ${userScore}.`);
                card.style.cursor = 'pointer';

            } else {
                // --- BELUM DIKERJAKAN (BARU) ---
                card.className = 'quiz-card';
                card.innerHTML = `
                    <div class="q-header">
                        <div>
                            <h3 class="q-title">${kuis.title}</h3>
                            <p class="q-subject">${kuis.subject}</p>
                        </div>
                        <div class="q-icon"><i class="fa-solid fa-pen"></i></div>
                    </div>
                    
                    <div class="q-meta">
                        <span><i class="fa-regular fa-clock"></i> ${kuis.duration} Menit</span>
                        <span><i class="fa-solid fa-list-ol"></i> ${kuis.questions.length} Soal</span>
                    </div>

                    <div class="q-action">
                        <a href="kuis-pre.html?id=${kuisId}" class="btn-start">
                            Mulai Mengerjakan <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                `;
            }

            listContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error memuat kuis:", error);
        listContainer.innerHTML = `<p style="text-align:center; color:red; grid-column: 1/-1;">Gagal memuat data. Periksa koneksi.</p>`;
    }
}
