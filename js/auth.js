// js/auth.js

// 1. Cek apakah user sebenarnya sudah login?
// Kalau sudah, jangan biarkan dia di halaman login, langsung lempar ke dashboard.
auth.onAuthStateChanged(user => {
    if (user) {
        // Cek role sebentar ke database
        db.collection('users').doc(user.uid).get().then(doc => {
            if(doc.exists) {
                const data = doc.data();
                if(data.role === 'pengajar') {
                    window.location.href = 'admin/dashboard.html'; // Redirect ke Admin
                } else {
                    window.location.href = 'dashboard.html'; // Redirect ke Siswa
                }
            }
        });
    }
});

// 2. Logika Switch Tampilan (Login <-> Register)
function toggleForm(type) {
    const loginBox = document.getElementById('login-box');
    const regBox = document.getElementById('register-box');
    
    if (type === 'register') {
        loginBox.classList.add('hidden');
        regBox.classList.remove('hidden');
    } else {
        regBox.classList.add('hidden');
        loginBox.classList.remove('hidden');
    }
}

// 3. Eksekusi Login
document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;

    showLoading(); // Panggil fungsi dari config.js

    auth.signInWithEmailAndPassword(email, pass)
        .then((cred) => {
            // Berhasil login! 
            // Tidak perlu redirect manual di sini, karena auth.onAuthStateChanged di atas akan otomatis jalan.
            console.log("Login sukses:", cred.user.email);
        })
        .catch((error) => {
            hideLoading();
            let msg = "Gagal masuk.";
            if(error.code === 'auth/wrong-password') msg = "Password salah.";
            if(error.code === 'auth/user-not-found') msg = "Akun tidak ditemukan.";
            alert(msg);
        });
});

// 4. Eksekusi Register
document.getElementById('form-register').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-password').value;

    showLoading();

    // Logika Otomatis Admin: Jika email berakhiran @ac.id, jadikan pengajar
    const role = email.endsWith('@ac.id') ? 'pengajar' : 'siswa';

    auth.createUserWithEmailAndPassword(email, pass)
        .then((cred) => {
            // Simpan data tambahan ke Firestore
            return db.collection('users').doc(cred.user.uid).set({
                name: name,
                email: email,
                role: role,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            hideLoading();
            alert("Pendaftaran Berhasil! Silakan Login.");
            toggleForm('login');
            // Kosongkan form
            document.getElementById('form-register').reset();
        })
        .catch((error) => {
            hideLoading();
            alert("Gagal Daftar: " + error.message);
        });
});
