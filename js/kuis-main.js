// js/kuis-main.js

// --- VARIABEL STATE (Penyimpan status sementara) ---
let currentQuizData = null;      // Data kuis dari Firebase
let currentQuestionIndex = 0;    // Kita sedang di soal nomor berapa (mulai dari 0)
let userAnswers = [];            // Array menyimpan jawaban user: [0, 2, null, 1...]
let flaggedQuestions = [];       // Array status ragu-ragu: [false, true, false...]
let timerInterval = null;        // Variabel untuk Timer
let currentUserUid = null;       // ID Siswa
let currentUserName = null;      // Nama Siswa

// 1. Ambil ID Kuis dari URL
const urlParams = new URLSearchParams(window.location.search);
const kuisId = urlParams.get('id');

if (!kuisId) window.location.href = 'kuis-daftar.html';

// 2. Cek Login & Muat Data
auth.onAuthStateChanged(user => {
    if (user) {
        currentUserUid = user.uid;
        // Ambil nama user dulu untuk disimpan di sertifikat/hasil nanti
        db.collection('users').doc(user.uid).get().then(doc => {
            currentUserName = doc.data().name;
            startQuizSession(kuisId);
        });
    } else {
        window.location.href = 'index.html';
    }
});

// 3. Persiapan Sesi Ujian
async function startQuizSession(id) {
    try {
        const doc = await db.collection('quizzes').doc(id).get();
        if (!doc.exists) { alert("Soal hilang!"); window.location.href = 'kuis-daftar.html'; return; }

        currentQuizData = doc.data();
        
        // Inisialisasi Array Jawaban (Isi dengan null/kosong dulu)
        userAnswers = new Array(currentQuizData.questions.length).fill(null);
        flaggedQuestions = new Array(currentQuizData.questions.length).fill(false);

        // Render Tampilan Pertama
        renderNavigationGrid();
        renderQuestion();
        startTimer(currentQuizData.duration);

    } catch (err) {
        console.error(err);
        alert("Gagal memuat soal.");
    }
}

// 4. Fungsi Render Soal (Tampilkan Soal ke Layar)
function renderQuestion() {
    const q = currentQuizData.questions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    const badge = document.getElementById('question-badge');

    // Update Nomor Soal di Header
    badge.textContent = `Soal #${currentQuestionIndex + 1}`;

    // Buat HTML Opsi Jawaban (A, B, C, D)
    let optionsHTML = q.options.map((opt, index) => {
        const prefix = String.fromCharCode(65 + index); // 65 = 'A'
        const isChecked = userAnswers[currentQuestionIndex] === index ? 'checked' : '';
        
        return `
        <div class="form-group">
            <input type="radio" id="opt-${index}" name="quiz-option" value="${index}" ${isChecked}>
            <label for="opt-${index}">
                <span class="option-prefix">${prefix}</span>
                <span class="option-text">${opt}</span>
            </label>
        </div>`;
    }).join('');

    // Masukkan ke Container
    container.innerHTML = `
        <div class="item-card ujian-question-container">
            <h3 style="margin-top:0;">${q.questionText}</h3>
            ${optionsHTML}
        </div>
    `;

    // Pasang Event Listener: Kalau opsi diklik, simpan jawaban
    container.querySelectorAll('input[name="quiz-option"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const val = parseInt(e.target.value);
            userAnswers[currentQuestionIndex] = val; // Simpan ke array
            
            // Otomatis hilangkan tanda "Ragu" kalau sudah dijawab (opsional, tergantung selera)
            // flaggedQuestions[currentQuestionIndex] = false; 
            
            updateGridStatus(); // Update warna kotak nomor soal
        });
    });

    // Update Status Tombol (Prev/Next)
    document.getElementById('btn-prev').disabled = (currentQuestionIndex === 0);
    const btnNext = document.getElementById('btn-next');
    
    // Kalau soal terakhir, ubah tombol "Next" jadi "Selesai"
    if (currentQuestionIndex === currentQuizData.questions.length - 1) {
        btnNext.innerHTML = 'Selesaikan Ujian <i class="fa-solid fa-check"></i>';
        btnNext.classList.remove('btn-primary');
        btnNext.classList.add('btn-success');
        btnNext.onclick = () => finishExam(false); // Mode manual submit
    } else {
        btnNext.innerHTML = 'Lanjut <i class="fa-solid fa-chevron-right"></i>';
        btnNext.classList.remove('btn-success');
        // btnNext.classList.add('btn-primary'); // (optional jika ada class ini)
        btnNext.onclick = () => {
            currentQuestionIndex++;
            renderQuestion();
        };
    }
}

