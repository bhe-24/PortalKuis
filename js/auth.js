// js/auth.js

// 1. CEK STATUS LOGIN
auth.onAuthStateChanged(user => {
    if (user) {
        // Cek Role di Database
        db.collection('users').doc(user.uid).get().then(doc => {
            if (doc.exists) {
                const data = doc.data();
                if (data.role === 'pengajar') {
                    window.location.href = 'admin/dashboard.html';
                } else {
                    window.location.href = 'dashboard.html';
                }
            }
        }).catch(err => {
            console.error("Error ambil data user:", err);
            // Jika user di Auth ada tapi di DB tidak ada, logoutkan paksa
            auth.signOut();
        });
    }
});

// 2. FUNGSI UI (Tampilan)

// Ganti tampilan Login <-> Register
function switchView(view) {
    const boxLogin = document.getElementById('box-login');
    const boxReg = document.getElementById('box-register');

    if (view === 'register') {
        boxLogin.classList.add('hidden');
        boxReg.classList.remove('hidden');
    } else {
        boxReg.classList.add('hidden');
        boxLogin.classList.remove('hidden');
    }
}

// Show/Hide Password
function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        iconElement.classList.remove('fa-eye');
        iconElement.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        iconElement.classList.remove('fa-eye-slash');
        iconElement.classList.add('fa-eye');
    }
}

// Buka Modal & Efek Blur
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.getElementById('main-content').classList.add('blur-active');
}

// Tutup Modal & Hilangkan Blur
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.getElementById('main-content').classList.remove('blur-active');
}

// Tampilkan Pesan Custom (Pengganti Alert Browser)
function showAlert(title, message, type = 'info') {
    const titleEl = document.getElementById('alert-title');
    const msgEl = document.getElementById('alert-msg');
    const iconEl = document.getElementById('alert-icon');
    const modal = document.getElementById('modal-alert');

    titleEl.innerText = title;
    msgEl.innerText = message;

    // Set Icon & Warna berdasarkan tipe
    if (type === 'success') {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        iconEl.style.color = 'var(--success)';
    } else if (type === 'error') {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        iconEl.style.color = 'var(--danger)';
    } else {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
        iconEl.style.color = 'var(--primary)';
    }

    openModal('modal-alert');
}


// 3. LOGIKA UTAMA (Firebase)

// --- Login ---
document.getElementById('form-login').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;

    showLoading();
    try {
        await auth.signInWithEmailAndPassword(email, pass);
        // Tidak perlu redirect manual, onAuthStateChanged akan menanganinya
    } catch (error) {
        hideLoading();
        let msg = "Terjadi kesalahan.";
        if (error.code === 'auth/wrong-password') msg = "Password yang Anda masukkan salah.";
        if (error.code === 'auth/user-not-found') msg = "Email tidak terdaftar.";
        if (error.code === 'auth/invalid-email') msg = "Format email tidak valid.";
        showAlert("Login Gagal", msg, 'error');
    }
});

// --- Register ---
document.getElementById('form-register').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-password').value;

    showLoading();
    try {
        // Cek domain untuk role
        const role = email.endsWith('@ac.id') ? 'pengajar' : 'siswa';
        
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        
        await db.collection('users').doc(cred.user.uid).set({
            name: name,
            email: email,
            role: role,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        hideLoading();
        showAlert("Pendaftaran Berhasil!", "Akun Anda telah dibuat. Silakan login.", 'success');
        switchView('login');
        document.getElementById('form-register').reset();

    } catch (error) {
        hideLoading();
        let msg = error.message;
        if (error.code === 'auth/email-already-in-use') msg = "Email ini sudah terdaftar.";
        if (error.code === 'auth/weak-password') msg = "Password terlalu lemah (min. 6 karakter).";
        showAlert("Gagal Daftar", msg, 'error');
    }
});

// --- Lupa Password (Reset) ---
document.getElementById('btn-send-reset').addEventListener('click', async () => {
    const email = document.getElementById('forgot-email').value;
    
    if (!email) {
        // Kita pakai alert kecil bawaan modal dulu untuk validasi simple
        alert("Mohon isi email terlebih dahulu."); 
        return;
    }

    closeModal('modal-forgot'); // Tutup modal input
    showLoading();

    try {
        await auth.sendPasswordResetEmail(email);
        hideLoading();
        showAlert("Email Terkirim", `Link reset password telah dikirim ke ${email}. Cek inbox/spam Anda.`, 'success');
        document.getElementById('forgot-email').value = ''; // Reset input
    } catch (error) {
        hideLoading();
        let msg = "Gagal mengirim email.";
        if (error.code === 'auth/user-not-found') msg = "Email tersebut tidak terdaftar di sistem kami.";
        showAlert("Gagal", msg, 'error');
    }
});
