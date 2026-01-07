// js/profile.js

// Referensi DOM Elements
const loadingOverlay = document.getElementById('p-loading');
const viewMode = document.getElementById('view-mode');
const editMode = document.getElementById('edit-mode');

// Elemen Tampilan
const els = {
    avatar: document.getElementById('p-avatar'),
    name: document.getElementById('p-name'),
    email: document.getElementById('p-email'),
    role: document.getElementById('p-role'),
    smt: document.getElementById('p-smt'),
    gender: document.getElementById('p-gender'),
    address: document.getElementById('p-address'),
    stats: document.getElementById('p-stats')
};

// Elemen Edit
const inputs = {
    name: document.getElementById('edit-name'),
    smt: document.getElementById('edit-smt'),
    gender: document.getElementById('edit-gender'),
    address: document.getElementById('edit-address')
};

// 1. CEK AUTH & LOAD DATA (ANTI-STUCK)
auth.onAuthStateChanged(async user => {
    if (!user) {
        window.location.href = 'index.html';
        return;
    }

    try {
        // Ambil Data Profil
        const doc = await db.collection('users').doc(user.uid).get();
        
        // Ambil Statistik Kuis (Jumlah yg sudah dikerjakan)
        const statsQuery = await db.collection('quiz_submissions')
            .where('studentUid', '==', user.uid).get();
        
        if (doc.exists) {
            const data = doc.data();
            renderProfile(data, user, statsQuery.size);
        } else {
            console.warn("Profil belum ada, menggunakan data default.");
            renderProfile({}, user, 0);
        }

    } catch (err) {
        console.error("Gagal memuat profil:", err);
        alert("Terjadi kesalahan saat memuat data.");
    } finally {
        // KUNCI ANTI-LOADING TERUS:
        // Apapun yang terjadi (sukses/error), matikan loading!
        loadingOverlay.style.display = 'none';
    }
});

// 2. RENDER DATA KE LAYAR
function renderProfile(data, firebaseUser, quizCount) {
    const name = data.name || firebaseUser.displayName || "Pengguna Baru";
    const email = firebaseUser.email;
    const role = data.role || "Siswa";
    const smt = data.semester || "Belum diatur";
    const gender = data.gender || "-";
    const address = data.address || "-";

    // Update Tampilan
    els.name.textContent = name;
    els.email.textContent = email;
    els.role.textContent = role.toUpperCase();
    els.smt.textContent = smt;
    els.gender.textContent = gender;
    els.address.textContent = address;
    els.stats.textContent = `${quizCount} Kuis Selesai`;

    // Avatar Logic
    let seed = firebaseUser.uid;
    let avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`; // Default Robot
    
    if (gender === 'Laki-laki') {
        avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=shortHair,shortFlat,shortRound&hairColor=2c1b18`;
    } else if (gender === 'Perempuan') {
        avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=longHair,straight01&hairColor=2c1b18&clothe=blazerAndShirt`;
    }
    els.avatar.src = avatarUrl;

    // Isi Form Edit
    inputs.name.value = name;
    inputs.address.value = address === '-' ? '' : address;
    if(data.semester) inputs.smt.value = data.semester.replace('Semester ', '');
    if(data.gender) inputs.gender.value = data.gender;
}

// 3. TOGGLE MODE EDIT
function toggleEdit(showEdit) {
    if (showEdit) {
        viewMode.style.display = 'none';
        editMode.style.display = 'block';
    } else {
        viewMode.style.display = 'block';
        editMode.style.display = 'none';
    }
}

// 4. SIMPAN PERUBAHAN
async function saveProfile() {
    const user = auth.currentUser;
    if(!user) return;

    const newName = inputs.name.value.trim();
    const newSmt = "Semester " + inputs.smt.value;
    const newGender = inputs.gender.value;
    const newAddress = inputs.address.value.trim();

    if(!newName) return alert("Nama tidak boleh kosong!");

    // Tampilkan Loading lagi saat menyimpan
    loadingOverlay.style.display = 'flex';

    try {
        await db.collection('users').doc(user.uid).set({
            name: newName,
            semester: newSmt,
            gender: newGender,
            address: newAddress,
            role: 'siswa', // Default role aman
            email: user.email,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true }); // Merge agar data lain tidak hilang

        // Update Display Name di Auth juga (Opsional tapi bagus)
        await user.updateProfile({ displayName: newName });

        alert("Profil berhasil diperbarui!");
        window.location.reload(); // Refresh halaman

    } catch (err) {
        console.error(err);
        alert("Gagal menyimpan: " + err.message);
        loadingOverlay.style.display = 'none';
    }
}

// 5. LOGOUT
function logoutUser() {
    if(confirm("Yakin ingin keluar?")) {
        auth.signOut().then(() => window.location.href = 'index.html');
    }
}
