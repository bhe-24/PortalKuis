// js/dashboard.js

// 1. Set Tanggal (Pastikan elemen ada sebelum diisi)
document.addEventListener('DOMContentLoaded', () => {
    const dateEl = document.getElementById('date-display');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('id-ID', options);
    }
});

// 2. Cek Login & Ambil Data
auth.onAuthStateChanged(user => {
    if (user) {
        loadUserProfile(user.uid);
    } else {
        window.location.href = 'index.html';
    }
});

function loadUserProfile(uid) {
    db.collection('users').doc(uid).get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            const nameEl = document.getElementById('student-name');
            // Animasi loading nama hilang, ganti nama asli
            if(nameEl) {
                const firstName = data.name.split(' ')[0]; // Ambil nama depan saja
                nameEl.textContent = `Halo, ${firstName}!`;
            }
        }
    }).catch(err => console.error("Gagal ambil data:", err));
}

// 3. Logout dengan Modal Baru
document.getElementById('btn-logout').addEventListener('click', async () => {
    // Pastikan fungsi showConfirm dari config.js sudah terpanggil
    const yakin = await showConfirm("Konfirmasi Keluar", "Apakah Anda yakin ingin mengakhiri sesi ini?");
    if (yakin) {
        auth.signOut().then(() => window.location.href = 'index.html');
    }
});
