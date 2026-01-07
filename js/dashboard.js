// js/dashboard.js

// 1. Cek Status Login (Satpam Halaman)
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User terdeteksi:", user.email);
        loadUserProfile(user.uid);
    } else {
        // Kalau tidak ada user login, tendang ke halaman depan
        console.log("User tidak ditemukan, redirect ke login.");
        window.location.href = 'index.html';
    }
});

// 2. Fungsi Ambil Data Profil
function loadUserProfile(uid) {
    db.collection('users').doc(uid).get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            
            // Cek jika dia sebenarnya Admin (Pengajar) tapi nyasar ke sini
            if(data.role === 'pengajar') {
                // Opsional: Redirect ke dashboard admin atau biarkan saja
                // window.location.href = 'admin/dashboard.html'; 
            }

            // Tampilkan Nama
            document.getElementById('welcome-msg').textContent = `Selamat datang, ${data.name}!`;
        }
    }).catch(err => {
        console.error("Gagal ambil profil:", err);
    });
}

// 3. Fungsi Logout
document.getElementById('btn-logout').addEventListener('click', () => {
    const confirmLogout = confirm("Yakin ingin keluar?");
    if (confirmLogout) {
        showLoading(); // dari config.js
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
    }
});
