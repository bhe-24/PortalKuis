// js/admin-quiz.js

let tempQuestions = [];

// 1. Fungsi Rich Text (Bold/Italic)
function formatDoc(cmd) {
    document.execCommand(cmd, false, null);
    document.getElementById('q-text').focus();
}

// 2. Tambah Soal Manual
function addManualQuestion() {
    const qTextDiv = document.getElementById('q-text');
    const qText = qTextDiv.innerHTML; // Ambil HTML-nya (biar bold/italic kebawa)
    
    // Validasi kosong
    if (qTextDiv.textContent.trim() === "") {
        return showAlert("Gagal", "Pertanyaan tidak boleh kosong.", "error");
    }

    const opts = Array.from(document.querySelectorAll('.opt-input')).map(i => i.value);
    if (opts.some(o => !o.trim())) return showAlert("Gagal", "Isi semua opsi A-D.", "error");

    const correctIndex = document.querySelector('input[name="correct"]:checked').value;

    // Masukkan ke Array
    tempQuestions.push({
        questionText: qText,
        options: opts,
        correctAnswerIndex: parseInt(correctIndex)
    });

    renderPreview();
    
    // Reset Form
    qTextDiv.innerHTML = '';
    document.querySelectorAll('.opt-input').forEach(i => i.value = '');
    document.querySelector('input[value="0"]').checked = true;
    
    showAlert("Sukses", "Soal berhasil ditambahkan ke daftar.", "success");
}

// 3. FUNGSI IMPORT DARI BANK SOAL
function importBankSoal(amount) {
    // BANK_SOAL_SASTRA diambil dari file question-bank.js
    if (typeof BANK_SOAL_SASTRA === 'undefined') {
        return showAlert("Error", "File Bank Soal tidak ditemukan.", "error");
    }

    // Ambil N soal secara acak dari bank
    // Tapi kita copy semua struktur datanya biar cocok dengan format kita
    const randomSet = [...BANK_SOAL_SASTRA].sort(() => 0.5 - Math.random()).slice(0, amount);

    let count = 0;
    randomSet.forEach(item => {
        tempQuestions.push({
            questionText: item.q,
            options: item.opts,
            correctAnswerIndex: item.kunci
        });
        count++;
    });

    renderPreview();
    showAlert("Berhasil", `Berhasil mengimpor ${count} soal Sastra.`, "success");
}

// 4. Render Preview List
function renderPreview() {
    const container = document.getElementById('preview-list');
    const countSpan = document.getElementById('q-count');
    
    container.innerHTML = '';
    countSpan.textContent = tempQuestions.length;

    tempQuestions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        
        // Kunci Jawaban Huruf
        const keyChar = String.fromCharCode(65 + q.correctAnswerIndex); 

        div.innerHTML = `
            <div class="q-delete-btn" onclick="removeQuestion(${index})"><i class="fa-solid fa-trash"></i></div>
            <div style="font-weight:bold; margin-bottom:5px;">No. ${index + 1}</div>
            <div style="margin-bottom:10px;">${q.questionText}</div> <div style="font-size:0.9em; color:#666; background:#f5f5f5; padding:5px; border-radius:4px;">
                Kunci: <strong>${keyChar}. ${q.options[q.correctAnswerIndex]}</strong>
            </div>
        `;
        container.appendChild(div);
    });
}

// 5. Hapus Soal dari List
function removeQuestion(index) {
    tempQuestions.splice(index, 1);
    renderPreview();
}

// 6. SIMPAN KUIS KE FIREBASE
document.getElementById('btn-save-quiz').onclick = async () => {
    const title = document.getElementById('quiz-title').value;
    const subject = document.getElementById('quiz-subject').value;
    const duration = document.getElementById('quiz-duration').value;
    const limit = document.getElementById('quiz-limit').value; // Limit soal per siswa

    if (!title || !subject || !duration) return showAlert("Gagal", "Lengkapi Judul, Mapel, dan Durasi.", "error");
    if (tempQuestions.length === 0) return showAlert("Gagal", "Belum ada soal yang dibuat.", "error");

    const yakin = await showConfirm("Terbitkan Kuis?", `Akan menyimpan ${tempQuestions.length} soal.`);
    
    if (yakin) {
        showLoading();
        try {
            await db.collection('quizzes').add({
                title: title,
                subject: subject,
                duration: parseInt(duration),
                type: 'Kuis',
                questions: tempQuestions, // Simpan SEMUA soal (pool)
                displayLimit: limit ? parseInt(limit) : 0, // 0 = Tampilkan semua, >0 = Acak sejumlah limit
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                teacherUid: auth.currentUser.uid
            });

            hideLoading();
            await showAlert("Berhasil", "Kuis telah diterbitkan!", "success");
            window.location.reload();
        } catch (err) {
            hideLoading();
            console.error(err);
            showAlert("Error", err.message, "error");
        }
    }
};

// Cek Auth
auth.onAuthStateChanged(user => {
    if (!user) window.location.href = '../index.html';
});
