// js/admin-dashboard.js

// 1. Tampilkan Tanggal (Langsung eksekusi tanpa nunggu loading)
const dateEl = document.getElementById('date-display');
if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('id-ID', options);
}

// 2. Cek Auth & Role Admin (Satpam)
auth.onAuthStateChanged(async user => {
    // Jika tidak ada user, langsung tendang
    if (!user) {
        console.log("User tidak ditemukan, redirect ke login.");
        window.location.href = '../index.html';
        return;
    }

    console.log("User ditemukan:", user.uid);
    
    // Tampilkan efek blur loading (Pastikan fungsi ini ada di config.js)
    if (typeof showLoading === 'function') showLoading();

    try {
        const doc = await db.collection('users').doc(user.uid).get();
        
        // Matikan loading segera setelah dapat respon dari database
        if (typeof hideLoading === 'function') hideLoading();

        if (doc.exists) {
            const data = doc.data();
            console.log("Data user:", data);

            // Validasi: Apakah dia benar-benar 'pengajar'?
            if (data.role !== 'pengajar') {
                alert("AKSES DITOLAK! Anda bukan Admin.");
                window.location.href = '../dashboard.html'; // Tendang ke siswa
                return;
            } 
            
            // SUKSES: Tampilkan Nama Admin
            const adminNameEl = document.getElementById('admin-name');
            if (adminNameEl) {
                // Ambil nama depan saja biar rapi
                const firstName = data.name.split(' ')[0];
                adminNameEl.textContent = `Halo, Admin ${firstName}!`;
            }
        } else {
            console.error("Dokumen user tidak ditemukan di database!");
            alert("Data akun admin tidak ditemukan.");
        }

    } catch (err) {
        console.error("Error mengambil data:", err);
        if (typeof hideLoading === 'function') hideLoading();
        // Jangan alert error koneksi agar tidak mengganggu, cukup log di console
    }
});

// 3. Logout dengan Modal Cantik (Menggunakan fungsi global dari config.js)
document.getElementById('btn-logout').addEventListener('click', async () => {
    // Cek apakah fungsi showConfirm ada (dari config.js)
    if (typeof showConfirm === 'function') {
        const yakin = await showConfirm(
            "Logout Admin", 
            "Apakah Anda yakin ingin keluar dari panel admin?"
        );
        
        if(yakin) {
            if (typeof showLoading === 'function') showLoading();
            auth.signOut().then(() => window.location.href = '../index.html');
        }
    } else {
        // Fallback jika modal error
        if(confirm("Logout?")) {
            auth.signOut().then(() => window.location.href = '../index.html');
        }
    }
});
