// js/dashboard.js

// 1. Tampilkan Tanggal Hari Ini
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').textContent = new Date().toLocaleDateString('id-ID', dateOptions);

// 2. Cek Login
auth.onAuthStateChanged(user => {
    if (user) {
        loadUserProfile(user.uid);
    } else {
        // Kalau tidak login, tendang ke login
        window.location.href = 'index.html';
    }
});

// 3. Ambil Data Profil
function loadUserProfile(uid) {
    // Tampilkan loading sebentar
    const loading = document.getElementById('loading-overlay');
    if(loading) loading.classList.remove('hidden');

    db.collection('users').doc(uid).get().then(doc => {
        if(loading) loading.classList.add('hidden');

        if (doc.exists) {
            const data = doc.data();
            
            // Masukkan Nama ke HTML
            // Pecah nama depan biar lebih akrab (Misal: "Budi Santoso" jadi "Halo, Budi")
            const firstName = data.name.split(' ')[0];
            document.getElementById('student-name').textContent = `Halo, ${firstName}!`;
        }
    }).catch(err => {
        console.error(err);
        if(loading) loading.classList.add('hidden');
    });
}

// 4. Logout
document.getElementById('btn-logout').addEventListener('click', () => {
    document.getElementById('btn-logout').addEventListener('click', async () => {
    // Fungsi showConfirm mengembalikan true/false (Promise)
    const yakin = await showConfirm("Konfirmasi Logout", "Apakah Anda yakin ingin keluar dari aplikasi?");
    
    if (yakin) {
        showLoading();
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
    }
});
