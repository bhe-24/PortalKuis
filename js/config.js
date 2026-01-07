// js/config.js

// --- 1. KONFIGURASI FIREBASE ---
const firebaseConfig = { 
    apiKey: "AIzaSyDpUWUIzPXIZN6rrNtsIqcL6VfOE2RLVl0", 
    authDomain: "mading-cf676.firebaseapp.com", 
    projectId: "mading-cf676", 
    storageBucket: "mading-cf676.appspot.com", 
    messagingSenderId: "72175203671", 
    appId: "1:72175203671:web:7a0676a55beb64bc96ba12" 
};

// Inisialisasi Firebase (Cek agar tidak double)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

// --- 2. FUNGSI UTILITAS GLOBAL ---
// (Bisa dipanggil di halaman mana saja)

function showLoading() {
    const overlay = document.getElementById('loading-overlay');
    if(overlay) overlay.classList.remove('hidden');
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if(overlay) overlay.classList.add('hidden');
}

// Fungsi Modal Alert (Pengganti alert bawaan browser yang jelek)
function showCustomAlert(title, message) {
    alert(`${title}\n\n${message}`); 
    // Nanti kita bisa perbagus ini dengan modal HTML jika sudah siap layoutnya
}
