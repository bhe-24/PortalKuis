// js/profile.js

// --- 1. SETUP ELEMENT ---
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

// --- 2. FUNGSI CUSTOM MODAL (PENGGANTI ALERT) ---
const modalOverlay = document.getElementById('custom-modal');
const mIcon = document.getElementById('m-icon');
const mTitle = document.getElementById('m-title');
const mMsg = document.getElementById('m-msg');
const mActions = document.getElementById('m-actions');

function showModal(type, title, msg, onConfirm = null) {
    // Reset
    mIcon.className = 'modal-icon';
    mActions.innerHTML = '';

    // Set Content
    mTitle.textContent = title;
    mMsg.textContent = msg;

    // Tipe Modal (Sukses/Error/Confirm)
    if (type === 'success') {
        mIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        mIcon.classList.add('icon-success');
        mActions.innerHTML = `<button onclick="closeModal()" class="btn-modal btn-modal-primary">OK</button>`;
    } else if (type === 'error') {
        mIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        mIcon.classList.add('icon-error');
        mActions.innerHTML = `<button onclick="closeModal()" class="btn-modal btn-modal-primary">Tutup</button>`;
    } else if (type === 'confirm') {
        mIcon.innerHTML = '<i class="fa-solid fa-circle-question"></i>';
        mIcon.classList.add('icon-confirm');
        
        // Buat Tombol Ya & Tidak
        const btnYes = document.createElement('button');
        btnYes.className = 'btn-modal btn-modal-primary';
        btnYes.textContent = 'Ya, Lanjutkan';
        btnYes.onclick = () => { closeModal(); if(onConfirm) onConfirm(); };

        const btnNo = document.createElement('button');
        btnNo.className = 'btn-modal btn-modal-cancel';
        btnNo.textContent = 'Batal';
        btnNo.onclick = closeModal;

        mActions.appendChild(btnNo);
        mActions.appendChild(btnYes);
    }

    // Tampilkan
    modalOverlay.style.display = 'flex';
    setTimeout(() => modalOverlay.classList.add('active'), 10);
}

function closeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 300);
}

// --- 3. MAIN LOGIC ---

auth.onAuthStateChanged(async user => {
    if (!user) { window.location.href = 'index.html'; return; }

    try {
        const doc = await db.collection('users').doc(user.uid).get();
        const statsQuery = await db.collection('quiz_submissions').where('studentUid', '==', user.uid).get();
        
        if (doc.exists) {
            renderProfile(doc.data(), user, statsQuery.size);
        } else {
            renderProfile({}, user, 0);
        }
    } catch (err) {
        console.error(err);
        showModal('error', 'Gagal', 'Terjadi kesalahan saat memuat data profil.');
    } finally {
        loadingOverlay.style.display = 'none';
    }
});

function renderProfile(data, firebaseUser, quizCount) {
    const name = data.name || firebaseUser.displayName || "Pengguna Baru";
    const email = firebaseUser.email;
    const role = data.role || "Siswa";
    const smt = data.semester || "Belum diatur";
    const gender = data.gender || "-";
    const address = data.address || "-";

    els.name.textContent = name;
    els.email.textContent = email;
    els.role.textContent = role.toUpperCase();
    els.smt.textContent = smt;
    els.gender.textContent = gender;
    els.address.textContent = address;
    els.stats.textContent = `${quizCount} Kuis Selesai`;

    // Avatar
    let seed = firebaseUser.uid;
    let avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
    if (gender === 'Laki-laki') avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=shortHair,shortFlat,shortRound&hairColor=2c1b18`;
    else if (gender === 'Perempuan') avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&top=longHair,straight01&hairColor=2c1b18&clothe=blazerAndShirt`;
    
    els.avatar.src = avatarUrl;

    inputs.name.value = name;
    inputs.address.value = address === '-' ? '' : address;
    if(data.semester) inputs.smt.value = data.semester.replace('Semester ', '');
    if(data.gender) inputs.gender.value = data.gender;
}

function toggleEdit(showEdit) {
    if (showEdit) {
        viewMode.style.display = 'none';
        editMode.style.display = 'block';
    } else {
        viewMode.style.display = 'block';
        editMode.style.display = 'none';
    }
}

// SIMPAN PROFIL (Pakai Modal Baru)
async function saveProfile() {
    const user = auth.currentUser;
    if(!user) return;

    const newName = inputs.name.value.trim();
    const newSmt = "Semester " + inputs.smt.value;
    const newGender = inputs.gender.value;
    const newAddress = inputs.address.value.trim();

    if(!newName) return showModal('error', 'Gagal', 'Nama tidak boleh kosong!');

    loadingOverlay.style.display = 'flex';

    try {
        await db.collection('users').doc(user.uid).set({
            name: newName,
            semester: newSmt,
            gender: newGender,
            address: newAddress,
            role: 'siswa',
            email: user.email,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        await user.updateProfile({ displayName: newName });

        // Tampilkan Modal Sukses
        loadingOverlay.style.display = 'none';
        showModal('success', 'Berhasil', 'Profil Anda telah diperbarui!', () => {
            window.location.reload();
        });

    } catch (err) {
        console.error(err);
        loadingOverlay.style.display = 'none';
        showModal('error', 'Error', 'Gagal menyimpan: ' + err.message);
    }
}

// LOGOUT (Pakai Modal Confirm Baru)
function logoutUser() {
    showModal('confirm', 'Konfirmasi', 'Apakah Anda yakin ingin keluar dari akun?', () => {
        auth.signOut().then(() => window.location.href = 'index.html');
    });
}
