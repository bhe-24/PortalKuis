// js/admin-quiz.js

// Variabel Global untuk menampung soal sementara sebelum disimpan
let tempQuestions = [];

// 1. Cek Login & Role Admin
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            if (doc.data().role !== 'pengajar') {
                alert("Akses Ditolak.");
                window.location.href = '../dashboard.html';
            } else {
                // Kalau aman, muat daftar kuis yang sudah ada
                loadExistingQuizzes();
            }
        });
    } else {
        window.location.href = '../index.html';
    }
});

// 2. Fungsi Memuat Daftar Kuis
async function loadExistingQuizzes() {
    const listDiv = document.getElementById('quiz-list-admin');
    listDiv.innerHTML = '<p>Sedang memuat...</p>';

    try {
        const snapshot = await db.collection('quizzes')
            .where('type', '==', 'Kuis')
            .orderBy('createdAt', 'desc')
            .get();

        if (snapshot.empty) {
            listDiv.innerHTML = '<p>Belum ada kuis yang dibuat.</p>';
            return;
        }

        listDiv.innerHTML = ''; // Bersihkan

        snapshot.forEach(doc => {
            const data = doc.data();
            const el = document.createElement('div');
            el.className = 'item-card'; // Pakai class CSS kita
            el.style.display = 'flex';
            el.style.justifyContent = 'space-between';
            el.style.alignItems = 'center';
            
            el.innerHTML = `
                <div>
                    <h3 style="margin:0; text-align:left;">${data.title}</h3>
                    <p style="margin:5px 0 0 0; color:gray;">${data.subject} | ${data.duration} Menit | ${data.questions.length} Soal</p>
                </div>
                <div>
                    <button class="btn btn-danger btn-sm" onclick="deleteQuiz('${doc.id}', '${data.title}')" style="width:auto;">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            listDiv.appendChild(el);
        });

    } catch (error) {
        console.error(error);
        listDiv.innerHTML = '<p style="color:red">Gagal memuat data.</p>';
    }
}

// 3. Fungsi Hapus Kuis
window.deleteQuiz = async function(id, title) {
    if (confirm(`Yakin ingin menghapus kuis "${title}"? Data tidak bisa kembali.`)) {
        showLoading();
        try {
            await db.collection('quizzes').doc(id).delete();
            alert("Kuis berhasil dihapus.");
            loadExistingQuizzes(); // Reload list
        } catch (err) {
            alert("Gagal menghapus.");
        } finally {
            hideLoading();
        }
    }
};

// 4. Logika Tab (Manual vs Massal)
const tabManual = document.getElementById('btn-tab-manual');
const tabBulk = document.getElementById('btn-tab-bulk');
const divManual = document.getElementById('tab-manual');
const divBulk = document.getElementById('tab-bulk');

tabManual.onclick = () => {
    divManual.classList.remove('hidden');
    divBulk.classList.add('hidden');
    tabManual.classList.replace('btn-secondary', 'btn-primary');
    tabBulk.classList.replace('btn-primary', 'btn-secondary');
};

tabBulk.onclick = () => {
    divBulk.classList.remove('hidden');
    divManual.classList.add('hidden');
    tabBulk.classList.replace('btn-secondary', 'btn-primary');
    tabManual.classList.replace('btn-primary', 'btn-secondary');
};

// 5. Tambah Soal Manual
document.getElementById('btn-add-manual').onclick = () => {
    const qText = document.getElementById('q-text').value;
    // Ambil semua input opsi
    const opts = Array.from(document.querySelectorAll('.opt-input')).map(input => input.value);
    // Ambil radio button yang dicentang
    const correctIndex = document.querySelector('input[name="correct"]:checked').value;

    // Validasi sederhana
    if (!qText || opts.some(o => !o)) {
        alert("Mohon isi pertanyaan dan semua opsi jawaban.");
        return;
    }

    // Masukkan ke array sementara
    tempQuestions.push({
        questionText: qText,
        options: opts,
        correctAnswerIndex: parseInt(correctIndex)
    });

    updatePreview();
    
    // Reset Form Input
    document.getElementById('q-text').value = '';
    document.querySelectorAll('.opt-input').forEach(i => i.value = '');
    document.querySelector('input[name="correct"][value="0"]').checked = true;
};

// 6. Tambah Soal Massal (Parser)
document.getElementById('btn-process-bulk').onclick = () => {
    const rawText = document.getElementById('bulk-text').value;
    if (!rawText.trim()) return alert("Teks kosong.");

    // Pisahkan berdasarkan baris kosong (double enter)
    const blocks = rawText.split(/\n\s*\n/);
    let count = 0;

    blocks.forEach(block => {
        const lines = block.trim().split('\n');
        if (lines.length >= 5) { // Minimal 1 baris soal + 4 baris opsi
            const questionText = lines[0].replace(/^\d+\.\s*/, '').trim(); // Hapus nomor di depan (1. )
            const options = [];
            let correctIndex = 0;

            for (let i = 1; i <= 4; i++) {
                let optText = lines[i].trim();
                // Cek tanda bintang
                if (optText.startsWith('*')) {
                    correctIndex = i - 1;
                    optText = optText.substring(1).trim(); // Hapus bintang
                }
                // Hapus huruf opsi (A. B. C.)
                optText = optText.replace(/^[A-D]\.\s*/i, '').trim();
                options.push(optText);
            }

            tempQuestions.push({
                questionText: questionText,
                options: options,
                correctAnswerIndex: correctIndex
            });
            count++;
        }
    });

    alert(`Berhasil memproses ${count} soal.`);
    updatePreview();
    document.getElementById('bulk-text').value = '';
};

// 7. Update Tampilan Preview Soal
function updatePreview() {
    const listUl = document.getElementById('q-list');
    const countSpan = document.getElementById('q-count');
    
    listUl.innerHTML = '';
    countSpan.textContent = tempQuestions.length;

    tempQuestions.forEach((q, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${index + 1}. ${q.questionText}</strong><br>
            <small>Kunci: ${q.options[q.correctAnswerIndex]}</small>
        `;
        listUl.appendChild(li);
    });
}

// 8. SIMPAN KUIS KE FIREBASE
document.getElementById('form-quiz').onsubmit = async (e) => {
    e.preventDefault();

    const title = document.getElementById('quiz-title').value;
    const subject = document.getElementById('quiz-subject').value;
    const duration = document.getElementById('quiz-duration').value;

    if (tempQuestions.length === 0) {
        alert("Minimal harus ada 1 soal!");
        return;
    }

    if (confirm("Simpan kuis ini?")) {
        showLoading(); // Tampilkan overlay

        try {
            await db.collection('quizzes').add({
                title: title,
                subject: subject,
                duration: parseInt(duration),
                type: 'Kuis',
                questions: tempQuestions,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                teacherName: auth.currentUser.displayName || 'Admin'
            });

            alert("Kuis Berhasil Disimpan!");
            window.location.reload(); // Refresh halaman untuk reset

        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan kuis.");
        } finally {
            hideLoading();
        }
    }
};
