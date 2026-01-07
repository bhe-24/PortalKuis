// js/admin-dashboard.js

// 1. Tampilkan Tanggal (Dengan Pengecekan ID)
document.addEventListener('DOMContentLoaded', () => {
    const dateEl = document.getElementById('date-display');
    
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('id-ID', options);
    } else {
        console.warn("Script mencari id='date-display' tapi tidak ketemu di HTML.");
    }
});

// 2. Cek Login & Data Admin
auth.onAuthStateChanged(async user => {
    if (!user) {
        // Kalau tidak login, tendang ke index
        window.location.href = '../index.html';
        return;
    }

    // Panggil efek loading blur (jika ada di config.js)
    if (typeof showLoading === 'function') showLoading();

    try {
        const doc = await db.collection('users').doc(user.uid).get();
        
        // Matikan loading
        if (typeof hideLoading === 'function') hideLoading();

        if (doc.exists) {
            const data = doc.data();

            // Validasi: Pastikan dia Pengajar/Admin
            if (data.role !== 'pengajar') {
                alert("AKSES DITOLAK: Anda bukan Admin!");
                window.location.href = '../dashboard.html'; // Tendang ke dashboard siswa
                return;
            }

            // Tampilkan Nama (Dengan Pengecekan ID)
            const nameEl = document.getElementById('admin-name');
            if (nameEl) {
                const firstName = data.name ? data.name.split(' ')[0] : 'Admin';
                nameEl.textContent = `Halo, Admin ${firstName}!`;
            } else {
                console.warn("Script mencari id='admin-name' tapi tidak ketemu di HTML.");
            }

        } else {
            console.error("Data user tidak ditemukan di database.");
        }
    } catch (err) {
        console.error("Error mengambil data:", err);
        if (typeof hideLoading === 'function') hideLoading();
    }
});

// 3. Logout (Dengan Pengecekan ID & Modal Blur)
const btnLogout = document.getElementById('btn-logout');

if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
        // Cek apakah fungsi showConfirm ada (dari config.js)
        let yakin = false;
        
        if (typeof showConfirm === 'function') {
            yakin = await showConfirm("Keluar Admin", "Yakin ingin keluar dari panel admin?");
        } else {
            // Fallback kalau config.js belum termuat sempurna
            yakin = confirm("Yakin ingin keluar?");
        }

        if (yakin) {
            if (typeof showLoading === 'function') showLoading();
            auth.signOut().then(() => window.location.href = '../index.html');
        }
    });
} else {
    console.warn("Script mencari id='btn-logout' tapi tidak ketemu di HTML.");
}
