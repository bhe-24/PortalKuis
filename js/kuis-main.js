// js/kuis-main.js

const urlParams = new URLSearchParams(window.location.search);
const kuisId = urlParams.get('id');

let quizData = null;
let questions = []; // Array soal yang sudah diacak/dipilih
let userAnswers = {}; // Simpan jawaban siswa: { 0: 1, 1: 3 } (Index soal : Index jawaban)
let currentQIndex = 0;
let timerInterval;

// 1. CEK AUTH & LOAD DATA
auth.onAuthStateChanged(user => {
    if (!user) { window.location.href = 'index.html'; return; }
    if (!kuisId) { alert("ID Kuis tidak ditemukan!"); window.location.href = 'kuis-daftar.html'; return; }
    
    loadExamData(kuisId);
});

// 2. LOAD & RANDOMIZE
async function loadExamData(id) {
    try {
        const doc = await db.collection('quizzes').doc(id).get();
        if(!doc.exists) throw new Error("Kuis tidak ditemukan.");
        
        quizData = doc.data();
        let allQuestions = quizData.questions;

        // LOGIKA ACAK SOAL
        // Jika ada limit (misal: total 100, ambil 20), kita acak dulu lalu potong
        if (quizData.displayLimit && quizData.displayLimit > 0 && quizData.displayLimit < allQuestions.length) {
            // Shuffle Array (Algoritma Fisher-Yates)
            for (let i = allQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
            }
            questions = allQuestions.slice(0, quizData.displayLimit);
        } else {
            questions = allQuestions; // Pakai semua urut (atau acak semua kalau mau)
        }

        // Inisialisasi UI
        initTimer(quizData.duration);
        renderNavGrid();
        loadQuestion(0);
        
        // Sembunyikan Loading, Tampilkan Soal
        document.getElementById('q-loading').style.display = 'none';
        document.getElementById('q-content').style.display = 'block';

        // Peringatan Refresh
        window.onbeforeunload = function() {
            return "Waktu ujian sedang berjalan. Anda yakin ingin keluar?";
        };

    } catch (err) {
        console.error(err);
        alert("Gagal memuat soal: " + err.message);
        window.location.href = 'kuis-daftar.html';
    }
}

// 3. RENDER SOAL
function loadQuestion(index) {
    currentQIndex = index;
    const q = questions[index];
    
    // Update Badge Nomor
    document.getElementById('q-no').textContent = index + 1;
    
    // Update Teks Soal (Support HTML Bold/Italic)
    document.getElementById('q-text').innerHTML = q.questionText;

    // Update Opsi Jawaban
    const container = document.getElementById('options-container');
    container.innerHTML = ''; // Reset

    const labels = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, i) => {
        const div = document.createElement('div');
        
        // Cek apakah ini jawaban yang dipilih sebelumnya?
        const isSelected = userAnswers[index] === i ? 'selected' : '';
        
        div.className = `option-card ${isSelected}`;
        div.onclick = () => selectAnswer(index, i); // Fungsi pilih jawaban
        div.innerHTML = `
            <div class="circle-label">${labels[i]}</div>
            <div style="flex:1;">${optText}</div>
        `;
        container.appendChild(div);
    });

    // Update Tombol Navigasi
    document.getElementById('btn-prev').style.visibility = index === 0 ? 'hidden' : 'visible';
    
    // Tombol Next vs Selesai
    const btnNext = document.getElementById('btn-next');
    const btnFinish = document.getElementById('btn-finish');
    
    if (index === questions.length - 1) {
        btnNext.style.display = 'none';
        btnFinish.style.display = 'flex'; // Munculkan tombol selesai di soal terakhir
    } else {
        btnNext.style.display = 'flex';
        btnFinish.style.display = 'none';
    }

    // Update Highlight di Grid Navigasi
    updateNavHighlight();
}

// 4. PILIH JAWABAN
function selectAnswer(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex; // Simpan jawaban di memori
    loadQuestion(qIndex); // Re-render untuk update tampilan "selected"
    renderNavGrid(); // Update warna hijau di LJK
}

// 5. NAVIGASI (LJK)
function renderNavGrid() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = '';
    
    let answeredCount = 0;

    questions.forEach((_, i) => {
        const btn = document.createElement('div');
        const isAnswered = userAnswers[i] !== undefined;
        if(isAnswered) answeredCount++;

        btn.className = `nav-item ${isAnswered ? 'answered' : ''}`;
        if(i === currentQIndex) btn.classList.add('active'); // Sedang dibuka
        
        btn.textContent = i + 1;
        btn.onclick = () => loadQuestion(i);
        grid.appendChild(btn);
    });

    document.getElementById('answered-count').textContent = `${answeredCount}/${questions.length} Terjawab`;
}

function updateNavHighlight() {
    // Hanya update border active tanpa render ulang semua (biar ringan)
    const items = document.querySelectorAll('.nav-item');
    items.forEach((item, i) => {
        if(i === currentQIndex) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function nextQuestion() {
    if (currentQIndex < questions.length - 1) loadQuestion(currentQIndex + 1);
}
function prevQuestion() {
    if (currentQIndex > 0) loadQuestion(currentQIndex - 1);
}

// 6. TIMER MUNDUR
function initTimer(durationMinutes) {
    let time = durationMinutes * 60; // Ubah ke detik
    const display = document.getElementById('timer-display');

    timerInterval = setInterval(() => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        // Format 00:00:00
        display.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Waktu Habis! Jawaban akan dikirim otomatis.");
            finishExam(true); // Force submit
        }
        time--;
    }, 1000);
}

// 7. KUMPULKAN JAWABAN (FINISH)
async function finishExam(force = false) {
    // Konfirmasi dulu (kecuali waktu habis / force)
    if (!force) {
        const answered = Object.keys(userAnswers).length;
        const total = questions.length;
        const yakin = await showConfirm(
            "Kumpulkan Jawaban?", 
            `Anda baru menjawab ${answered} dari ${total} soal. Yakin ingin mengakhiri?`
        );
        if (!yakin) return;
    }

    // Matikan pencegah refresh
    window.onbeforeunload = null;
    clearInterval(timerInterval);
    
    showLoading(); // Tampilkan Blur

    // HITUNG NILAI (Client Side Calculation)
    let correctCount = 0;
    questions.forEach((q, i) => {
        const myAns = userAnswers[i];
        if (myAns !== undefined && myAns === q.correctAnswerIndex) {
            correctCount++;
        }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);

    // Siapkan Data untuk Disimpan
    const submissionData = {
        quizId: kuisId,
        quizTitle: quizData.title,
        studentUid: auth.currentUser.uid,
        studentName: auth.currentUser.displayName || "Siswa", // Opsional
        score: finalScore,
        answers: userAnswers, // Simpan jawaban mentah (Index)
        submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
        totalQuestions: questions.length,
        correctCount: correctCount
    };

    try {
        // Simpan ke Firebase
        await db.collection('quiz_submissions').add(submissionData);
        
        hideLoading();
        // Redirect ke Hasil
        window.location.href = `kuis-result.html?score=${finalScore}&total=${questions.length}&correct=${correctCount}&qid=${kuisId}`;
        
    } catch (err) {
        hideLoading();
        console.error(err);
        alert("Gagal menyimpan nilai. Cek koneksi internet!");
    }
}
