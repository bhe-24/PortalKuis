// js/config.js

// --- 1. CONFIG FIREBASE ---
const firebaseConfig = { 
    apiKey: "AIzaSyDpUWUIzPXIZN6rrNtsIqcL6VfOE2RLVl0", 
    authDomain: "mading-cf676.firebaseapp.com", 
    projectId: "mading-cf676", 
    storageBucket: "mading-cf676.appspot.com", 
    messagingSenderId: "72175203671", 
    appId: "1:72175203671:web:7a0676a55beb64bc96ba12" 
};

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const auth = firebase.auth();
const db = firebase.firestore();

// --- 2. SISTEM POP-UP GLOBAL (MODAL) ---

// Fungsi membuat HTML Modal secara otomatis saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('global-modal')) {
        const modalHTML = `
            <div id="global-modal" class="custom-modal">
                <div class="modal-box">
                    <div id="modal-icon" class="modal-icon"></div>
                    <h3 id="modal-title" class="modal-title">Judul</h3>
                    <p id="modal-msg" class="modal-msg">Pesan...</p>
                    
                    <div id="modal-input-area" class="hidden">
                        <input type="text" id="modal-input" class="modal-input-field" placeholder="...">
                    </div>

                    <div class="modal-buttons">
                        <button id="btn-cancel" class="btn-modal btn-modal-cancel">Batal</button>
                        <button id="btn-confirm" class="btn-modal btn-modal-confirm">OK</button>
                    </div>
                </div>
            </div>
            <div id="global-loading" class="custom-modal" style="z-index:100000;">
                <div class="modal-box" style="width: auto; padding: 20px;">
                    <div class="spinner" style="margin: 0 auto 10px auto;"></div>
                    <p>Memproses...</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
});

// FUNGSI 1: Tampilkan Alert Biasa (Sukses/Gagal)
function showAlert(title, message, type = 'info') {
    return new Promise((resolve) => {
        setupModal(title, message, type);
        
        const btnConfirm = document.getElementById('btn-confirm');
        const btnCancel = document.getElementById('btn-cancel');
        
        btnCancel.style.display = 'none'; // Alert tidak butuh tombol batal
        btnConfirm.textContent = 'OK';
        btnConfirm.className = 'btn-modal btn-modal-confirm';
        
        if (type === 'error') btnConfirm.className = 'btn-modal btn-modal-danger';

        openModal();
        
        btnConfirm.onclick = () => {
            closeModal();
            resolve(true);
        };
    });
}

// FUNGSI 2: Tampilkan Konfirmasi (Ya/Tidak)
function showConfirm(title, message) {
    return new Promise((resolve) => {
        setupModal(title, message, 'question');
        
        const btnConfirm = document.getElementById('btn-confirm');
        const btnCancel = document.getElementById('btn-cancel');
        
        btnCancel.style.display = 'inline-block';
        btnConfirm.textContent = 'Ya, Lanjutkan';
        btnConfirm.className = 'btn-modal btn-modal-confirm';
        
        openModal();

        btnConfirm.onclick = () => { closeModal(); resolve(true); };
        btnCancel.onclick = () => { closeModal(); resolve(false); };
    });
}

// FUNGSI 3: Tampilkan Input (Khusus Lupa Password)
function showPrompt(title, message, placeholder) {
    return new Promise((resolve) => {
        setupModal(title, message, 'info');
        
        const inputArea = document.getElementById('modal-input-area');
        const inputField = document.getElementById('modal-input');
        inputArea.classList.remove('hidden'); // Tampilkan input
        inputField.value = '';
        inputField.placeholder = placeholder;
        
        const btnConfirm = document.getElementById('btn-confirm');
        const btnCancel = document.getElementById('btn-cancel');
        
        btnCancel.style.display = 'inline-block';
        btnConfirm.textContent = 'Kirim';
        
        openModal();

        btnConfirm.onclick = () => { 
            const val = inputField.value;
            if(!val) return alert("Mohon isi data.");
            closeModal(); 
            resolve(val); 
        };
        btnCancel.onclick = () => { closeModal(); resolve(null); };
    });
}

// INTERNAL: Setup Isi Modal
function setupModal(title, message, type) {
    const iconEl = document.getElementById('modal-icon');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-msg').innerHTML = message; // Support HTML text
    document.getElementById('modal-input-area').classList.add('hidden'); // Reset input hidden

    // Ikon Sesuai Tipe
    if (type === 'success') {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #28a745;"></i>';
    } else if (type === 'error') {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: #dc3545;"></i>';
    } else if (type === 'question') {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-question" style="color: #f7a04a;"></i>';
    } else {
        iconEl.innerHTML = '<i class="fa-solid fa-circle-info" style="color: #005a9c;"></i>';
    }
}

function openModal() {
    document.getElementById('global-modal').classList.add('show');
    document.body.classList.add('modal-active'); // Efek Blur Background
}

function closeModal() {
    document.getElementById('global-modal').classList.remove('show');
    document.body.classList.remove('modal-active'); // Hapus Blur
}

// Loading Spinner Global
function showLoading() { 
    document.getElementById('global-loading').classList.add('show'); 
    document.body.classList.add('modal-active');
}
function hideLoading() { 
    document.getElementById('global-loading').classList.remove('show'); 
    document.body.classList.remove('modal-active');
}
