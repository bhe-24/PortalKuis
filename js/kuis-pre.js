// js/kuis-pre.js

// 1. Ambil ID Kuis dari URL Browser
const urlParams = new URLSearchParams(window.location.search);
const kuisId = urlParams.get('id');

// Kalau user iseng buka file ini tanpa ID, tendang balik
if (!kuisId) {
    alert("Kuis tidak ditemukan!");
    window.location.href = 'kuis-daftar.html';
}

// 2. Cek Login
auth.onAuthStateChanged(user => {
    if (user) {
        loadKuisDetail(kuisId);
    } else {
        window.location.href = 'index.html';
    }
});

// 3. Fungsi Load Detail
function loadKuisDetail(id) {
    showLoading(); // Tampilkan spinner

    db.collection('quizzes').doc(id).get()
        .then(doc => {
            hideLoading(); // Sembunyikan spinner

            if (doc.exists) {
                const data = doc.data();
                
                // Isi data ke HTML
                document.getElementById('detail-title').textContent = data.title;
                document.getElementById('detail-subject').textContent = `: ${data.subject}`;
                document.getElementById('detail-count').textContent = `: ${data.questions.length} Soal`;
                document.getElementById('detail-duration').textContent = `: ${data.duration} Menit`;
                document.getElementById('detail-teacher').textContent = `: ${data.teacherName || '-'}`;

                // Aktifkan Tombol Mulai
                const btnStart = document.getElementById('btn-start');
                
                // Saat tombol Mulai diklik -> Lempar ke Halaman Ujian Utama
                btnStart.onclick = () => {
                    // Kita bawa lagi ID-nya ke halaman ujian
                    window.location.href = `kuis-main.html?id=${id}`;
                };

            } else {
                alert("Data kuis tidak ditemukan di database.");
                window.location.href = 'kuis-daftar.html';
            }
        })
        .catch(err => {
            hideLoading();
            console.error(err);
            alert("Gagal memuat data.");
        });
}
