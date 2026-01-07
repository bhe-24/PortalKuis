// js/question-bank.js

const BANK_SOAL_SASTRA = [
    {
        q: "Unsur intrinsik cerpen yang berhubungan dengan tempat, waktu, dan suasana terjadinya cerita disebut...",
        opts: ["Alur", "Latar (Setting)", "Tema", "Amanat"],
        kunci: 1 // B
    },
    {
        q: "Gaya bahasa yang membandingkan dua hal secara langsung dengan kata 'seperti', 'laksana', atau 'bak' adalah...",
        opts: ["Metafora", "Personifikasi", "Simile", "Hiperbola"],
        kunci: 2 // C
    },
    {
        q: "Bagian awal dalam struktur novel yang berisi pengenalan tokoh dan latar disebut...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Koda"],
        kunci: 0 // A
    },
    {
        q: "Sudut pandang di mana penulis serba tahu segala perasaan dan pikiran tokoh disebut...",
        opts: ["Orang pertama pelaku utama", "Orang pertama pelaku sampingan", "Orang ketiga serba tahu", "Orang ketiga pengamat"],
        kunci: 2 // C
    },
    {
        q: "Pesan moral yang ingin disampaikan penulis kepada pembaca disebut...",
        opts: ["Tema", "Alur", "Penokohan", "Amanat"],
        kunci: 3 // D
    },
    {
        q: "Tahapan alur di mana konflik mulai memuncak disebut...",
        opts: ["Klimaks", "Anti-klimaks", "Resolusi", "Orientasi"],
        kunci: 0 // A
    },
    {
        q: "Puisi lama yang bersajak a-b-a-b dan terdiri dari empat baris disebut...",
        opts: ["Syair", "Gurindam", "Pantun", "Talibun"],
        kunci: 2 // C
    },
    {
        q: "Majas yang melebih-lebihkan sesuatu dari kenyataan sebenarnya adalah...",
        opts: ["Litotes", "Hiperbola", "Ironi", "Paradoks"],
        kunci: 1 // B
    },
    {
        q: "Tokoh yang berwatak jahat atau menentang tokoh utama disebut...",
        opts: ["Protagonis", "Tritagonis", "Antagonis", "Figuran"],
        kunci: 2 // C
    },
    {
        q: "Perbedaan utama antara cerpen dan novel terletak pada...",
        opts: ["Tema cerita", "Gaya bahasa", "Kompleksitas alur dan penokohan", "Nama pengarang"],
        kunci: 2 // C
    },
    {
        q: "Baris pertama dan kedua pada pantun disebut sebagai...",
        opts: ["Isi", "Sampiran", "Rima", "Bait"],
        kunci: 1 // B
    },
    {
        q: "Ungkapan 'Wajahnya bersinar seperti rembulan' menggunakan majas...",
        opts: ["Simile", "Metafora", "Personifikasi", "Metonimia"],
        kunci: 0 // A
    },
    {
        q: "Dalam menulis cerpen, teknik 'Show, Don't Tell' berarti...",
        opts: ["Menceritakan perasaan tokoh secara langsung", "Menunjukkan perasaan lewat tindakan dan dialog", "Menggunakan banyak kata sifat", "Menjelaskan watak tokoh di awal"],
        kunci: 1 // B
    },
    {
        q: "Puisi yang tidak terikat oleh aturan rima dan baris disebut...",
        opts: ["Puisi kontemporer", "Puisi lama", "Puisi bebas", "Mantra"],
        kunci: 2 // C
    },
    {
        q: "Konflik yang terjadi di dalam batin tokoh itu sendiri disebut...",
        opts: ["Konflik eksternal", "Konflik internal", "Konflik fisik", "Konflik sosial"],
        kunci: 1 // B
    },
    {
        q: "Kata konkret dalam puisi berfungsi untuk...",
        opts: ["Membingungkan pembaca", "Membangkitkan imajinasi pembaca", "Memperpanjang baris", "Menyembunyikan makna"],
        kunci: 1 // B
    },
    {
        q: "Alur yang menceritakan peristiwa dari masa kini kemudian kembali ke masa lalu disebut...",
        opts: ["Alur maju", "Alur mundur (Flashback)", "Alur campuran", "Alur linear"],
        kunci: 1 // B
    },
    {
        q: "Watak tokoh dapat digambarkan secara tidak langsung melalui, KECUALI...",
        opts: ["Dialog antar tokoh", "Tindakan tokoh", "Penjelasan langsung penulis", "Lingkungan tokoh"],
        kunci: 2 // C
    },
    {
        q: "Kalimat dalam novel: 'Angin berbisik memanggil namaku'. Majas yang digunakan adalah...",
        opts: ["Hiperbola", "Personifikasi", "Litotes", "Sarkasme"],
        kunci: 1 // B
    },
    {
        q: "Resolusi dalam sebuah cerita berisi...",
        opts: ["Pengenalan masalah", "Puncak masalah", "Penyelesaian masalah", "Pesan moral"],
        kunci: 2 // C
    },
    {
        q: "Karya sastra berbentuk prosa yang lebih pendek dari novel adalah...",
        opts: ["Roman", "Cerpen", "Drama", "Biografi"],
        kunci: 1 // B
    },
    {
        q: "Rima a-a-a-a biasanya terdapat pada puisi lama jenis...",
        opts: ["Pantun", "Syair", "Karmina", "Gurindam"],
        kunci: 1 // B
    },
    {
        q: "Sudut pandang 'Aku' dalam cerita menandakan penggunaan sudut pandang...",
        opts: ["Orang ketiga", "Orang kedua", "Orang pertama", "Campuran"],
        kunci: 2 // C
    },
    {
        q: "Latar suasana menggambarkan...",
        opts: ["Tempat kejadian", "Waktu kejadian", "Kondisi batin/situasi cerita", "Alat yang digunakan"],
        kunci: 2 // C
    },
    {
        q: "Apa yang dimaksud dengan 'Plot Twist'?",
        opts: ["Alur yang datar", "Akhir cerita yang terduga", "Pembalikan alur yang mengejutkan", "Cerita tanpa konflik"],
        kunci: 2 // C
    },
    // ... Tambahkan hingga 50-100 soal dengan pola serupa ...
    {
        q: "Manakah yang BUKAN termasuk unsur ekstrinsik karya sastra?",
        opts: ["Biografi pengarang", "Nilai sosial", "Penokohan", "Latar belakang sejarah"],
        kunci: 2 // C
    },
    {
        q: "Diksi dalam puisi adalah...",
        opts: ["Pemilihan kata yang tepat", "Pengaturan baris", "Gaya bercerita", "Amanat puisi"],
        kunci: 0 // A
    },
    {
        q: "Novel 'Laskar Pelangi' ditulis oleh...",
        opts: ["Tereliye", "Andrea Hirata", "Habiburrahman El Shirazy", "Dee Lestari"],
        kunci: 1 // B
    },
    {
        q: "Dialog dalam naskah drama disebut...",
        opts: ["Wawancang", "Kramagung", "Prolog", "Epilog"],
        kunci: 0 // A
    },
    {
        q: "Epilog biasanya terletak di bagian...",
        opts: ["Awal cerita", "Tengah cerita", "Akhir cerita", "Sebelum konflik"],
        kunci: 2 // C
    },
    {
        q: "Unsur intrinsik cerpen yang berhubungan dengan tempat, waktu, dan suasana terjadinya cerita disebut...",
        opts: ["Alur", "Latar (Setting)", "Tema", "Amanat"],
        kunci: 1 // B
    },
    {
        q: "Gaya bahasa yang membandingkan dua hal secara langsung dengan kata 'seperti', 'laksana', atau 'bak' adalah...",
        opts: ["Metafora", "Personifikasi", "Simile", "Hiperbola"],
        kunci: 2 // C
    },
    {
        q: "Bagian awal dalam struktur novel yang berisi pengenalan tokoh dan latar disebut...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Koda"],
        kunci: 0 // A
    },
    {
        q: "Sudut pandang di mana penulis serba tahu segala perasaan dan pikiran tokoh disebut...",
        opts: ["Orang pertama pelaku utama", "Orang pertama pelaku sampingan", "Orang ketiga serba tahu", "Orang ketiga pengamat"],
        kunci: 2 // C
    },
    {
        q: "Pesan moral yang ingin disampaikan penulis kepada pembaca disebut...",
        opts: ["Tema", "Alur", "Penokohan", "Amanat"],
        kunci: 3 // D
    },
    {
        q: "Tahapan alur di mana konflik mulai memuncak disebut...",
        opts: ["Klimaks", "Anti-klimaks", "Resolusi", "Orientasi"],
        kunci: 0 // A
    },
    {
        q: "Puisi lama yang bersajak a-b-a-b dan terdiri dari empat baris disebut...",
        opts: ["Syair", "Gurindam", "Pantun", "Talibun"],
        kunci: 2 // C
    },
    {
        q: "Majas yang melebih-lebihkan sesuatu dari kenyataan sebenarnya adalah...",
        opts: ["Litotes", "Hiperbola", "Ironi", "Paradoks"],
        kunci: 1 // B
    },
    {
        q: "Tokoh yang berwatak jahat atau menentang tokoh utama disebut...",
        opts: ["Protagonis", "Tritagonis", "Antagonis", "Figuran"],
        kunci: 2 // C
    },
    {
        q: "Perbedaan utama antara cerpen dan novel terletak pada...",
        opts: ["Tema cerita", "Gaya bahasa", "Kompleksitas alur dan penokohan", "Nama pengarang"],
        kunci: 2 // C
    },
    {
        q: "Baris pertama dan kedua pada pantun disebut sebagai...",
        opts: ["Isi", "Sampiran", "Rima", "Bait"],
        kunci: 1 // B
    },
    {
        q: "Ungkapan 'Wajahnya bersinar seperti rembulan' menggunakan majas...",
        opts: ["Simile", "Metafora", "Personifikasi", "Metonimia"],
        kunci: 0 // A
    },
    {
        q: "Dalam menulis cerpen, teknik 'Show, Don't Tell' berarti...",
        opts: ["Menceritakan perasaan tokoh secara langsung", "Menunjukkan perasaan lewat tindakan dan dialog", "Menggunakan banyak kata sifat", "Menjelaskan watak tokoh di awal"],
        kunci: 1 // B
    },
    {
        q: "Puisi yang tidak terikat oleh aturan rima dan baris disebut...",
        opts: ["Puisi kontemporer", "Puisi lama", "Puisi bebas", "Mantra"],
        kunci: 2 // C
    },
    {
        q: "Konflik yang terjadi di dalam batin tokoh itu sendiri disebut...",
        opts: ["Konflik eksternal", "Konflik internal", "Konflik fisik", "Konflik sosial"],
        kunci: 1 // B
    },
    {
        q: "Kata konkret dalam puisi berfungsi untuk...",
        opts: ["Membingungkan pembaca", "Membangkitkan imajinasi pembaca", "Memperpanjang baris", "Menyembunyikan makna"],
        kunci: 1 // B
    },
    {
        q: "Alur yang menceritakan peristiwa dari masa kini kemudian kembali ke masa lalu disebut...",
        opts: ["Alur maju", "Alur mundur (Flashback)", "Alur campuran", "Alur linear"],
        kunci: 1 // B
    },
    {
        q: "Watak tokoh dapat digambarkan secara tidak langsung melalui, KECUALI...",
        opts: ["Dialog antar tokoh", "Tindakan tokoh", "Penjelasan langsung penulis", "Lingkungan tokoh"],
        kunci: 2 // C
    },
    {
        q: "Kalimat dalam novel: 'Angin berbisik memanggil namaku'. Majas yang digunakan adalah...",
        opts: ["Hiperbola", "Personifikasi", "Litotes", "Sarkasme"],
        kunci: 1 // B
    },
    {
        q: "Resolusi dalam sebuah cerita berisi...",
        opts: ["Pengenalan masalah", "Puncak masalah", "Penyelesaian masalah", "Pesan moral"],
        kunci: 2 // C
    },
    {
        q: "Karya sastra berbentuk prosa yang lebih pendek dari novel adalah...",
        opts: ["Roman", "Cerpen", "Drama", "Biografi"],
        kunci: 1 // B
    },
    {
        q: "Rima a-a-a-a biasanya terdapat pada puisi lama jenis...",
        opts: ["Pantun", "Syair", "Karmina", "Gurindam"],
        kunci: 1 // B
    },
    {
        q: "Sudut pandang 'Aku' dalam cerita menandakan penggunaan sudut pandang...",
        opts: ["Orang ketiga", "Orang kedua", "Orang pertama", "Campuran"],
        kunci: 2 // C
    },
    {
        q: "Latar suasana menggambarkan...",
        opts: ["Tempat kejadian", "Waktu kejadian", "Kondisi batin/situasi cerita", "Alat yang digunakan"],
        kunci: 2 // C
    },
    {
        q: "Apa yang dimaksud dengan 'Plot Twist'?",
        opts: ["Alur yang datar", "Akhir cerita yang terduga", "Pembalikan alur yang mengejutkan", "Cerita tanpa konflik"],
        kunci: 2 // C
    },
    {
        q: "Manakah yang BUKAN termasuk unsur ekstrinsik karya sastra?",
        opts: ["Biografi pengarang", "Nilai sosial", "Penokohan", "Latar belakang sejarah"],
        kunci: 2 // C
    },
    {
        q: "Diksi dalam puisi adalah...",
        opts: ["Pemilihan kata yang tepat", "Pengaturan baris", "Gaya bercerita", "Amanat puisi"],
        kunci: 0 // A
    },
    {
        q: "Novel 'Laskar Pelangi' ditulis oleh...",
        opts: ["Tereliye", "Andrea Hirata", "Habiburrahman El Shirazy", "Dee Lestari"],
        kunci: 1 // B
    },
    {
        q: "Dialog dalam naskah drama disebut...",
        opts: ["Wawancang", "Kramagung", "Prolog", "Epilog"],
        kunci: 0 // A
    },
    {
        q: "Epilog biasanya terletak di bagian...",
        opts: ["Awal cerita", "Tengah cerita", "Akhir cerita", "Sebelum konflik"],
        kunci: 2 // C
    },
    // --- AWAL 200 SOAL TAMBAHAN ---
    {
        q: "Teknik menulis yang menggambarkan peristiwa masa lalu untuk menjelaskan situasi sekarang disebut...",
        opts: ["Flashforward", "Foreshadowing", "Flashback", "Red Herring"],
        kunci: 2 // C
    },
    {
        q: "Tokoh yang mengalami perubahan watak atau kepribadian sepanjang cerita disebut tokoh...",
        opts: ["Dinamis", "Statis", "Prototipe", "Antagonis"],
        kunci: 0 // A
    },
    {
        q: "Puisi yang terdiri dari 14 baris dengan pola rima tertentu disebut...",
        opts: ["Soneta", "Ode", "Elegi", "Epigram"],
        kunci: 0 // A
    },
    {
        q: "Majas yang menggunakan perbandingan implisit tanpa kata 'seperti' atau 'bagai' adalah...",
        opts: ["Simile", "Metafora", "Personifikasi", "Alegori"],
        kunci: 1 // B
    },
    {
        q: "Bagian cerpen yang memperkenalkan tokoh, latar, dan situasi awal disebut...",
        opts: ["Komplikasi", "Orientasi", "Koda", "Evaluasi"],
        kunci: 1 // B
    },
    {
        q: "Gaya bahasa yang menyatakan sesuatu dengan cara berlawanan dari kenyataan untuk menyindir adalah...",
        opts: ["Hiperbola", "Ironi", "Personifikasi", "Metafora"],
        kunci: 1 // B
    },
    {
        q: "Unsur pembangun cerita yang menunjukkan urutan peristiwa adalah...",
        opts: ["Tema", "Alur", "Latar", "Amanat"],
        kunci: 1 // B
    },
    {
        q: "Dalam sudut pandang orang ketiga terbatas, penulis mengetahui...",
        opts: ["Semua hal tentang semua tokoh", "Hanya pikiran dan perasaan satu tokoh", "Hanya peristiwa yang terlihat dari luar", "Pikiran pembaca saja"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang meniru suara, seperti 'guguk' atau 'deru', disebut...",
        opts: ["Aliterasi", "Asonansi", "Onomatope", "Personifikasi"],
        kunci: 2 // C
    },
    {
        q: "Nilai-nilai yang terkandung dalam sebuah cerita dan menjadi dasar pengembangan alur adalah...",
        opts: ["Amanat", "Tema", "Latar", "Alur"],
        kunci: 1 // B
    },
    {
        q: "Cerpen yang fokus pada perjalanan dan perkembangan karakter utama dari awal hingga akhir cerita disebut...",
        opts: ["Cerpen liris", "Cerpen plot", "Cerpen karakter", "Cerpen eksperimental"],
        kunci: 2 // C
    },
    {
        q: "Puisi yang mengungkapkan rasa duka cita atau kesedihan disebut...",
        opts: ["Ode", "Elegi", "Satire", "Epigram"],
        kunci: 1 // B
    },
    {
        q: "Majas 'Gedung tinggi itu menjulang langit' termasuk dalam kategori...",
        opts: ["Hiperbola", "Metafora", "Litotes", "Personifikasi"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari novel yang berfungsi sebagai penutup cerita, seringkali menjelaskan nasib tokoh-tokoh di masa depan adalah...",
        opts: ["Prolog", "Epilog", "Klimaks", "Konflik"],
        kunci: 1 // B
    },
    {
        q: "Teknik penulisan di mana penulis memberikan petunjuk atau isyarat tentang peristiwa yang akan terjadi kemudian disebut...",
        opts: ["Flashback", "Foreshadowing", "Red Herring", "Plot Twist"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata 'bunda' untuk menggantikan 'ibu' dalam puisi adalah contoh dari...",
        opts: ["Diksi", "Imaji", "Rima", "Simbol"],
        kunci: 0 // A
    },
    {
        q: "Konflik antara tokoh utama dengan tokoh lain atau dengan masyarakat disebut konflik...",
        opts: ["Internal", "Eksternal fisik", "Eksternal sosial", "Eksternal alam"],
        kunci: 2 // C
    },
    {
        q: "Tokoh yang hanya muncul sekali atau beberapa kali dan tidak memiliki pengaruh signifikan terhadap alur disebut...",
        opts: ["Protagonis", "Antagonis", "Tritagonis", "Figuran"],
        kunci: 3 // D
    },
    {
        q: "Struktur puisi yang mengacu pada pengaturan baris dalam bait disebut...",
        opts: ["Rima", "Ritme", "Strofa", "Diksi"],
        kunci: 2 // C
    },
    {
        q: "Novel yang alurnya tidak berurutan, melompat-lompat antara masa kini, masa lalu, dan masa depan disebut novel dengan alur...",
        opts: ["Maju", "Mundur", "Campuran", "Spiral"],
        kunci: 2 // C
    },
    {
        q: "Majas yang menggunakan kata-kata yang melemahkan atau merendahkan kenyataan adalah...",
        opts: ["Hiperbola", "Litotes", "Ironi", "Sarkasme"],
        kunci: 1 // B
    },
    {
        q: "Pesan atau nilai-nilai yang terkandung dalam puisi seringkali tersirat melalui...",
        opts: ["Rima yang jelas", "Amanat yang eksplisit", "Simbol dan imej", "Jumlah baris yang tetap"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis cerpen, 'inciting incident' adalah...",
        opts: ["Akhir dari cerita", "Peristiwa yang memicu konflik utama", "Pengenalan tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Puisi yang ditulis untuk memuji atau mengagumi sesuatu atau seseorang disebut...",
        opts: ["Elegi", "Satire", "Ode", "Ballad"],
        kunci: 2 // C
    },
    {
        q: "Majas 'Tangan malam menyentuh keningmu' termasuk dalam kategori...",
        opts: ["Personifikasi", "Simile", "Metafora", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Gaya penulisan yang menekankan pada aliran kesadaran tokoh utama, seringkali dengan kalimat yang panjang dan tidak terstruktur adalah...",
        opts: ["Stream of consciousness", "Minimalisme", "Magical realism", "Surrealisme"],
        kunci: 0 // A
    },
    {
        q: "Latar yang menggambarkan kondisi sosial, ekonomi, dan budaya masyarakat dalam cerita disebut latar...",
        opts: ["Tempat", "Waktu", "Suasana", "Sosial"],
        kunci: 3 // D
    },
    {
        q: "Pengulangan konsonan awal yang sama dalam beberapa kata yang berdekatan disebut...",
        opts: ["Asonansi", "Aliterasi", "Onomatope", "Repetisi"],
        kunci: 1 // B
    },
    {
        q: "Karakteristik utama cerpen adalah...",
        opts: ["Alur yang sangat kompleks", "Tokoh yang sangat banyak", "Fokus pada satu konflik utama", "Waktu cerita yang berlangsung bertahun-tahun"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menggabungkan elemen realitas dengan elemen magis atau supernatural yang dianggap biasa oleh karakter adalah...",
        opts: ["Fantasi", "Realisme Magis", "Science Fiction", "Horor"],
        kunci: 1 // B
    },
    {
        q: "Majas yang mengganti nama suatu benda dengan nama benda lain yang memiliki fungsi serupa adalah...",
        opts: ["Metonimia", "Sinekdoke", "Personifikasi", "Alegori"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan puisi, 'enjambment' adalah...",
        opts: ["Pengulangan kata di awal baris", "Pengulangan kata di akhir baris", "Kelanjutan kalimat dari satu baris ke baris berikutnya tanpa jeda", "Penggunaan rima yang sama"],
        kunci: 2 // C
    },
    {
        q: "Tema yang muncul di seluruh bagian cerita dan menjadi inti dari karya sastra disebut tema...",
        opts: ["Mayor", "Minor", "Sekunder", "Tersier"],
        kunci: 0 // A
    },
    {
        q: "Tokoh yang berada di antara protagonis dan antagonis, seringkali memiliki watak yang kompleks dan berubah-ubah disebut...",
        opts: ["Figuran", "Tritagonis", "Anti-hero", "Foil"],
        kunci: 1 // B
    },
    {
        q: "Puisi yang menceritakan kisah heroik atau legenda disebut...",
        opts: ["Epigram", "Elegi", "Epik", "Ode"],
        kunci: 2 // C
    },
    {
        q: "Majas 'Matanya adalah bintang di kegelapan malam' termasuk dalam kategori...",
        opts: ["Simile", "Metafora", "Personifikasi", "Hiperbola"],
        kunci: 1 // B
    },
    {
        q: "Bagian dari alur yang menunjukkan penurunan ketegangan setelah klimaks disebut...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Falling Action"],
        kunci: 3 // D
    },
    {
        q: "Teknik menulis yang memberikan petunjuk palsu untuk menyesatkan pembaca dari kebenaran sebenarnya disebut...",
        opts: ["Foreshadowing", "Red Herring", "Chekhov's Gun", "Plot Twist"],
        kunci: 1 // B
    },
    {
        q: "Pengulangan vokal yang sama dalam beberapa kata yang berdekatan disebut...",
        opts: ["Aliterasi", "Asonansi", "Onomatope", "Konsonansi"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi penulisan karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Latar belakang pengarang", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang ditulis dalam bentuk surat, diary, atau dokumen lain disebut novel...",
        opts: ["Epistoler", "Fiksi ilmiah", "Gothik", "Pahlawan super"],
        kunci: 0 // A
    },
    {
        q: "Majas yang menggunakan pernyataan yang bertentangan dengan kenyataan untuk mengekspresikan kebenaran yang lebih dalam adalah...",
        opts: ["Paradoks", "Ironi", "Sarkasme", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam puisi, 'imej auditori' adalah imej yang ditangkap melalui...",
        opts: ["Penglihatan", "Pendengaran", "Penciuman", "Perabaan"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata yang memiliki makna konotasi yang kuat dalam puisi berfungsi untuk...",
        opts: ["Memperjelas makna harfiah", "Menciptakan suasana dan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Karakteristik utama novel dibandingkan dengan cerpen adalah...",
        opts: ["Fokus pada satu peristiwa", "Jumlah tokoh yang terbatas", "Alur yang sederhana", "Kompleksitas plot dan pengembangan karakter yang mendalam"],
        kunci: 3 // D
    },
    {
        q: "Tokoh yang diciptakan untuk menonjolkan karakteristik tokoh utama melalui kontras disebut...",
        opts: ["Antagonis", "Protagonis", "Foil", "Tritagonis"],
        kunci: 2 // C
    },
    {
        q: "Puisi yang menggunakan bahasa satir atau sindiran untuk mengkritik orang atau keadaan disebut...",
        opts: ["Elegi", "Ode", "Satire", "Ballad"],
        kunci: 2 // C
    },
    {
        q: "Majas 'Bunga-bunga di taman menari indah ditiup angin' termasuk dalam kategori...",
        opts: ["Personifikasi", "Simile", "Metafora", "Litotes"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan bagaimana tokoh mencoba menyelesaikan konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Koda"],
        kunci: 1 // B
    },
    {
        q: "Dalam sudut pandang orang kedua, penulis menggunakan kata ganti...",
        opts: ["Saya", "Dia", "Kamu", "Mereka"],
        kunci: 2 // C
    },
    {
        q: "Penggunaan objek atau tindakan yang mewakili ide atau konsep yang lebih abstrak disebut...",
        opts: ["Simbol", "Metafora", "Simile", "Alegori"],
        kunci: 0 // A
    },
    {
        q: "Novel yang mengambil latar belakang sejarah dan memasukkan tokoh fiksi ke dalam peristiwa nyata disebut novel...",
        opts: ["Sejarah", "Biografi", "Autobiografi", "Fiksi ilmiah"],
        kunci: 0 // A
    },
    {
        q: "Majas yang menggunakan pernyataan yang singkat dan padat namun mengandung makna yang luas adalah...",
        opts: ["Epigram", "Paradoks", "Hiperbola", "Ironi"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan puisi, 'caesura' adalah...",
        opts: ["Jeda di tengah baris puisi", "Akhir dari sebuah bait", "Pengulangan kata", "Penggunaan rima"],
        kunci: 0 // A
    },
    {
        q: "Gaya bahasa yang membandingkan dua hal yang berlawanan sifatnya dalam satu kalimat adalah...",
        opts: ["Paradoks", "Antitesis", "Ironi", "Sarkasme"],
        kunci: 1 // B
    },
    {
        q: "Kritik sastra yang menganalisis karya sastra berdasarkan struktur internalnya tanpa melihat faktor eksternal disebut pendekatan...",
        opts: ["Biografi", "Sosiologi sastra", "Strukturalisme", "Psikologi"],
        kunci: 2 // C
    },
    {
        q: "Novel yang berfokus pada perkembangan psikologis dan moral tokoh utama dari masa kanak-kanak hingga dewasa disebut novel...",
        opts: ["Pendidikan (Bildungsroman)", "Sejarah", "Fiksi ilmiah", "Gothik"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Dia hanya makan sebutir nasi' termasuk dalam kategori...",
        opts: ["Hiperbola", "Litotes", "Ironi", "Metafora"],
        kunci: 1 // B
    },
    {
        q: "Dalam penulisan cerpen, 'cliffhanger' adalah...",
        opts: ["Akhir cerita yang memuaskan", "Akhir cerita yang menegangkan dan tidak pasti", "Pengenalan konflik", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Pengulangan kata atau frasa di awal baris-baris berturut-turut dalam puisi disebut...",
        opts: ["Anafora", "Epifora", "Repetisi", "Aliterasi"],
        kunci: 0 // A
    },
    {
        q: "Unsur intrinsik yang berkaitan dengan cara penulis mengungkapkan ide dan gagasan dalam karya sastra adalah...",
        opts: ["Gaya bahasa", "Amanat", "Tema", "Alur"],
        kunci: 0 // A
    },
    {
        q: "Novel yang menampilkan kehidupan kelas menengah dengan realistis dan seringkali dengan sentuhan humor atau ironi disebut novel...",
        opts: ["Realisme", "Romantisisme", "Modernisme", "Postmodernisme"],
        kunci: 0 // A
    },
    {
        q: "Majas yang mengganti nama suatu benda dengan nama bagian dari benda tersebut adalah...",
        opts: ["Metonimia", "Sinekdoke", "Personifikasi", "Alegori"],
        kunci: 1 // B
    },
    {
        q: "Dalam puisi, 'meter' mengacu pada...",
        opts: ["Pengulangan kata", "Pola rima", "Pola ritme atau tekanan suku kata", "Jumlah baris dalam bait"],
        kunci: 2 // C
    },
    {
        q: "Tokoh protagonis yang memiliki kekurangan atau sifat negatif yang signifikan disebut...",
        opts: ["Antagonis", "Anti-hero", "Foil", "Tritagonis"],
        kunci: 1 // B
    },
    {
        q: "Puisi yang bercerita tentang kehidupan masyarakat pedalaman atau pedesaan dengan bahasa yang sederhana disebut...",
        opts: ["Puisi liris", "Puisi naratif", "Puisi realisme", "Puisi modernis"],
        kunci: 2 // C
    },
    {
        q: "Majas 'Mulutmu harimaumu' termasuk dalam kategori...",
        opts: ["Peribahasa", "Metafora", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari alur yang menunjukkan awal munculnya konflik atau masalah disebut...",
        opts: ["Orientasi", "Komplikasi awal", "Klimaks", "Resolusi"],
        kunci: 1 // B
    },
    {
        q: "Teknik menulis yang menggambarkan pikiran, perasaan, dan kesadaran tokoh secara langsung dan tidak terfilter adalah...",
        opts: ["Narasi omnisien", "Stream of consciousness", "Dialog", "Deskripsi"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata yang memiliki kemiripan bunyi dalam puisi berfungsi untuk...",
        opts: ["Membuat puisi sulit dibaca", "Menciptakan efek musikalitas dan keindahan", "Memperpanjang baris puisi", "Menyembunyikan makna"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi pembaca terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Latar belakang budaya pembaca", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menggambarkan kehidupan di masa depan dengan perkembangan teknologi dan ilmu pengetahuan disebut novel...",
        opts: ["Fantasi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 1 // B
    },
    {
        q: "Majas yang menggunakan kata-kata yang lembut atau halus untuk menggantikan kata-kata yang kasar atau tidak menyenangkan adalah...",
        opts: ["Eufemisme", "Litotes", "Ironi", "Sarkasme"],
        kunci: 0 // A
    },
    {
        q: "Dalam puisi, 'konkret' adalah kata-kata yang merujuk pada...",
        opts: ["Ide abstrak", "Perasaan", "Benda atau fenomena yang dapat ditangkap indera", "Gagasan filosofis"],
        kunci: 2 // C
    },
    {
        q: "Gaya penulisan yang menggunakan kalimat-kalimat pendek, deskripsi minimalis, dan fokus pada permukaan cerita tanpa eksplorasi psikologis mendalam adalah...",
        opts: ["Minimalisme", "Maksimalisme", "Stream of consciousness", "Realisme magis"],
        kunci: 0 // A
    },
    {
        q: "Karakteristik utama puisi lama adalah...",
        opts: ["Bentuk bebas", "Terikat pada aturan rima, ritme, dan jumlah baris", "Menggunakan bahasa sehari-hari", "Fokus pada perasaan pribadi"],
        kunci: 1 // B
    },
    {
        q: "Majas 'Tangannya memegang seluruh dunia' termasuk dalam kategori...",
        opts: ["Hiperbola", "Litotes", "Ironi", "Metafora"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan kesimpulan atau pesan moral di akhir cerita disebut...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam sudut pandang orang ketiga objektif, penulis mengetahui...",
        opts: ["Semua hal tentang semua tokoh", "Pikiran dan perasaan semua tokoh", "Hanya peristiwa yang dapat diamati dari luar", "Pikiran pembaca saja"],
        kunci: 2 // C
    },
    {
        q: "Penggunaan gambaran visual yang kuat dalam puisi untuk menciptakan gambaran mental bagi pembaca disebut...",
        opts: ["Imej auditori", "Imej visual", "Imej kinestetik", "Imej olfaktori"],
        kunci: 1 // B
    },
    {
        q: "Novel yang berfokus pada misteri atau kejahatan dan usaha tokoh untuk memecahkannya disebut novel...",
        opts: ["Detektif", "Romansa", "Fiksi ilmiah", "Sejarah"],
        kunci: 0 // A
    },
    {
        q: "Majas yang menggunakan perbandingan antara dua hal yang berbeda secara keseluruhan untuk menyampaikan makna yang lebih dalam adalah...",
        opts: ["Metafora", "Simile", "Alegori", "Personifikasi"],
        kunci: 2 // C
    },
    {
        q: "Dalam penulisan puisi, 'ritme' adalah...",
        opts: ["Pengulangan kata", "Pola rima", "Alunan atau irama yang dihasilkan dari pengucapan puisi", "Jumlah baris dalam bait"],
        kunci: 2 // C
    },
    {
        q: "Kritik sastra yang menganalisis karya sastra berdasarkan kondisi sosial, ekonomi, dan politik saat karya itu dibuat disebut pendekatan...",
        opts: ["Biografi", "Sosiologi sastra", "Strukturalisme", "Psikologi"],
        kunci: 1 // B
    },
    {
        q: "Tokoh yang tidak mengalami perubahan watak atau kepribadian sepanjang cerita disebut tokoh...",
        opts: ["Dinamis", "Statis", "Prototipe", "Antagonis"],
        kunci: 1 // B
    },
    {
        q: "Puisi yang mengekspresikan perasaan cinta atau kekaguman terhadap seseorang atau sesuatu disebut...",
        opts: ["Elegi", "Ode", "Romansa", "Satire"],
        kunci: 2 // C
    },
    {
        q: "Majas 'Habis gelap terbitlah terang' termasuk dalam kategori...",
        opts: ["Paradoks", "Antitesis", "Ironi", "Sarkasme"],
        kunci: 1 // B
    },
    {
        q: "Bagian dari alur yang menunjukkan peningkatan ketegangan menuju puncak konflik disebut...",
        opts: ["Orientasi", "Rising Action", "Resolusi", "Falling Action"],
        kunci: 1 // B
    },
    {
        q: "Teknik menulis yang menggambarkan peristiwa masa depan sebelum terjadi dalam kronologi cerita disebut...",
        opts: ["Flashback", "Foreshadowing", "Flashforward", "Red Herring"],
        kunci: 2 // C
    },
    {
        q: "Pengulangan kata atau frasa di akhir baris-baris berturut-turut dalam puisi disebut...",
        opts: ["Anafora", "Epifora", "Repetisi", "Aliterasi"],
        kunci: 1 // B
    },
    {
        q: "Unsur intrinsik yang berkaitan dengan pesan atau nilai-nilai yang ingin disampaikan penulis adalah...",
        opts: ["Gaya bahasa", "Amanat", "Tema", "Alur"],
        kunci: 1 // B
    },
    {
        q: "Novel yang menampilkan kehidupan bangsawan atau keluarga terpandang dengan fokus pada drama emosional dan hubungan sosial disebut novel...",
        opts: ["Gothik", "Roman", "Detektif", "Fiksi ilmiah"],
        kunci: 1 // B
    },
    {
        q: "Majas 'Dia meminum segelas kehidupan' termasuk dalam kategori...",
        opts: ["Metafora", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'Chekhov's Gun' adalah prinsip yang menyatakan bahwa...",
        opts: ["Setiap senjata yang muncul harus ditembakkan", "Setiap detail yang disebutkan harus penting untuk alur", "Tokoh antagonis selalu kalah", "Cerita harus memiliki akhir yang bahagia"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang menimbulkan kesan rasa dalam puisi disebut...",
        opts: ["Imej auditori", "Imej visual", "Imej kinestetik", "Imej gustatori"],
        kunci: 3 // D
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi gaya penulisan pengarang adalah...",
        opts: ["Alur cerita", "Penokohan", "Latar belakang pendidikan pengarang", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menggabungkan elemen horor, misteri, dan romansa dengan latar bangunan tua yang angker disebut novel...",
        opts: ["Gothik", "Roman", "Detektif", "Fiksi ilmiah"],
        kunci: 0 // A
    },
    {
        q: "Majas yang menggunakan kata-kata yang bernada sinis dan menyakitkan untuk mengejek adalah...",
        opts: ["Ironi", "Sarkasme", "Satire", "Paradoks"],
        kunci: 1 // B
    },
    {
        q: "Dalam puisi, 'abstrak' adalah kata-kata yang merujuk pada...",
        opts: ["Benda atau fenomena yang dapat ditangkap indera", "Perasaan, pikiran, atau ide", "Warna dan bentuk", "Suara dan bunyi"],
        kunci: 1 // B
    },
    {
        q: "Gaya penulisan yang menggabungkan berbagai genre, gaya, dan narasi yang seringkali bertentangan adalah...",
        opts: ["Minimalisme", "Postmodernisme", "Modernisme", "Realisme"],
        kunci: 1 // B
    },
    {
        q: "Karakteristik utama puisi modern adalah...",
        opts: ["Bentuk bebas", "Terikat pada aturan rima, ritme, dan jumlah baris", "Menggunakan bahasa kuno", "Fokus pada cerita rakyat"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Hatinya adalah es yang beku' termasuk dalam kategori...",
        opts: ["Simile", "Metafora", "Personifikasi", "Hiperbola"],
        kunci: 1 // B
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik dan nasib akhir tokoh adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'character arc' adalah...",
        opts: ["Deskripsi fisik tokoh", "Perjalanan transformasi atau perubahan tokoh sepanjang cerita", "Hubungan antar tokoh", "Latar belakang keluarga tokoh"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang menimbulkan kesan gerakan atau gerak dalam puisi disebut...",
        opts: ["Imej auditori", "Imej visual", "Imej kinestetik", "Imej olfaktori"],
        kunci: 2 // C
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi tema karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Latar belakang sejarah saat karya itu dibuat", "Gaya bahasa"],
        kunci: 2 // C
    },
    {
        q: "Novel yang berfokus pada hubungan romantis antara dua tokoh utama disebut novel...",
        opts: ["Detektif", "Romansa", "Fiksi ilmiah", "Sejarah"],
        kunci: 1 // B
    },
    {
        q: "Majas yang menggunakan perbandingan antara dua hal yang tidak sebanding untuk menunjukkan ketidakadilan atau kekonyolan adalah...",
        opts: ["Ironi", "Sarkasme", "Satire", "Paradoks"],
        kunci: 2 // C
    },
    {
        q: "Dalam penulisan puisi, 'persona' adalah...",
        opts: ["Orang yang membaca puisi", "Tokoh atau suara yang diadopsi penyair dalam puisi", "Penulis puisi yang sebenarnya", "Gaya bahasa dalam puisi"],
        kunci: 1 // B
    },
    {
        q: "Kritik sastra yang menganalisis karya sastra berdasarkan psikologi pengarang atau tokoh-tokohnya disebut pendekatan...",
        opts: ["Biografi", "Sosiologi sastra", "Strukturalisme", "Psikologi"],
        kunci: 3 // D
    },
    {
        q: "Tokoh yang mewakili jenis atau kelompok tertentu dalam masyarakat disebut tokoh...",
        opts: ["Dinamis", "Statis", "Prototipe", "Antagonis"],
        kunci: 2 // C
    },
    {
        q: "Puisi yang menceritakan kisah percintaan atau petualangan ksatria disebut...",
        opts: ["Epigram", "Elegi", "Balada", "Ode"],
        kunci: 2 // C
    },
    {
        q: "Majas 'Langit menangis melihat kesedihannya' termasuk dalam kategori...",
        opts: ["Personifikasi", "Simile", "Metafora", "Litotes"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak ketegangan konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis cerpen, 'in media res' adalah teknik memulai cerita...",
        opts: ["Dari awal kehidupan tokoh", "Dari tengah-tengah aksi atau konflik", "Dari akhir cerita", "Dengan deskripsi latar yang panjang"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang menimbulkan kesan bau dalam puisi disebut...",
        opts: ["Imej auditori", "Imej visual", "Imej kinestetik", "Imej olfaktori"],
        kunci: 3 // D
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi penjualan karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Strategi pemasaran penerbit", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang mengangkat isu-isu lingkungan dan dampaknya terhadap kehidupan manusia disebut novel...",
        opts: ["Ekokritik", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Bumi ini adalah panggung sandiwara' termasuk dalam kategori...",
        opts: ["Metafora", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan novel, 'subplot' adalah...",
        opts: ["Alur utama cerita", "Alur sekunder yang mendukung alur utama", "Karakter utama", "Latar utama cerita"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang menimbulkan kesan sentuhan atau perabaan dalam puisi disebut...",
        opts: ["Imej auditori", "Imej visual", "Imej taktil", "Imej olfaktori"],
        kunci: 2 // C
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi penerimaan karya sastra oleh masyarakat adalah...",
        opts: ["Alur cerita", "Penokohan", "Norma dan nilai sosial masyarakat", "Gaya bahasa"],
        kunci: 2 // C
    },
    {
        q: "Novel yang mengeksplorasi identitas gender dan seksualitas tokoh-tokohnya disebut novel...",
        opts: ["Queer", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Dia adalah singa di medan perang' termasuk dalam kategori...",
        opts: ["Simile", "Metafora", "Personifikasi", "Hiperbola"],
        kunci: 1 // B
    },
    {
        q: "Bagian dari struktur cerita yang memberikan latar belakang informasi penting untuk memahami cerita disebut...",
        opts: ["Orientasi", "Komplikasi", "Eksposisi", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narrative hook' adalah...",
        opts: ["Akhir cerita yang mengejutkan", "Bagian awal cerita yang bertujuan menarik perhatian pembaca", "Deskripsi tokoh utama", "Penjelasan tema"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menciptakan makna yang ambigu", "Menyampaikan makna harfiah atau langsung", "Menyembunyikan pesan", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi kritis terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Tren kritik sastra saat ini", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan di dunia fantasi dengan sihir, makhluk mitologis, dan petualangan disebut novel...",
        opts: ["Fantasi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Waktu adalah uang' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'twist ending' adalah...",
        opts: ["Akhir cerita yang sudah diprediksi", "Akhir cerita yang mengejutkan dan mengubah pemahaman pembaca", "Akhir cerita yang bahagia", "Akhir cerita yang sedih"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotasi dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah atau langsung", "Menciptakan makna yang lebih dalam, emosional, atau simbolis", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi adaptasi karya sastra ke dalam bentuk lain (film, drama) adalah...",
        opts: ["Alur cerita", "Penokohan", "Minat industri hiburan", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang mengangkat isu-isu politik dan kekuasaan disebut novel...",
        opts: ["Politik", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Buku adalah jendela dunia' termasuk dalam kategori...",
        opts: ["Metafora", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penurunan ketegangan setelah klimaks adalah...",
        opts: ["Orientasi", "Komplikasi", "Falling Action", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'protagonist' adalah...",
        opts: ["Tokoh utama yang menjadi fokus cerita", "Tokoh yang menentang tokoh utama", "Tokoh pendukung", "Tokoh yang hanya muncul sekali"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi dan makna yang berlapis", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi pengajaran karya sastra di sekolah adalah...",
        opts: ["Alur cerita", "Penokohan", "Kurikulum pendidikan", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang mengeksplorasi dampak teknologi terhadap masyarakat dan individu disebut novel...",
        opts: ["Tekno-thriller", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Cinta adalah buta' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'resolution' adalah...",
        opts: ["Pengenalan masalah", "Puncak konflik", "Penyelesaian masalah", "Pesan moral"],
        kunci: 2 // C
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah atau langsung", "Menciptakan makna yang lebih dalam dan artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi terjemahan karya sastra ke dalam bahasa lain adalah...",
        opts: ["Alur cerita", "Penokohan", "Perbedaan budaya dan bahasa", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan di masa depan dengan fokus pada dampak lingkungan adalah...",
        opts: ["Dystopia", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Pendidikan adalah investasi masa depan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Inciting Incident", "Klimaks", "Resolusi"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'antagonist' adalah...",
        opts: ["Tokoh utama yang menjadi fokus cerita", "Tokoh yang menentang tokoh utama", "Tokoh pendukung", "Tokoh yang hanya muncul sekali"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dan konotatif secara bersamaan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang tunggal", "Menciptakan makna yang berlapis dan kompleks", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi popularitas karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Ulasan dan rekomendasi pembaca", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan di masyarakat dengan semua aspeknya secara detail adalah...",
        opts: "Novel realisme",
        opts: ["Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kematian adalah tidur yang panjang' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'climax' adalah...",
        opts: ["Pengenalan masalah", "Puncak konflik", "Penyelesaian masalah", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah atau langsung", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi kanonisasi karya sastra (dianggap klasik) adalah...",
        opts: ["Alur cerita", "Penokohan", "Pengakuan dari akademisi dan kritikus sastra", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang mengeksplorasi kehidupan dan budaya suatu daerah atau etnis tertentu adalah...",
        opts: ["Novel regional", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah perjalanan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan kesimpulan atau pesan moral adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'supporting character' adalah...",
        opts: ["Tokoh utama yang menjadi fokus cerita", "Tokoh yang menentang tokoh utama", "Tokoh pendukung yang membantu pengembangan alur atau tokoh utama", "Tokoh yang hanya muncul sekali"],
        kunci: 2 // C
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi penghargaan sastra untuk sebuah karya adalah...",
        opts: ["Alur cerita", "Penokohan", "Kriteria dewan juri", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan di dunia alternatif dengan sejarah yang berbeda adalah...",
        opts: ["Alternate History", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Tawa adalah obat terbaik' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi pembacaan ulang karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Perubahan interpretasi pembaca seiring waktu", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang mengeksplorasi konsep waktu dan realitas secara non-linear adalah...",
        opts: ["Novel eksperimental", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Pengetahuan adalah kekuatan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memperkenalkan tokoh dan latar adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 0 // A
    },
    {
        q: "Dalam menulis novel, 'setting' adalah...",
        opts: ["Alur cerita", "Latar tempat, waktu, dan suasana", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi diskursus akademis tentang karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Perkembangan teori sastra", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada perkembangan psikologis tokoh adalah...",
        opts: ["Novel psikologis", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Perjuangan adalah kunci kesuksesan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi reproduksi karya sastra (cetakan ulang, e-book) adalah...",
        opts: ["Alur cerita", "Penokohan", "Perkembangan teknologi penerbitan", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek religius atau spiritual adalah...",
        opts: ["Novel religius", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kesabaran adalah emas' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan usaha tokoh menyelesaikan konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna filosofis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang dangkal", "Mengeksplorasi pertanyaan tentang kehidupan dan eksistensi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi feminis terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Perkembangan teori feminis", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek seksualitas adalah...",
        opts: ["Novel erotis", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kejujuran adalah mata uang' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi postkolonial terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Sejarah kolonial dan dampaknya", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada perjalanan spiritual tokoh adalah...",
        opts: ["Novel spiritual", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kesehatan adalah harta' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi Marxis terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Struktur ekonomi dan kelas sosial", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek humor adalah...",
        opts: ["Novel komedi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Persahabatan adalah permata' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi psikoanalitik terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori psikoanalisis Freud", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek tragedi adalah...",
        opts: ["Novel tragedi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Keteguhan adalah batu karang' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi strukturalis terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori strukturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek misteri adalah...",
        opts: ["Novel misteri", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Harapan adalah cahaya dalam kegelapan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi dekonstruksi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori dekonstruksi Derrida", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek petualangan adalah...",
        opts: ["Novel petualangan", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kebaikan adalah pohon yang rindang' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi pembacaan dekat (close reading) terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Fokus pada teks itu sendiri", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek horor adalah...",
        opts: ["Novel horor", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Ketakutan adalah penjara' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi hermeneutika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori interpretasi dan pemahaman", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek aksi adalah...",
        opts: ["Novel aksi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kebebasan adalah angin' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi resepsi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Peran pembaca dalam menciptakan makna", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek thriller adalah...",
        opts: ["Novel thriller", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kemiskinan adalah belenggu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi formalis terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Fokus pada bentuk dan struktur karya", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek western adalah...",
        opts: ["Novel western", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kebencian adalah racun' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi new historicism terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara teks dan konteks historis", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek perkembangan anak adalah...",
        opts: ["Novel anak", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kebijaksanaan adalah pelita' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi cultural studies terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara teks dan praktik budaya", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek remaja adalah...",
        opts: ["Novel remaja", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Ketulusan adalah cermin' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi queer theory terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori tentang gender dan seksualitas", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek wanita adalah...",
        opts: ["Novel wanita", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kesetiaan adalah sahabat' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi ekokritik terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara teks dan lingkungan", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek militer adalah...",
        opts: ["Novel militer", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kedermawanan adalah mata air' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi postmodernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Skeptisisme terhadap narasi besar", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek bisnis adalah...",
        opts: ["Novel bisnis", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kepahlawanan adalah bintang' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi reader-response terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Peran pembaca dalam menciptakan makna", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek hukum adalah...",
        opts: ["Novel hukum", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kecerdasan adalah senjata' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi strukturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Fokus pada struktur dan sistem tanda", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek medis adalah...",
        opts: ["Novel medis", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Keteguhan hati adalah baja' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi poststrukturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Skeptisisme terhadap struktur yang stabil", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek musik adalah...",
        opts: ["Novel musik", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kecantikan adalah bunga' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi semiotika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Studi tentang tanda dan makna", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek seni adalah...",
        opts: ["Novel seni", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kebahagiaan adalah pelangi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi naratologi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Studi tentang struktur narasi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek olahraga adalah...",
        opts: ["Novel olahraga", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kekuatan adalah api' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi psikologi kognitif terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori tentang proses mental", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek kuliner adalah...",
        opts: ["Novel kuliner", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kemurahan hati adalah matahari' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai psikologi perkembangan terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori tentang perkembangan manusia", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek mode adalah...",
        opts: ["Novel mode", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Keadilan adalah timbangan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi psikologi sosial terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Teori tentang perilaku sosial", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek perjalanan adalah...",
        opts: ["Novel perjalanan", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Ketakutan adalah bayangan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi sosiologi sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan masyarakat", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek migrasi adalah...",
        opts: ["Novel migrasi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kecerdasan adalah cahaya' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi antropologi sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan budaya", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek diaspora adalah...",
        opts: ["Novel diaspora", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Ketulusan adalah air jernih' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai ekonomi sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan ekonomi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek identitas adalah...",
        opts: ["Novel identitas", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kesetiaan adalah kompas' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi hukum sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan hukum", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek memori adalah...",
        opts: ["Novel memori", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kebijaksanaan adalah penunjuk jalan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi etika sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan etika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek trauma adalah...",
        opts: ["Novel trauma", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kedermawanan adalah sumber kehidupan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretasi filsafat sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan filsafat", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek penyembuhan adalah...",
        opts: ["Novel penyembuhan", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Keteguhan hati adalah anugerah' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai teologi sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan teologi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek transformasi adalah...",
        opts: ["Novel transformasi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kecintaan adalah energi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai mistisisme sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan mistisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek pencerahan adalah...",
        opts: ["Novel pencerahan", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kesabaran adalah kunci' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai esoterisme sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan esoterisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek pencerahan spiritual adalah...",
        opts: ["Novel spiritual", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah misteri' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai okultisme sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan okultisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek metafisika adalah...",
        opts: ["Novel metafisika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kematian adalah awal' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai paranormal sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan paranormal", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek supernatural adalah...",
        opts: ["Novel supernatural", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah mimpi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai mitologi sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan mitologi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek mitologi adalah...",
        opts: ["Novel mitologi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah drama' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai legenda sastra terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan legenda", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek legenda adalah...",
        opts: ["Novel legenda", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah taman' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai cerita rakyat terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan cerita rakyat", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek cerita rakyat adalah...",
        opts: ["Novel cerita rakyat", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah buku' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dongeng terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dongeng", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dongeng adalah...",
        opts: ["Novel dongeng", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah lagu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai fabel terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan fabel", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek fabel adalah...",
        opts: ["Novel fabel", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah tarian' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai parabel terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan parabel", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek parabel adalah...",
        opts: ["Novel parabel", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah permainan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai alegori terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan alegori", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek alegori adalah...",
        opts: ["Novel alegori", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah puzzle' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai simbolisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan simbolisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek simbolisme adalah...",
        opts: ["Novel simbolisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah labirin' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai surealisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan surealisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek surealisme adalah...",
        opts: ["Novel surealisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ombak' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai ekspresionisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan ekspresionisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek ekspresionisme adalah...",
        opts: ["Novel ekspresionisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah sungai' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai impresionisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan impresionisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek impresionisme adalah...",
        opts: ["Novel impresionisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah jalan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai kubisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan kubisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek kubisme adalah...",
        opts: ["Novel kubisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah pertarungan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dadaisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dadaisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dadaisme adalah...",
        opts: ["Novel dadaisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ujian' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai futurisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan futurisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek futurisme adalah...",
        opts: ["Novel futurisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah anugerah' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai konstruktivisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan konstruktivisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek konstruktivisme adalah...",
        opts: ["Novel konstruktivisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah tanggung jawab' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dekonstruksi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dekonstruksi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dekonstruksi adalah...",
        opts: ["Novel dekonstruksi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah pilihan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai postmodernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan postmodernisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek postmodernisme adalah...",
        opts: ["Novel postmodernisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah petualangan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai modernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan modernisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek modernisme adalah...",
        opts: ["Novel modernisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah anugerah' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai romantisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan romantisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek romantisisme adalah...",
        opts: ["Novel romantisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah tugas' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai realisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan realisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek realisme adalah...",
        opts: ["Novel realisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah seni' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai naturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan naturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek naturalisme adalah...",
        opts: ["Novel naturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ilmu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai simbolisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan simbolisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek simbolisme adalah...",
        opts: ["Novel simbolisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah filosofi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai eksistensialisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan eksistensialisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek eksistensialisme adalah...",
        opts: ["Novel eksistensialisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah agama' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai absurdisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan absurdisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek absurdisme adalah...",
        opts: ["Novel absurdisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah politik' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai strukturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan strukturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek strukturalisme adalah...",
        opts: ["Novel strukturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ekonomi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai poststrukturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan poststrukturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek poststrukturalisme adalah...",
        opts: ["Novel poststrukturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah budaya' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai semiotika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan semiotika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek semiotika adalah...",
        opts: ["Novel semiotika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah teknologi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai hermeneutika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan hermeneutika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek hermeneutika adalah...",
        opts: ["Novel hermeneutika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah informasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai fenomenologi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan fenomenologi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek fenomenologi adalah...",
        opts: ["Novel fenomenologi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah komunikasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai pragmatisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan pragmatisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek pragmatisme adalah...",
        opts: ["Novel pragmatisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah hiburan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai utilitarianisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan utilitarianisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek utilitarianisme adalah...",
        opts: ["Novel utilitarianisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah bisnis' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai hedonisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan hedonisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek hedonisme adalah...",
        opts: ["Novel hedonisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah mode' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai narsisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan narsisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek narsisisme adalah...",
        opts: ["Novel narsisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah media sosial' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai materialisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan materialisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek materialisme adalah...",
        opts: ["Novel materialisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah merek' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai spiritualisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan spiritualisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek spiritualisme adalah...",
        opts: ["Novel spiritualisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah konsumsi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai mistisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan mistisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek mistisisme adalah...",
        opts: ["Novel mistisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kompetisi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai esoterisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan esoterisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek esoterisme adalah...",
        opts: ["Novel esoterisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah popularitas' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai okultisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan okultisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek okultisme adalah...",
        opts: ["Novel okultisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah citra' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai paranormal terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan paranormal", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek paranormal adalah...",
        opts: ["Novel paranormal", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah reputasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai metafisika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan metafisika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek metafisika adalah...",
        opts: ["Novel metafisika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah warisan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai supernatural terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan supernatural", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek supernatural adalah...",
        opts: ["Novel supernatural", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah prestasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai mitologi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan mitologi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek mitologi adalah...",
        opts: ["Novel mitologi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah pengakuan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai legenda terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan legenda", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek legenda adalah...",
        opts: ["Novel legenda", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kekuasaan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai cerita rakyat terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan cerita rakyat", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek cerita rakyat adalah...",
        opts: ["Novel cerita rakyat", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kekayaan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dongeng terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dongeng", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dongeng adalah...",
        opts: ["Novel dongeng", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kebahagiaan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai fabel terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan fabel", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek fabel adalah...",
        opts: ["Novel fabel", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah cinta' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai parabel terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan parabel", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek parabel adalah...",
        opts: ["Novel parabel", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah harapan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai alegori terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan alegori", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek alegori adalah...",
        opts: ["Novel alegori", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah impian' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai simbolisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan simbolisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek simbolisme adalah...",
        opts: ["Novel simbolisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah mimpi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai surealisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan surealisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek surealisme adalah...",
        opts: ["Novel surealisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah drama' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai ekspresionisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan ekspresionisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek ekspresionisme adalah...",
        opts: ["Novel ekspresionisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah taman' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai impresionisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan impresionisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek impresionisme adalah...",
        opts: ["Novel impresionisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah buku' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai kubisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan kubisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek kubisme adalah...",
        opts: ["Novel kubisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah lagu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dadaisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dadaisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dadaisme adalah...",
        opts: ["Novel dadaisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah tarian' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai futurisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan futurisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek futurisme adalah...",
        opts: ["Novel futurisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah permainan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai konstruktivisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan konstruktivisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek konstruktivisme adalah...",
        opts: ["Novel konstruktivisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah puzzle' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dekonstruksi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dekonstruksi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dekonstruksi adalah...",
        opts: ["Novel dekonstruksi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah labirin' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai postmodernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan postmodernisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek postmodernisme adalah...",
        opts: ["Novel postmodernisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ombak' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai modernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan modernisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek modernisme adalah...",
        opts: ["Novel modernisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah sungai' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai romantisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan romantisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek romantisisme adalah...",
        opts: ["Novel romantisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah jalan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai realisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan realisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek realisme adalah...",
        opts: ["Novel realisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah pertarungan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai naturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan naturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek naturalisme adalah...",
        opts: ["Novel naturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah seni' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai simbolisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan simbolisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek simbolisme adalah...",
        opts: ["Novel simbolisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ilmu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai eksistensialisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan eksistensialisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek eksistensialisme adalah...",
        opts: ["Novel eksistensialisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah filosofi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai absurdisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan absurdisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek absurdisme adalah...",
        opts: ["Novel absurdisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah agama' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai strukturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan strukturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek strukturalisme adalah...",
        opts: ["Novel strukturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah politik' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai poststrukturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan poststrukturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek poststrukturalisme adalah...",
        opts: ["Novel poststrukturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ekonomi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai semiotika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan semiotika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek semiotika adalah...",
        opts: ["Novel semiotika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah budaya' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai hermeneutika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan hermeneutika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek hermeneutika adalah...",
        opts: ["Novel hermeneutika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah teknologi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai fenomenologi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan fenomenologi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek fenomenologi adalah...",
        opts: ["Novel fenomenologi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah informasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai pragmatisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan pragmatisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek pragmatisme adalah...",
        opts: ["Novel pragmatisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah komunikasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai utilitarianisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan utilitarianisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek utilitarianisme adalah...",
        opts: ["Novel utilitarianisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah hiburan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai hedonisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan hedonisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek hedonisme adalah...",
        opts: ["Novel hedonisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah bisnis' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai narsisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan narsisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek narsisisme adalah...",
        opts: ["Novel narsisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah mode' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai materialisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan materialisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek materialisme adalah...",
        opts: ["Novel materialisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah media sosial' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai spiritualisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan spiritualisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek spiritualisme adalah...",
        opts: ["Novel spiritualisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah merek' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai mistisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan mistisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek mistisisme adalah...",
        opts: ["Novel mistisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah konsumsi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai esoterisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan esoterisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek esoterisme adalah...",
        opts: ["Novel esoterisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kompetisi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai okultisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan okultisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek okultisme adalah...",
        opts: ["Novel okultisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah popularitas' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai paranormal terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan paranormal", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek paranormal adalah...",
        opts: ["Novel paranormal", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah citra' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai metafisika terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan metafisika", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek metafisika adalah...",
        opts: ["Novel metafisika", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah reputasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai supernatural terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan supernatural", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek supernatural adalah...",
        opts: ["Novel supernatural", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah warisan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai mitologi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan mitologi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek mitologi adalah...",
        opts: ["Novel mitologi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah prestasi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai legenda terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan legenda", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek legenda adalah...",
        opts: ["Novel legenda", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah pengakuan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai cerita rakyat terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan cerita rakyat", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek cerita rakyat adalah...",
        opts: ["Novel cerita rakyat", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kekuasaan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dongeng terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dongeng", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dongeng adalah...",
        opts: ["Novel dongeng", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kekayaan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai fabel terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan fabel", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek fabel adalah...",
        opts: ["Novel fabel", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah kebahagiaan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai parabel terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan parabel", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek parabel adalah...",
        opts: ["Novel parabel", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah cinta' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai alegori terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan alegori", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek alegori adalah...",
        opts: ["Novel alegori", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah harapan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai simbolisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan simbolisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek simbolisme adalah...",
        opts: ["Novel simbolisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah impian' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai surealisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan surealisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek surealisme adalah...",
        opts: ["Novel surealisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah mimpi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai ekspresionisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan ekspresionisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek ekspresionisme adalah...",
        opts: ["Novel ekspresionisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah drama' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai impresionisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan impresionisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek impresionisme adalah...",
        opts: ["Novel impresionisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah taman' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai kubisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan kubisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek kubisme adalah...",
        opts: ["Novel kubisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah buku' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna estetis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang praktis", "Menciptakan keindahan dan nilai artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dadaisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dadaisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dadaisme adalah...",
        opts: ["Novel dadaisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah lagu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ideologis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang netral", "Menyampaikan pandangan politik atau sosial tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai futurisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan futurisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek futurisme adalah...",
        opts: ["Novel futurisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah tarian' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kultural dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang universal", "Mencerminkan nilai dan norma budaya tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai konstruktivisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan konstruktivisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek konstruktivisme adalah...",
        opts: ["Novel konstruktivisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah permainan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'point of view' adalah...",
        opts: ["Latar cerita", "Sudut pandang atau perspektif dari mana cerita diceritakan", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna historis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang abstrak", "Mencerminkan periode atau peristiwa sejarah tertentu", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai dekonstruksi terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan dekonstruksi", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek dekonstruksi adalah...",
        opts: ["Novel dekonstruksi", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah puzzle' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'conflict' adalah...",
        opts: ["Latar cerita", "Masalah atau pertentangan yang dihadapi tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna personal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang umum", "Mengekspresikan pengalaman atau perasaan pribadi penyair", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai postmodernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan postmodernisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek postmodernisme adalah...",
        opts: ["Novel postmodernisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah labirin' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'characterization' adalah...",
        opts: ["Latar cerita", "Cara penulis mengembangkan dan menggambarkan tokoh", "Urutan peristiwa", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna universal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang spesifik", "Menyentuh pengalaman manusia yang bersifat umum", "Memperpendek puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai modernisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan modernisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek modernisme adalah...",
        opts: ["Novel modernisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ombak' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan puncak konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Klimaks", "Resolusi"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'narration' adalah...",
        opts: ["Latar cerita", "Cara penulis menceritakan peristiwa", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna ambigu dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang jelas", "Menciptakan berbagai interpretasi", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai romantisisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan romantisisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek romantisisme adalah...",
        opts: ["Novel romantisisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah sungai' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'dialogue' adalah...",
        opts: ["Latar cerita", "Percakapan antar tokoh", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna literal dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai realisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan realisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek realisme adalah...",
        opts: ["Novel realisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah jalan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan awal munculnya konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 1 // B
    },
    {
        q: "Dalam menulis novel, 'description' adalah...",
        opts: ["Latar cerita", "Penggambaran detail tentang tokoh, tempat, atau benda", "Percakapan antar tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna kiasan dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna artistik", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai naturalisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan naturalisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek naturalisme adalah...",
        opts: ["Novel naturalisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah pertarungan' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'setting' adalah...",
        opts: ["Latar tempat, waktu, dan suasana", "Ide atau pesan pokok", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 0 // A
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna denotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna kiasan", "Menyampaikan makna harfiah", "Memperpanjang puisi", "Membuat puisi lebih sulit dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai simbolisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan simbolisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek simbolisme adalah...",
        opts: ["Novel simbolisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah seni' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang memberikan penutup atau kesimpulan adalah...",
        opts: ["Orientasi", "Komplikasi", "Koda", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'theme' adalah...",
        opts: ["Latar cerita", "Ide atau pesan pokok yang mendasari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna konotatif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Menciptakan makna yang lebih dalam", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai eksistensialisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan eksistensialisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek eksistensialisme adalah...",
        opts: ["Novel eksistensialisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah ilmu' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Dalam penulisan cerpen, 'plot' adalah...",
        opts: ["Latar cerita", "Urutan peristiwa yang membentuk cerita", "Deskripsi tokoh", "Pesan moral"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna simbolis dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna harfiah", "Mewakili ide atau konsep yang lebih abstrak", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
    {
        q: "Unsur ekstrinsik yang mempengaruhi interpretai absurdisme terhadap karya sastra adalah...",
        opts: ["Alur cerita", "Penokohan", "Hubungan antara sastra dan absurdisme", "Tema"],
        kunci: 2 // C
    },
    {
        q: "Novel yang menampilkan kehidupan dengan fokus pada aspek absurdisme adalah...",
        opts: ["Novel absurdisme", "Fiksi ilmiah", "Sejarah", "Detektif"],
        kunci: 0 // A
    },
    {
        q: "Majas 'Kehidupan adalah filosofi' termasuk dalam kategori...",
        opts: ["Aforisme", "Simile", "Personifikasi", "Hiperbola"],
        kunci: 0 // A
    },
    {
        q: "Bagian dari struktur cerita yang menunjukkan penyelesaian konflik adalah...",
        opts: ["Orientasi", "Komplikasi", "Resolusi", "Klimaks"],
        kunci: 2 // C
    },
    {
        q: "Dalam menulis novel, 'moral' adalah...",
        opts: ["Latar cerita", "Pesan atau nilai-nilai yang dapat dipetik dari cerita", "Deskripsi tokoh", "Puncak konflik"],
        kunci: 1 // B
    },
    {
        q: "Penggunaan kata-kata yang memiliki makna emotif dalam puisi berfungsi untuk...",
        opts: ["Menyampaikan makna yang objektif", "Menciptakan efek emosional pada pembaca", "Memperpendek puisi", "Membuat puisi lebih mudah dipahami"],
        kunci: 1 // B
    },
];

// Fungsi Helper untuk mengambil N soal secara acak
function getRandomQuestions(amount) {
    // Kopi array biar aslinya gak rusak
    const shuffled = [...BANK_SOAL_SASTRA].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
}
