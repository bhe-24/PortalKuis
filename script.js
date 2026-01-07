document.addEventListener('DOMContentLoaded', () => {
    // --- KONFIGURASI FIREBASE ---
    // Pastikan konfigurasi ini sesuai dengan project Firebase Kakak
    const firebaseConfig = { 
        apiKey: "AIzaSyDpUWUIzPXIZN6rrNtsIqcL6VfOE2RLVl0", 
        authDomain: "mading-cf676.firebaseapp.com", 
        projectId: "mading-cf676", 
        storageBucket: "mading-cf676.appspot.com", 
        messagingSenderId: "72175203671", 
        appId: "1:72175203671:web:7a0676a55beb64bc96ba12" 
    };
    
    // Inisialisasi Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();
    
    // --- VARIABEL GLOBAL ---
    let currentUserData = null;
    let tempQuestions = [];
    let currentUjianSession = null;
    let ujianTimer = null;
    let currentViewId = 'auth-view';
    
    // --- ELEMEN DOM ---
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    const helpBubble = document.getElementById('help-bubble');

    // --- FUNGSI UTILITAS ---
    const showLoading = (message) => { loadingText.textContent = message; loadingOverlay.classList.remove('hidden'); };
    const hideLoading = () => loadingOverlay.classList.add('hidden');
    const updateView = (targetId) => { 
        currentViewId = targetId;
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden')); 
        const targetView = document.getElementById(targetId);
        if (targetView) targetView.classList.remove('hidden');
        else console.error(`View with ID ${targetId} not found.`);
    };

    // --- CUSTOM MODAL DIALOG ---
    function showModal(title, text, isConfirm = false) {
        const modal = document.getElementById('custom-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBodyContent = document.getElementById('modal-body-content');
        const modalConfirmBtn = document.getElementById('modal-confirm-btn');
        const modalCancelBtn = document.getElementById('modal-cancel-btn');
        modalTitle.textContent = title;
        modalBodyContent.innerHTML = text;
        modalCancelBtn.style.display = isConfirm ? 'inline-block' : 'none';
        modalConfirmBtn.textContent = isConfirm ? 'OK' : 'Tutup';
        modal.classList.remove('hidden');

        return new Promise(resolve => {
            modalConfirmBtn.onclick = () => { modal.classList.add('hidden'); resolve(true); };
            modalCancelBtn.onclick = () => { modal.classList.add('hidden'); resolve(false); };
        });
    }
    
    // --- LOGIC AUTENTIKASI (DENGAN PERSISTENCE FIX) ---
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return auth.onAuthStateChanged(async (user) => {
                showLoading('Mengecek sesi...');
                if (user) {
                    try {
                        const docRef = db.collection("users").doc(user.uid);
                        const doc = await docRef.get();

                        if (doc.exists) {
                            let userData = doc.data();
                            const isSupposedToBeAdmin = user.email.toLowerCase().endsWith('@ac.id');
                            if (isSupposedToBeAdmin && userData.role !== 'pengajar') {
                                console.log(`Role mismatch for ${user.email}. Updating role to 'pengajar'.`);
                                await docRef.update({ role: 'pengajar' });
                                userData.role = 'pengajar';
                            }
                            currentUserData = { uid: user.uid, ...userData };
                            helpBubble.classList.remove('hidden');
                            renderDashboardView();
                        } else {
                            await auth.signOut();
                            showModal('Akun Bermasalah', 'Data akun tidak ditemukan.');
                        }
                    } catch (err) {
                        await auth.signOut();
                        showModal('Error', 'Gagal mengambil data akun.');
                        console.error("Auth state change error:", err);
                    }
                } else {
                    currentUserData = null;
                    helpBubble.classList.add('hidden');
                    updateView('auth-view');
                    hideLoading();
                }
            });
        })
        .catch((error) => {
            console.error("Gagal mengatur persistence:", error);
            showModal('Error Kritis', 'Gagal menginisialisasi sesi login. Coba muat ulang halaman.');
            hideLoading();
        });

    document.getElementById('show-register-link').onclick = () => { document.getElementById('login-form-container').classList.add('hidden'); document.getElementById('register-form-container').classList.remove('hidden'); };
    document.getElementById('show-login-link').onclick = () => { document.getElementById('register-form-container').classList.add('hidden'); document.getElementById('login-form-container').classList.remove('hidden'); };
    document.getElementById('login-form').onsubmit = e => { e.preventDefault(); showLoading('Memverifikasi...'); const email = document.getElementById('username').value; const password = document.getElementById('password').value; auth.signInWithEmailAndPassword(email, password).catch(err => showModal('Login Gagal', 'Kombinasi email dan password tidak cocok.')).finally(() => hideLoading()); };
    document.getElementById('register-form').onsubmit = e => { e.preventDefault(); showLoading('Mendaftarkan akun...'); const name = document.getElementById('register-name').value; const email = document.getElementById('register-email').value; const password = document.getElementById('register-password').value; const userRole = email.toLowerCase().endsWith('@ac.id') ? 'pengajar' : 'siswa'; auth.createUserWithEmailAndPassword(email, password).then(cred => { const newUser = { name: name, email: email, role: userRole }; return db.collection('users').doc(cred.user.uid).set(newUser); }).then(() => { showModal('Pendaftaran Berhasil', 'Akun telah dibuat. Silakan login.'); document.getElementById('show-login-link').click(); }).catch(err => { let message = 'Terjadi kesalahan.'; if (err.code === 'auth/email-already-in-use') message = 'Email ini sudah terdaftar.'; showModal('Pendaftaran Gagal', message); }).finally(() => hideLoading()); };
    
    document.getElementById('logout-btn').onclick = () => auth.signOut();
    document.getElementById('admin-logout-btn').onclick = () => auth.signOut();
    document.querySelectorAll('.back-to-dashboard').forEach(btn => btn.onclick = renderDashboardView);
    document.querySelectorAll('.back-to-admin-dashboard').forEach(btn => btn.onclick = () => updateView('admin-dashboard-view'));

    // --- FUNGSI RENDER VIEW ---
    function renderDashboardView() {
        if (!currentUserData) {
            hideLoading();
            return;
        }
        if (currentUserData.role === 'pengajar') {
            document.getElementById('welcome-admin').textContent = `Dasbor Admin: ${currentUserData.name}`;
            updateView('admin-dashboard-view');
        } else {
            document.getElementById('welcome-user').textContent = `Selamat Datang, ${currentUserData.name}!`;
            updateView('dashboard-view');
        }
        hideLoading();
    }
    
    // --- EVENT LISTENER MENU SISWA ---
    document.getElementById('kuis-menu').onclick = () => renderKuisView();

    // --- EVENT LISTENER MENU ADMIN ---
    document.getElementById('admin-kuis-menu').onclick = () => renderAdminKuisView();


    // --- FUNGSI HALAMAN KUIS SISWA ---
    async function renderKuisView() {
        const viewId = 'kuis-view';
        const listId = 'kuis-list-siswa';
        updateView(viewId);
        const listDiv = document.getElementById(listId);
        showLoading(`Memuat daftar Kuis...`);
        
        try {
            const [kuisSnapshot, submissionsSnapshot] = await Promise.all([
                db.collection('quizzes').where('type', '==', 'Kuis').get(), // Hanya Kuis
                db.collection('quiz_submissions').where('studentUid', '==', currentUserData.uid).where('type', '==', 'Kuis').get() // Hanya Kuis
            ]);

            const quizSubmissions = {};
            submissionsSnapshot.forEach(doc => { quizSubmissions[doc.data().quizId] = doc.data(); });

            listDiv.innerHTML = '';
            const items = kuisSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            items.sort((a,b) => (b.createdAt?.toDate() || 0) - (a.createdAt?.toDate() || 0));

            if(items.length === 0) {
                listDiv.innerHTML = `<p style="text-align:center;">Belum ada Kuis yang tersedia saat ini.</p>`;
            } else {
                items.forEach(item => {
                    const card = document.createElement('div');
                    const submission = quizSubmissions[item.id];
                    card.className = 'item-card clickable';
                    
                    const typeTag = `<span class="tag tag-green">${item.type}</span>`; // Selalu Kuis

                    if (submission) {
                        card.innerHTML = `<i class="fa-solid fa-check-circle submitted-icon"></i><div class="card-header"><h3>${item.title}</h3>${typeTag}</div><p>${item.subject}</p><p><strong>Skor Anda: ${submission.score}</strong></p>`;
                        card.onclick = () => showModal(`Hasil ${item.type}`, `<div class="submission-success-view" style="padding: 20px 0; border: none;"><h3>Skor Anda untuk ${item.title} adalah:</h3><div class="timer-display">${submission.score}</div></div>`);
                    } else {
                        card.innerHTML = `<div class="card-header"><h3>${item.title}</h3>${typeTag}</div><p>${item.subject}</p><p>Jumlah Soal: ${item.questions.length}</p>`;
                        card.onclick = () => showUjianConfirmation(item); // Gunakan alur konfirmasi canggih
                    }
                    listDiv.appendChild(card);
                });
            }
        } catch(err) {
            console.error(`Gagal memuat Kuis:`, err);
            listDiv.innerHTML = `<p style="text-align:center;">Gagal memuat data.</p>`;
        } finally { hideLoading(); }
    }
    
    // --- FUNGSI Konfirmasi & Petunjuk Kuis ---
    function showUjianConfirmation(ujianData, step = 1) {
        updateView('ujian-pre-view');
        const preView = document.getElementById('ujian-pre-view');
        
        if (step === 1) {
            preView.innerHTML = `
                <button class="btn btn-secondary" id="cancel-pre-ujian" style="width:auto; margin-bottom:20px;"><i class="fa-solid fa-arrow-left"></i> Batal</button>
                <h2 style="margin-bottom: 25px;">Konfirmasi Data</h2>
                <div class="item-card" style="text-align: left;">
                    <p><strong>Nama:</strong> ${currentUserData.name}</p>
                    <p><strong>Email:</strong> ${currentUserData.email}</p>
                    <hr style="margin: 15px 0;">
                    <p><strong>${ujianData.type} yang Akan Diikuti:</strong></p>
                    <h3 style="text-align: left; margin-top: 5px;">${ujianData.title}</h3>
                    <p><strong>Mata Pelajaran:</strong> ${ujianData.subject}</p>
                    <p><strong>Jumlah Soal:</strong> ${ujianData.questions.length}</p>
                    <p><strong>Durasi:</strong> ${ujianData.duration} menit</p>
                </div>
                <button class="btn" id="next-to-petunjuk" style="margin-top: 20px;">Lanjut ke Petunjuk</button>
            `;
            preView.querySelector('#cancel-pre-ujian').onclick = () => renderKuisView();
            preView.querySelector('#next-to-petunjuk').onclick = () => showUjianConfirmation(ujianData, 2);

        } else if (step === 2) {
            preView.innerHTML = `
                <h2 style="margin-bottom: 25px;">Petunjuk Pengerjaan</h2>
                <div class="item-card" style="text-align: left; line-height: 2;">
                    <ul style="padding-left: 20px;">
                        <li>Pastikan koneksi internet Anda stabil.</li>
                        <li>Waktu akan berjalan saat Anda menekan tombol "Mulai".</li>
                        <li>Gunakan tombol <span class="btn btn-warning btn-sm" style="width:auto; padding: 2px 8px;">Tandai Ragu</span> untuk meninjau kembali.</li>
                        <li>Soal yang sudah dijawab akan berwarna <span class="nav-btn answered" style="width:25px; height:25px; display:inline-block; vertical-align:middle;"></span> hijau.</li>
                        <li>Soal yang ditandai 'Ragu' akan berwarna <span class="nav-btn flagged" style="width:25px; height:25px; display:inline-block; vertical-align:middle;"></span> oranye.</li>
                    </ul>
                </div>
                <button class="btn btn-secondary" id="back-to-konfirmasi" style="margin-top: 20px; width: auto; display: inline-block;">Kembali</button>
                <button class="btn btn-success" id="start-ujian-btn" style="margin-top: 20px; width: auto; display: inline-block; float: right;">Mulai</button>
            `;
            preView.querySelector('#back-to-konfirmasi').onclick = () => showUjianConfirmation(ujianData, 1);
            preView.querySelector('#start-ujian-btn').onclick = () => startUjian(ujianData);
        }
    }
    
    // --- FUNGSI Mulai Sesi Kuis ---
    function startUjian(ujianData) {
        currentUjianSession = { 
            data: ujianData, 
            currentQuestionIndex: 0, 
            answers: new Array(ujianData.questions.length).fill(null), 
            flagged: new Array(ujianData.questions.length).fill(false),
            startTime: Date.now() 
        };
        updateView('ujian-session-view');
        const sessionView = document.getElementById('ujian-session-view');
        
        sessionView.innerHTML = `
            <div id="ujian-nav-grid-container"></div>
            <div class="ujian-header-bar">
                <h2 id="question-title-badge">Soal #1</h2>
                <div id="ujian-timer" class="timer-display">00:00:00</div>
                <button id="exit-ujian-btn" class="btn btn-danger btn-sm" style="width:auto; font-size: 0.9em; padding: 8px 12px;">
                    <i class="fa-solid fa-right-from-bracket"></i> Keluar
                </button>
            </div>
            <div id="ujian-question-body-container"></div>
            <div id="ujian-navigation-btns-container"></div>
        `;
        
        document.getElementById('exit-ujian-btn').onclick = async () => {
            const confirmed = await showModal(
                'Konfirmasi Keluar', 
                'Apakah Anda yakin ingin keluar? <br><br><strong>Seluruh progres Anda TIDAK AKAN TERSIMPAN.</strong>', 
                true
            );
            if (confirmed) {
                clearInterval(ujianTimer);
                renderDashboardView();
            }
        };

        renderCurrentUjianQuestion();
        startTimer(ujianData.duration);
    }
    
    // --- FUNGSI Render Soal Kuis ---
    function renderCurrentUjianQuestion() {
        const navGridContainer = document.getElementById('ujian-nav-grid-container');
        const questionTitleBadge = document.getElementById('question-title-badge');
        const questionBodyContainer = document.getElementById('ujian-question-body-container');
        const navigationContainer = document.getElementById('ujian-navigation-btns-container');

        if (!currentUjianSession || !navGridContainer) {
             console.error("Sesi kuis tidak valid atau elemen tidak ditemukan.");
             return; 
        }

        const { data, currentQuestionIndex, answers, flagged } = currentUjianSession;
        const q = data.questions[currentQuestionIndex];

        // 1. Buat Navigasi Grid
        let navGridHTML = '<h3>Navigasi Soal</h3><div class="nav-grid">';
        for (let i = 0; i < data.questions.length; i++) {
            let btnClass = 'nav-btn';
            if (i === currentQuestionIndex) btnClass += ' current';
            if (flagged[i]) btnClass += ' flagged';
            else if (answers[i] !== null) btnClass += ' answered';
            navGridHTML += `<button class="${btnClass}" data-index="${i}">${i + 1}</button>`;
        }
        navGridHTML += '</div>';

        // 2. Buat Opsi Jawaban
        const optionsHTML = q.options.map((option, index) => {
            const prefix = String.fromCharCode(97 + index); // 'a'
            return `
                <div class="form-group">
                    <input type="radio" id="option-${index}" name="ujian-option" value="${index}">
                    <label for="option-${index}">
                        <span class="option-prefix">${prefix}</span>
                        <span class="option-text">${option}</span>
                    </label>
                </div>`;
        }).join('');

        // 3. Buat Tombol Navigasi Bawah
        const isLastQuestion = currentQuestionIndex === data.questions.length - 1;
        const flagBtnText = flagged[currentQuestionIndex] ? 'Hapus Tanda Ragu' : 'Tandai Ragu';
        const navigationHTML = `
            <div class="ujian-navigation-btns">
                <button id="prev-question-btn" class="btn btn-secondary" style="width: auto;">Sebelumnya</button>
                <button id="flag-question-btn" class="btn btn-warning" style="width: auto;">${flagBtnText}</button>
                <button id="next-question-btn" class="btn" style="width: auto;">${isLastQuestion ? `Selesaikan ${data.type}` : 'Next'}</button>
            </div>`;

        // 4. Render ke kontainer
        navGridContainer.innerHTML = navGridHTML;
        questionTitleBadge.textContent = `Soal #${currentQuestionIndex + 1}`;
        questionBodyContainer.innerHTML = `<div class="item-card ujian-question-container"><h3>${q.questionText}</h3>${optionsHTML}</div>`;
        navigationContainer.innerHTML = navigationHTML;
        
        // 5. Setel Ulang Event Listener
        const savedAnswer = answers[currentQuestionIndex];
        if (savedAnswer !== null) {
            const radio = questionBodyContainer.querySelector(`input[name="ujian-option"][value="${savedAnswer}"]`);
            if (radio) radio.checked = true;
        }

        questionBodyContainer.querySelectorAll('input[name="ujian-option"]').forEach(radio => { 
            radio.onchange = () => { 
                currentUjianSession.answers[currentQuestionIndex] = parseInt(radio.value); 
                if (currentUjianSession.flagged[currentQuestionIndex]) {
                    currentUjianSession.flagged[currentQuestionIndex] = false;
                }
                const navBtn = navGridContainer.querySelector(`.nav-btn[data-index="${currentQuestionIndex}"]`);
                if (navBtn) {
                    navBtn.classList.add('answered');
                    navBtn.classList.remove('flagged');
                }
            }; 
        });

        navGridContainer.querySelectorAll('.nav-btn').forEach(btn => {
            btn.onclick = () => {
                currentUjianSession.currentQuestionIndex = parseInt(btn.dataset.index);
                renderCurrentUjianQuestion();
            };
        });

        const prevBtn = navigationContainer.querySelector('#prev-question-btn');
        const nextBtn = navigationContainer.querySelector('#next-question-btn');
        const flagBtn = navigationContainer.querySelector('#flag-question-btn');

        prevBtn.disabled = currentQuestionIndex === 0;
        prevBtn.onclick = () => { currentUjianSession.currentQuestionIndex--; renderCurrentUjianQuestion(); };
        if (isLastQuestion) { nextBtn.onclick = () => finishUjian(false); } 
        else { nextBtn.onclick = () => { currentUjianSession.currentQuestionIndex++; renderCurrentUjianQuestion(); }; }
        flagBtn.onclick = () => {
            currentUjianSession.flagged[currentQuestionIndex] = !currentUjianSession.flagged[currentQuestionIndex];
            renderCurrentUjianQuestion();
        };
    }
    
    // --- FUNGSI Timer Kuis ---
    function startTimer(durationMinutes) {
        clearInterval(ujianTimer);
        let timeRemaining = durationMinutes * 60;
        const timerEl = document.getElementById('ujian-timer');
        const updateTimerDisplay = () => {
            if(!timerEl) return;
            const hours = Math.floor(timeRemaining / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((timeRemaining % 3600) / 60).toString().padStart(2, '0');
            const seconds = (timeRemaining % 60).toString().padStart(2, '0');
            timerEl.textContent = `${hours}:${minutes}:${seconds}`;
        };
        updateTimerDisplay();
        ujianTimer = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();
            if (timeRemaining <= 0) {
                clearInterval(ujianTimer);
                showModal('Waktu Habis!', 'Jawaban Anda akan dikumpulkan secara otomatis.').then(() => finishUjian(true));
            }
        }, 1000);
    }

    // --- FUNGSI Selesai Kuis ---
    async function finishUjian(forceSubmit = false) {
        if (!currentUjianSession) return; // Pengaman
        
        const flaggedCount = currentUjianSession.flagged.filter(Boolean).length;
        if (flaggedCount > 0 && !forceSubmit) {
            const proceed = await showModal('Konfirmasi', `Anda masih memiliki <strong>${flaggedCount} soal</strong> yang ditandai 'Ragu'.<br><br>Yakin ingin menyelesaikan?`, true);
            if (!proceed) return;
        }

        clearInterval(ujianTimer);
        showLoading('Menghitung skor...');
        let score = 0;
        currentUjianSession.data.questions.forEach((q, index) => { if (currentUjianSession.answers[index] === Number(q.correctAnswerIndex)) score++; });
        const finalScore = Math.round((score / currentUjianSession.data.questions.length) * 100);

        const payload = {
            studentUid: currentUserData.uid, studentName: currentUserData.name, quizId: currentUjianSession.data.id, quizTitle: currentUjianSession.data.title,
            type: 'Kuis', // Hardcode Tipe
            answers: currentUjianSession.answers, score: finalScore, submittedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        try {
            await db.collection('quiz_submissions').add(payload);
            showUjianReview(currentUjianSession, finalScore);
            
        } catch(err) { showModal('Error', 'Gagal menyimpan hasil Anda.'); }
        finally { hideLoading(); }
    }

    // --- FUNGSI BARU: Tampilkan Halaman Review Kuis ---
    function showUjianReview(session, score) {
        updateView('ujian-review-view');
        const reviewView = document.getElementById('ujian-review-view');
        
        let reviewHTML = `
            <div class="submission-success-view" style="padding: 20px 0; border: none;">
                <h3>${session.data.type} Selesai!</h3>
                <p>Skor Anda:</p>
                <div class="timer-display">${score}</div>
            </div>
            
            <hr style="margin: 20px 0;">
            <h2 style="text-align:left; margin-bottom: 15px;">Review Jawaban</h2>
            <p style="text-align:left; margin-bottom: 20px;">Silakan unduh hasil review ini sebagai bahan belajar Anda.</p>

            <div id="review-content-for-pdf"> `;
        
        // Iterasi setiap soal untuk review
        session.data.questions.forEach((q, index) => {
            const userAnswerIndex = session.answers[index];
            const correctAnswerIndex = parseInt(q.correctAnswerIndex);

            reviewHTML += `<div class="review-question"><h4>${index + 1}. ${q.questionText}</h4>`;
            
            q.options.forEach((optionText, optIndex) => {
                const prefix = String.fromCharCode(97 + optIndex);
                let optionClass = 'review-option';
                
                if (optIndex === correctAnswerIndex) {
                    // Ini adalah jawaban yang benar
                    optionClass += ' correct-answer';
                } else if (optIndex === userAnswerIndex && userAnswerIndex !== correctAnswerIndex) {
                    // Ini adalah jawaban siswa, dan itu salah
                    optionClass += ' wrong-answer';
                }

                reviewHTML += `
                    <div class="${optionClass}">
                        <span class="review-option-prefix">${prefix}.</span>
                        <span>${optionText}</span>
                    </div>
                `;
            });

            reviewHTML += `</div>`;
        });
        
        reviewHTML += `</div> `;
        
        // Tombol Aksi
        reviewHTML += `
            <div style="margin-top: 30px; text-align: center;">
                <button id="download-pdf-btn" class="btn btn-success" style="width: auto;">
                    <i class="fa-solid fa-file-pdf"></i> Unduh Hasil (PDF)
                </button>
                <button id="back-to-dashboard-from-review" class="btn btn-secondary hidden" style="width: auto; margin-top: 10px;">
                    Kembali ke Dasbor
                </button>
            </div>
        `;

        reviewView.innerHTML = reviewHTML;

        // Pasang listener
        document.getElementById('download-pdf-btn').onclick = () => generateReviewPDF(session, score);
        document.getElementById('back-to-dashboard-from-review').onclick = renderDashboardView;
    }

    // --- FUNGSI PDF NATIVE (BUKAN SCREENSHOT) ---
    async function generateReviewPDF(session, score) {
        showLoading('Membuat PDF Teks (Native)...');
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4'); // portrait, milimeter, A4
        
        const logoCendekiaUrl = 'https://i.imgur.com/5Srjyo4.png';
        const logoCapBasahUrl = 'https://i.imgur.com/YvrNYRw.png';
        
        // --- Helper untuk Lika-Liku jsPDF ---
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 15;
        const contentWidth = pageWidth - (margin * 2);
        let y = margin; // Posisi Y vertikal saat ini

        // Fungsi untuk cek halaman baru
        function checkPageBreak(requiredHeight = 10) {
            if (y + requiredHeight > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
        }
        // --- Akhir Helper ---

        try {
            // --- Halaman 1: Judul, Logo, dan Info ---
            try {
                // Tambahkan logo. Butuh CORS, jadi kita bungkus try-catch
                doc.addImage(logoCendekiaUrl, 'PNG', margin, y, 25, 25);
            } catch (e) { console.warn("Gagal memuat logo Cendekia (mungkin karena CORS)."); }
            
            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor("#003366"); // Biru Tua
            doc.text('HASIL REVIEW KUIS', pageWidth / 2, y + 10, { align: 'center' });
            doc.text('Cendekia Aksara', pageWidth / 2, y + 18, { align: 'center' });
            y += 35; // Pindah ke bawah header

            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor("#343a40"); // Teks Gelap
            doc.text(`Nama Siswa:`, margin, y);
            doc.setFont('helvetica', 'bold');
            doc.text(currentUserData.name, margin + 30, y);
            y += 7;
            
            doc.setFont('helvetica', 'normal');
            doc.text(`Judul Kuis:`, margin, y);
            doc.setFont('helvetica', 'bold');
            doc.text(session.data.title, margin + 30, y);
            y += 7;

            doc.setFont('helvetica', 'normal');
            doc.text(`Nilai Akhir:`, margin, y);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.setTextColor("#005a9c"); // var(--primary-color)
            doc.text(String(score), margin + 30, y);
            y += 10;
            
            doc.setDrawColor(233, 236, 239); // var(--light-gray)
            doc.line(margin, y, pageWidth - margin, y); // Garis pemisah
            y += 10;

            // --- Loop Soal dan Jawaban (Konten Utama) ---
            session.data.questions.forEach((q, index) => {
                const userAnswerIndex = session.answers[index];
                const correctAnswerIndex = parseInt(q.correctAnswerIndex);
                
                checkPageBreak(20); // Cek ruang untuk minimal 1 soal

                // Render Teks Pertanyaan
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor("#003366"); // var(--secondary-color)
                const questionLines = doc.splitTextToSize(`${index + 1}. ${q.questionText}`, contentWidth);
                doc.text(questionLines, margin, y);
                y += (questionLines.length * 4.5) + 5; // (Tinggi font * 1.2 * baris) + padding

                // Render Opsi
                doc.setFontSize(10);
                q.options.forEach((optionText, optIndex) => {
                    const prefix = String.fromCharCode(97 + optIndex);
                    const optionString = `${prefix}. ${optionText}`;
                    const optionLines = doc.splitTextToSize(optionString, contentWidth - 5); // Beri indent
                    
                    const rectHeight = (optionLines.length * 4.5) + 6; // Tinggi kotak
                    checkPageBreak(rectHeight + 2); // Cek ruang untuk 1 opsi

                    const isCorrect = (optIndex === correctAnswerIndex);
                    const isUserWrong = (optIndex === userAnswerIndex && userAnswerIndex !== correctAnswerIndex);

                    // Gambar kotak latar belakang
                    if (isCorrect) {
                        doc.setFillColor(224, 247, 236); // #e6f7ec
                        doc.setDrawColor(40, 167, 69); // var(--success-color)
                        doc.setFont('helvetica', 'bold');
                    } else if (isUserWrong) {
                        doc.setFillColor(253, 238, 238); // #fdeeee
                        doc.setDrawColor(220, 53, 69); // var(--danger-color)
                        doc.setFont('helvetica', 'normal');
                    } else {
                        doc.setFillColor(253, 253, 253); // #fdfdfd
                        doc.setDrawColor(233, 236, 239); // var(--light-gray)
                        doc.setFont('helvetica', 'normal');
                    }
                    
                    doc.rect(margin, y, contentWidth, rectHeight, 'FD'); // Fill and Draw
                    
                    // Tulis teks opsi
                    doc.setTextColor("#343a40"); // var(--dark-text)
                    doc.text(optionLines, margin + 3, y + 5); // Padding internal

                    y += rectHeight + 2; // Pindah Y ke bawah kotak + 2mm padding
                });
                
                y += 5; // Padding antar soal
            });

            // --- Halaman Terakhir: Lembar Pengesahan ---
            doc.addPage();
            y = margin; // Reset Y
            
            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor("#003366");
            doc.text('Lembar Pengesahan', pageWidth / 2, y + 15, { align: 'center' });
            y += 35;
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor("#343a40");
            doc.text('Dokumen ini adalah hasil review kuis siswa dan telah diverifikasi', pageWidth / 2, y, { align: 'center' });
            y += 7;
            doc.text('secara otomatis oleh sistem Cendekia Aksara.', pageWidth / 2, y, { align: 'center' });
            y += 14;
            
            const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
            doc.text(`Diverifikasi pada: ${today}`, pageWidth / 2, y, { align: 'center' });
            y += 20;
            
            // Tanda Tangan dan Cap
            const capSize = 40;
            const capX = pageWidth / 2 - (capSize / 2);
            
            try {
                doc.addImage(logoCapBasahUrl, 'PNG', capX, y, capSize, capSize);
            } catch (e) { console.warn("Gagal memuat cap basah (mungkin karena CORS)."); }
            y += capSize; // Pindah Y ke bawah cap

            doc.setFont('times', 'italic');
            doc.setFontSize(26);
            doc.setTextColor(20, 20, 180); // Biru
            doc.text('Aksa', pageWidth / 2, y - 10, { align: 'center' }); // Tumpang tindih sedikit
            y += 10;
            
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setTextColor("#343a40");
            doc.text('( Aksa, Kawan Cendekia )', pageWidth / 2, y, { align: 'center' });

            // Simpan PDF
            doc.save(`Review_Kuis_${session.data.title.replace(/\s+/g, '_')}_${currentUserData.name}.pdf`);

            // Update UI setelah sukses
            hideLoading();
            showModal('Sukses!', 'File PDF (Teks Native) berhasil dibuat dan diunduh.');
            document.getElementById('download-pdf-btn').disabled = true;
            document.getElementById('download-pdf-btn').textContent = 'PDF Telah Diunduh';
            document.getElementById('back-to-dashboard-from-review').classList.remove('hidden');

        } catch (error) {
            console.error('Gagal membuat PDF Teks Native:', error);
            hideLoading();
            showModal('Error', 'Gagal membuat file PDF. Silakan coba lagi.');
        }
    }


    // --- FUNGSI HALAMAN ADMIN KUIS ---
    function renderAdminKuisView() {
        tempQuestions = [];
        updateView('admin-kuis-view');
        const form = document.getElementById('kuis-form');
        form.reset();
        document.getElementById('edit-ku-id').value = '';
        document.getElementById('cancel-edit-ku-btn').classList.add('hidden');
        updateAddedQuestionsList();
        loadExistingKuis(); 

        // Reset tampilan tab ke manual
        document.getElementById('tab-manual').style.backgroundColor = 'var(--primary-color)';
        document.getElementById('tab-bulk').style.backgroundColor = 'var(--gray-color)';
        document.getElementById('question-builder').classList.remove('hidden');
        document.getElementById('question-builder-bulk').classList.add('hidden');
        document.getElementById('parse-result').textContent = '';
    }
    
    async function loadExistingKuis() { 
        const listDiv = document.getElementById('kuis-list-admin');
        listDiv.innerHTML = `<h3>Daftar Kuis Tersimpan</h3>`; 
        try {
            const snapshot = await db.collection('quizzes').where('type', '==', 'Kuis').get(); // Hanya Kuis
            const items = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            items.sort((a,b) => (b.createdAt?.toDate() || 0) - (a.createdAt?.toDate() || 0));

            if (items.length === 0) { listDiv.innerHTML += `<p>Belum ada Kuis yang dibuat.</p>`; } 
            else {
                items.forEach(item => {
                      const card = document.createElement('div');
                      card.className = 'item-card';
                      const typeTag = `<span class="tag tag-green">${item.type}</span>`;
                      card.innerHTML = `
                        <div class="card-header">
                            <h3>${item.title}</h3>
                            <div class="card-actions">
                                ${typeTag}
                                <button class="btn btn-secondary btn-icon btn-sm view-results" data-id="${item.id}" data-title="${item.title}" title="Lihat Hasil"><i class="fa-solid fa-chart-line"></i></button>
                                <button class="btn btn-secondary btn-icon btn-sm edit-ku" data-id="${item.id}" title="Edit"><i class="fa fa-edit"></i></button>
                                <button class="btn btn-danger btn-icon btn-sm delete-ku" data-id="${item.id}" data-type="${item.type}" title="Hapus"><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                        <p>${item.subject}</p>`;
                     listDiv.appendChild(card);
                });
            }
        } catch(err) { listDiv.innerHTML += `<p>Gagal memuat data.</p>`;}
    }

    document.getElementById('kuis-list-admin').addEventListener('click', async e => {
        const resultsBtn = e.target.closest('.view-results');
        if (resultsBtn) {
            const kuId = resultsBtn.dataset.id; const kuTitle = resultsBtn.dataset.title;
            showLoading('Memuat hasil...');
            try {
                const snapshot = await db.collection('quiz_submissions').where('quizId', '==', kuId).get();
                if (snapshot.empty) { showModal(`Hasil: ${kuTitle}`, '<p>Belum ada siswa yang mengerjakan.</p>'); return; }
                let tableHTML = '<table class="results-table"><thead><tr><th>Nama Siswa</th><th>Nilai</th></tr></thead><tbody>';
                snapshot.docs.map(doc => doc.data()).sort((a, b) => b.score - a.score)
                    .forEach(sub => { tableHTML += `<tr><td>${sub.studentName}</td><td>${sub.score}</td></tr>`; });
                tableHTML += '</tbody></table>';
                showModal(`Hasil: ${kuTitle}`, tableHTML);
            } catch (err) { showModal('Error', 'Gagal memuat hasil.'); } finally { hideLoading(); }
        }

        const deleteBtn = e.target.closest('.delete-ku');
        if (deleteBtn) {
            const kuId = deleteBtn.dataset.id; const type = deleteBtn.dataset.type;
            if (await showModal('Konfirmasi', `Yakin ingin menghapus ${type} ini?`, true)) {
                showLoading('Menghapus...');
                try { await db.collection('quizzes').doc(kuId).delete(); renderAdminKuisView(); } 
                catch (err) { showModal('Error', `Gagal menghapus ${type}.`); } finally { hideLoading(); }
            }
        }
        const editBtn = e.target.closest('.edit-ku');
        if (editBtn) {
            const kuId = editBtn.dataset.id;
            showLoading('Memuat data...');
            try {
                const doc = await db.collection('quizzes').doc(kuId).get();
                if (doc.exists) {
                    const data = doc.data();
                    document.getElementById('edit-ku-id').value = kuId;
                    document.getElementById('ku-title').value = data.title;
                    document.getElementById('ku-subject').value = data.subject;
                    // Tipe select dihilangkan, tidak perlu di-set
                    document.getElementById('ku-duration').value = data.duration;
                    tempQuestions = data.questions;
                    updateAddedQuestionsList();
                    document.getElementById('cancel-edit-ku-btn').classList.remove('hidden');
                    window.scrollTo(0, document.body.scrollHeight);
                }
            } catch (err) { showModal('Error', 'Gagal memuat data.'); } finally { hideLoading(); }
        }
    });

    document.getElementById('cancel-edit-ku-btn').onclick = () => renderAdminKuisView();
    
    // --- Listener Tab ---
    const tabManual = document.getElementById('tab-manual');
    const tabBulk = document.getElementById('tab-bulk');
    const builderManual = document.getElementById('question-builder');
    const builderBulk = document.getElementById('question-builder-bulk');

    tabManual.onclick = () => {
        tabManual.style.backgroundColor = 'var(--primary-color)';
        tabBulk.style.backgroundColor = 'var(--gray-color)';
        builderManual.classList.remove('hidden');
        builderBulk.classList.add('hidden');
    };
    
    tabBulk.onclick = () => {
        tabBulk.style.backgroundColor = 'var(--primary-color)';
        tabManual.style.backgroundColor = 'var(--gray-color)';
        builderBulk.classList.remove('hidden');
        builderManual.classList.add('hidden');
    };
    
    document.getElementById('add-question-btn').onclick = () => {
        const questionText = document.getElementById('qb-question').value.trim();
        const options = Array.from(document.querySelectorAll('.qb-option')).map(input => input.value.trim());
        const correctAnswerIndex = document.querySelector('input[name="correct-answer"]:checked').value;
        if (!questionText || options.some(opt => opt === '')) { showModal('Peringatan', 'Teks dan semua pilihan jawaban harus diisi.'); return; }
        tempQuestions.push({ questionText, options, correctAnswerIndex: parseInt(correctAnswerIndex) });
        updateAddedQuestionsList();
        document.getElementById('qb-question').value = '';
        document.querySelectorAll('.qb-option').forEach(input => input.value = '');
        document.querySelector('input[name="correct-answer"][value="0"]').checked = true;
    };

    // --- Logika Parser Soal Massal ---
    document.getElementById('parse-bulk-btn').onclick = () => {
        const bulkText = document.getElementById('bulk-questions').value;
        const parseResultEl = document.getElementById('parse-result');
        const questionBlocks = bulkText.split(/\n\s*\n/).filter(b => b.trim() !== '');
        let questionsAdded = 0; let errors = 0;

        questionBlocks.forEach(block => {
            try {
                const lines = block.trim().split('\n').filter(l => l.trim() !== '');
                if (lines.length < 5) throw new Error('Format tidak lengkap');
                const questionText = lines[0].replace(/^\d+\.\s*/, '').trim();
                let options = []; let correctAnswerIndex = -1;
                const optionLines = lines.slice(1);
                if (optionLines.length < 4) throw new Error('Hanya ada ' + optionLines.length + ' pilihan, butuh 4.');

                for(let i = 0; i < 4; i++) {
                    let optionText = optionLines[i].trim();
                    if (optionText.startsWith('*')) {
                        correctAnswerIndex = i;
                        optionText = optionText.substring(1).trim();
                    }
                    optionText = optionText.replace(/^[A-D]\.?\s*/i, '').trim();
                    options.push(optionText);
                }

                if (correctAnswerIndex === -1) throw new Error('Tidak ada jawaban benar (*)');
                if (options.length !== 4) throw new Error('Jumlah pilihan tidak 4');
                if (!questionText) throw new Error('Teks pertanyaan kosong');
                
                tempQuestions.push({ questionText, options, correctAnswerIndex });
                questionsAdded++;
            } catch (err) {
                console.warn("Gagal memproses blok soal:", err.message, "\nBlok:", block);
                errors++;
            }
        });
        if (questionsAdded > 0) updateAddedQuestionsList();
        parseResultEl.textContent = `Proses selesai: ${questionsAdded} soal berhasil, ${errors} soal gagal.`;
        document.getElementById('bulk-questions').value = '';
    };

    function updateAddedQuestionsList() {
        const listDiv = document.getElementById('added-questions-list');
        listDiv.innerHTML = '<h4>Daftar Soal</h4>';
        if (tempQuestions.length === 0) { listDiv.innerHTML += '<p>Belum ada soal yang ditambahkan.</p>'; return; }
        tempQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'added-question';
            const optionsHTML = q.options.map((opt, i) => `<li ${parseInt(q.correctAnswerIndex) === i ? 'style="font-weight:bold; color:var(--success-color);"' : ''}>${opt}</li>`).join('');
            questionDiv.innerHTML = `<p><strong>${index + 1}. ${q.questionText}</strong></p><ul>${optionsHTML}</ul>`;
            listDiv.appendChild(questionDiv);
        });
    }

    document.getElementById('kuis-form').onsubmit = async (e) => {
        e.preventDefault();
        if (tempQuestions.length === 0) { showModal('Peringatan', 'Anda harus menambahkan setidaknya satu soal.'); return; }
        const editId = document.getElementById('edit-ku-id').value;
        const payload = {
            title: document.getElementById('ku-title').value, 
            type: 'Kuis', // Hardcode Tipe
            subject: document.getElementById('ku-subject').value,
            duration: parseInt(document.getElementById('ku-duration').value), 
            teacherName: currentUserData.name, 
            questions: tempQuestions,
        };
        if(!editId) payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        showLoading('Menyimpan Kuis...');
        try {
            if(editId) await db.collection('quizzes').doc(editId).update(payload);
            else await db.collection('quizzes').add(payload);
            showModal('Sukses', `Kuis berhasil disimpan.`).then(renderAdminKuisView);
        } catch(err) { showModal('Error', `Gagal menyimpan Kuis.`); }
        finally { hideLoading(); }
    };

    // --- FUNGSI BOLA BANTUAN ---
    const helpMessages = {
        'auth-view': 'Silakan masuk menggunakan email dan password Anda. Jika belum memiliki akun, klik tautan daftar di bawah form.',
        'dashboard-view': 'Selamat datang di dasbor Kuis Anda! Pilih menu "Kuis" untuk melihat daftar kuis yang tersedia.',
        'kuis-view': 'Ini adalah daftar kuis yang tersedia. Klik pada salah satu untuk memulai. Perhatikan waktu pengerjaan!',
        'ujian-session-view': 'Jawab setiap pertanyaan dan gunakan tombol navigasi untuk berpindah antar soal. Selesaikan sebelum waktu habis!',
        'admin-dashboard-view': 'Selamat datang, Admin. Dari sini Anda dapat mengelola seluruh kuis untuk siswa.',
        'admin-kuis-view': 'Kelola kuis. Anda bisa membuat soal (manual atau massal), mengatur durasi, dan melihat daftar yang telah dibuat.',
    };

    helpBubble.onclick = () => {
        const message = helpMessages[currentViewId] || 'Tidak ada bantuan untuk halaman ini.';
        showModal('Bantuan', message);
    };

});
