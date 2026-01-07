// js/auth.js

// 1. CEK LOGIN
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            if (doc.exists) {
                if (doc.data().role === 'pengajar') window.location.href = 'admin/dashboard.html';
                else window.location.href = 'dashboard.html';
            }
        });
    }
});

// 2. TOGGLE VIEW (Login <-> Register)
window.switchView = function(view) {
    if (view === 'register') {
        document.getElementById('box-login').classList.add('hidden');
        document.getElementById('box-register').classList.remove('hidden');
    } else {
        document.getElementById('box-register').classList.add('hidden');
        document.getElementById('box-login').classList.remove('hidden');
    }
};

// 3. TOGGLE PASSWORD
window.togglePassword = function(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
};

// 4. LOGIKA LOGIN
document.getElementById('form-login').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;

    showLoading(); // Panggil fungsi global
    try {
        await auth.signInWithEmailAndPassword(email, pass);
    } catch (error) {
        hideLoading();
        let msg = "Terjadi kesalahan.";
        if (error.code === 'auth/wrong-password') msg = "Password salah.";
        if (error.code === 'auth/user-not-found') msg = "Akun tidak ditemukan.";
        showAlert("Login Gagal", msg, 'error'); // Pakai Modal Baru
    }
});

// 5. LOGIKA REGISTER
document.getElementById('form-register').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-password').value;

    showLoading();
    try {
        const role = email.endsWith('@ac.id') ? 'pengajar' : 'siswa';
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        await db.collection('users').doc(cred.user.uid).set({
            name: name, email, role,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        hideLoading();
        
        await showAlert("Berhasil!", "Akun dibuat. Silakan login.", 'success');
        switchView('login');
        document.getElementById('form-register').reset();

    } catch (error) {
        hideLoading();
        showAlert("Gagal Daftar", error.message, 'error');
    }
});

// 6. LOGIKA LUPA PASSWORD (FIX BUG)
// Kita panggil fungsi ini lewat onclick di HTML
window.handleForgotPassword = async function() {
    // Munculkan Modal Input (Prompt)
    const email = await showPrompt("Reset Password", "Masukkan email akun Anda:", "nama@email.com");

    if (email) {
        showLoading();
        try {
            await auth.sendPasswordResetEmail(email);
            hideLoading();
            showAlert("Email Terkirim", `Link reset telah dikirim ke <b>${email}</b>.`, 'success');
        } catch (error) {
            hideLoading();
            let msg = "Gagal mengirim.";
            if (error.code === 'auth/user-not-found') msg = "Email tidak terdaftar.";
            showAlert("Gagal", msg, 'error');
        }
    }
};
