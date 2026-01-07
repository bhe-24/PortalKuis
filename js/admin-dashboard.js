// js/admin-dashboard.js

// 1. Tampilkan Tanggal
document.addEventListener('DOMContentLoaded', () => {
    const dateEl = document.getElementById('date-display');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('id-ID', options);
    }
});

// 2. Cek Auth & Role Admin (Satpam)
auth.onAuthStateChanged(user => {
    if (user) {
        showLoading(); // Efek Blur sebentar
        
        db.collection('users').doc(user.uid).get().then(doc => {
            hideLoading();
            
            if (doc.exists) {
                const data = doc.data();
                // Validasi: Apakah dia benar-benar 'pengajar'?
                if (data.role !== 'pengajar') {
                    alert("AKSES DITOLAK! Anda bukan Admin.");
                    window.location.href = '../dashboard.html'; // Tendang ke siswa
                } else {
                    // Tampilkan Nama Admin
                    const firstName = data.name.split(' ')[0];
                    document.getElementById('admin-name').textContent = `Halo, Admin ${firstName}!`;
                }
            }
        }).catch(err => {
            hideLoading();
            console.error(err);
        });
    } else {
        window.location.href = '../index.html'; // Belum login
    }
});

// 3. Logout dengan Modal Cantik
document.getElementById('btn-logout').addEventListener('click', async () => {
    // Gunakan fungsi showConfirm dari config.js (Pop-up Blur)
    const yakin = await showConfirm(
        "Logout Admin", 
        "Apakah Anda yakin ingin keluar dari panel admin?"
    );
    
    if(yakin) {
        showLoading();
        auth.signOut().then(() => window.location.href = '../index.html');
    }
});
