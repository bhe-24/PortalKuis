// js/admin-dashboard.js

auth.onAuthStateChanged(user => {
    if (user) {
        // Cek Role di Database
        db.collection('users').doc(user.uid).get().then(doc => {
            if (doc.exists) {
                const data = doc.data();
                if (data.role !== 'pengajar') {
                    alert("ANDA BUKAN ADMIN! Kembali ke halaman siswa.");
                    window.location.href = '../dashboard.html'; // Tendang ke siswa
                } else {
                    document.getElementById('welcome-admin').textContent = `Admin: ${data.name}`;
                }
            }
        });
    } else {
        window.location.href = '../index.html'; // Belum login
    }
});

document.getElementById('btn-logout').addEventListener('click', () => {
    if(confirm("Logout Admin?")) {
        auth.signOut().then(() => window.location.href = '../index.html');
    }
});