// 5. Render Navigasi Grid (Kotak Angka 1, 2, 3...)
function renderNavigationGrid() {
    const container = document.getElementById('nav-grid-container');
    let html = '<div class="item-card"><h4 style="margin:0 0 10px 0;">Navigasi Soal</h4><div class="nav-grid">';
    
    currentQuizData.questions.forEach((_, i) => {
        html += `<button id="nav-btn-${i}" class="nav-btn" onclick="jumpToQuestion(${i})">${i + 1}</button>`;
    });

    html += '</div></div>';
    container.innerHTML = html;
    updateGridStatus();
}

// Fungsi Update Warna Kotak Navigasi
function updateGridStatus() {
    currentQuizData.questions.forEach((_, i) => {
        const btn = document.getElementById(`nav-btn-${i}`);
        // Reset kelas
        btn.className = 'nav-btn';
        
        if (i === currentQuestionIndex) btn.classList.add('current'); // Sedang aktif
        if (flaggedQuestions[i]) btn.classList.add('flagged');      // Ragu
        else if (userAnswers[i] !== null) btn.classList.add('answered'); // Sudah dijawab
    });
}

// Fungsi Loncat Soal (Dipanggil saat klik nomor)
window.jumpToQuestion = function(index) {
    currentQuestionIndex = index;
    renderQuestion();
    updateGridStatus();
}

// 6. Tombol-tombol Navigasi Bawah
document.getElementById('btn-prev').onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateGridStatus();
    }
};

document.getElementById('btn-flag').onclick = () => {
    // Toggle status ragu (True <-> False)
    flaggedQuestions[currentQuestionIndex] = !flaggedQuestions[currentQuestionIndex];
    
    // Ubah teks tombol
    const btnText = flaggedQuestions[currentQuestionIndex] ? 'Hapus Tanda Ragu' : 'Ragu-ragu';
    document.getElementById('btn-flag').innerHTML = `<i class="fa-regular fa-flag"></i> ${btnText}`;
    
    updateGridStatus();
};

document.getElementById('btn-giveup').onclick = () => {
    if(confirm("Yakin ingin menyerah? Jawaban tidak akan disimpan.")) {
        window.location.href = 'dashboard.html';
    }
};

// 7. TIMER (Hitung Mundur)
function startTimer(durationMinutes) {
    let timeLeft = durationMinutes * 60; // Ubah ke detik
    const display = document.getElementById('timer-display');

    timerInterval = setInterval(() => {
        const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
        const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        
        display.textContent = `${h}:${m}:${s}`;
        timeLeft--;

        // Peringatan 1 menit terakhir (merah)
        if (timeLeft < 60) display.style.backgroundColor = '#dc3545';

        // Waktu Habis
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert("WAKTU HABIS! Jawaban Anda akan dikirim otomatis.");
            finishExam(true); // true = force submit
        }
    }, 1000);
}

// 8. LOGIKA SELESAI (Submit)
async function finishExam(force = false) {
    // Jika bukan paksaan (waktu habis), tanya dulu
    if (!force) {
        // Cek apakah masih ada soal yang belum dijawab atau ragu
        const unanswered = userAnswers.filter(a => a === null).length;
        const flagged = flaggedQuestions.filter(f => f === true).length;
        
        let msg = "Yakin ingin menyelesaikan ujian?";
        if (unanswered > 0 || flagged > 0) {
            msg += `\n\nMasih ada ${unanswered} soal kosong dan ${flagged} soal ragu-ragu.`;
        }
        
        if (!confirm(msg)) return;
    }

    clearInterval(timerInterval);
    showLoading(); // Tampilkan loading overlay

    // --- HITUNG NILAI ---
    let score = 0;
    currentQuizData.questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = parseInt(q.correctAnswerIndex);
        if (userAnswer === correctAnswer) {
            score++;
        }
    });

    // Skala 0-100
    const finalScore = Math.round((score / currentQuizData.questions.length) * 100);

    // --- SIMPAN KE FIREBASE ---
    const payload = {
        studentUid: currentUserUid,
        studentName: currentUserName,
        quizId: kuisId,
        quizTitle: currentQuizData.title,
        score: finalScore,
        answers: userAnswers, // Simpan jawaban siswa untuk keperluan review nanti
        submittedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        await db.collection('quiz_submissions').add(payload);
        // Redirect ke Halaman Hasil (Result)
        // Kita bawa Score & ID lewat URL biar halaman sana tidak perlu loading ulang
        window.location.href = `kuis-result.html?id=${kuisId}&score=${finalScore}`;
    } catch (err) {
        console.error(err);
        hideLoading();
        alert("Terjadi kesalahan saat menyimpan jawaban. Silakan coba lagi atau hubungi admin.");
    }
}

// Mencegah Refresh Halaman Tidak Sengaja
window.onbeforeunload = function() {
    return "Data ujian akan hilang jika Anda me-refresh halaman!";
};
