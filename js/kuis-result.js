// js/kuis-result.js

// 1. Ambil Parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const kuisId = urlParams.get('id');
const scoreURL = urlParams.get('score');

// Tampilkan skor langsung (Instant Feedback)
if (scoreURL) {
    document.getElementById('score-display').textContent = scoreURL;
    
    // Feedback sederhana
    const feedbackEl = document.getElementById('feedback-text');
    const s = parseInt(scoreURL);
    if (s >= 80) feedbackEl.textContent = "Luar biasa! Pertahankan prestasimu. 🎉";
    else if (s >= 60) feedbackEl.textContent = "Cukup baik, tapi masih bisa ditingkatkan. 👍";
    else feedbackEl.textContent = "Jangan patah semangat. Ayo belajar lagi! 💪";
}

// 2. Event Listener Download PDF
document.getElementById('btn-download').addEventListener('click', async () => {
    // Cek Login dulu
    const user = auth.currentUser;
    if (!user) return alert("Sesi habis. Silakan login ulang.");

    showLoading(); // Tampilkan spinner loading karena proses ini agak berat

    try {
        // --- TAHAP A: AMBIL DATA DARI FIREBASE ---
        
        // 1. Ambil Data Soal (Kuis)
        const quizDoc = await db.collection('quizzes').doc(kuisId).get();
        if(!quizDoc.exists) throw new Error("Data kuis tidak ditemukan.");
        const quizData = quizDoc.data();

        // 2. Ambil Jawaban User (Submission Terakhir)
        // Kita cari submission berdasarkan uid & quizId, urutkan dari yang terbaru
        const subSnap = await db.collection('quiz_submissions')
            .where('studentUid', '==', user.uid)
            .where('quizId', '==', kuisId)
            .orderBy('submittedAt', 'desc')
            .limit(1)
            .get();

        if(subSnap.empty) throw new Error("Data jawaban tidak ditemukan.");
        const subData = subSnap.docs[0].data();

        // --- TAHAP B: GENERATE PDF ---
        await generatePDF(quizData, subData, user.displayName || "Siswa");

    } catch (err) {
        console.error(err);
        alert("Gagal membuat PDF: " + err.message);
    } finally {
        hideLoading();
    }
});


// 3. FUNGSI UTAMA PEMBUAT PDF (Native jsPDF)
async function generatePDF(quizData, subData, studentName) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4'); // Portrait, A4

    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - (margin * 2);
    let y = margin; // Kursor Vertikal

    // Helper: Cek Halaman Baru
    function checkPageBreak(heightNeeded) {
        if (y + heightNeeded > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
    }

    // --- HEADER HALAMAN 1 ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 90, 156); // Biru Cendekia
    doc.text("HASIL REVIEW KUIS", pageWidth / 2, y + 10, { align: 'center' });
    y += 20;

    // Info Siswa & Nilai
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text(`Nama Siswa: ${studentName}`, margin, y);
    doc.text(`Judul Kuis: ${quizData.title}`, margin, y + 7);
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Nilai Akhir: ${subData.score}`, margin, y + 14);
    
    y += 25;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageWidth - margin, y); // Garis pemisah
    y += 10;

    // --- LOOPING SOAL ---
    quizData.questions.forEach((q, index) => {
        const userAnswerIndex = subData.answers[index]; // Jawaban siswa (0, 1, 2...)
        const correctAnswerIndex = parseInt(q.correctAnswerIndex); // Kunci jawaban

        // Cek space buat soal
        checkPageBreak(25);

        // Tulis Soal
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        const questionLines = doc.splitTextToSize(`${index + 1}. ${q.questionText}`, contentWidth);
        doc.text(questionLines, margin, y);
        y += (questionLines.length * 5) + 3;

        // Tulis Opsi
        doc.setFontSize(10);
        q.options.forEach((opt, i) => {
            const prefix = String.fromCharCode(65 + i); // A, B, C...
            const optionText = `${prefix}. ${opt}`;
            const optionLines = doc.splitTextToSize(optionText, contentWidth - 5);
            const boxHeight = (optionLines.length * 5) + 4;

            checkPageBreak(boxHeight + 2);

            // Logika Warna Kotak
            // Default: Putih
            let r=255, g=255, b=255; 
            
            if (i === correctAnswerIndex) {
                // Jawaban Benar (Hijau Muda)
                r=230; g=247; b=236; 
            } else if (i === userAnswerIndex && i !== correctAnswerIndex) {
                // Jawaban Salah Siswa (Merah Muda)
                r=253; g=238; b=238;
            }

            // Gambar Kotak Background
            doc.setFillColor(r, g, b);
            doc.rect(margin, y, contentWidth, boxHeight, 'F');

            // Tulis Teks Opsi
            doc.setFont('helvetica', 'normal');
            doc.text(optionLines, margin + 2, y + 5);

            // Tambahkan tanda (V) atau (X)
            if (i === correctAnswerIndex) {
                 doc.setTextColor(40, 167, 69); // Hijau
                 doc.text(" (Kunci)", margin + contentWidth - 20, y + 5);
            } else if (i === userAnswerIndex) {
                 doc.setTextColor(220, 53, 69); // Merah
                 doc.text(" (Jawabanmu)", margin + contentWidth - 25, y + 5);
            }
            doc.setTextColor(0,0,0); // Reset hitam

            y += boxHeight + 2;
        });

        y += 5; // Spasi antar soal
    });

    // --- FOOTER ---
    checkPageBreak(40);
    y += 10;
    const dateStr = new Date().toLocaleDateString('id-ID');
    doc.setFontSize(10);
    doc.text(`Dicetak otomatis oleh Cendekia Aksara pada ${dateStr}`, pageWidth/2, y, {align:'center'});

    // Simpan File
    doc.save(`Review_${quizData.title}_${studentName}.pdf`);
}
