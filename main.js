window.onload = function() {
    const messageElement = document.getElementById('message');
    const button = document.getElementById('nextButton');
    const loveAnimation = document.getElementById('love-animation');
    const audio = document.getElementById('background-audio'); // Ambil elemen audio
    
    const messages = [
        "HALLOO NECIL", 
        "aku cuman mau bilang",
        "kenapa sih kita gk bisa ketemu?",
        "aku padahal mau cerita banyak nanti",
        "tapi kamu kek nolak terus setiap aku ngajak ketemu",
        "aku kek mikir",
        "dahlah emang gk bakal bisa buat ketemu",
        "tapi kenapa klo sama temennya bisa ya?",
        "jadi aku mikir",
        "yaudah gk usah ketemu selamanya",
        "ini yang aku pikirin",
        "aku sengaja besok gk masuk biar bisa ketemu",
        "cuman aku mikir lagi",
        "udah jangan terlalu berharap gk bakal ketemu juga kan",
        "maaf ya klo ada kata-kata aku yang kasar",
        "terima kasih NECIL udah mau kenalan sama cowok buruk kek aku",
        "yang banyak kurangnya"
    ];

    let index = 0;

    // Fungsi untuk menampilkan pesan dengan efek ketikan
    function showMessage() {
        if (index < messages.length) {
            messageElement.textContent = ''; 
            messageElement.classList.add('typing-effect'); 
            let text = messages[index];
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    messageElement.textContent += text.charAt(i); 
                    i++;
                    setTimeout(typeWriter, 100); 
                } else {
                    button.style.display = 'block'; // Menampilkan tombol setelah selesai mengetik
                }
            }

            typeWriter();
            index++;
        }
    }

    button.addEventListener('click', function() {
        button.style.display = 'none'; // Menyembunyikan tombol setelah diklik

        // Menunggu hingga pesan terakhir selesai dan tombol di klik
        if (index === messages.length) {
            // Menunggu 1 detik setelah pesan terakhir muncul untuk menghapusnya
            setTimeout(() => {
                messageElement.textContent = ''; // Menghapus pesan terakhir
                loveAnimation.style.display = 'block'; // Menampilkan animasi love setelah delay
            }, 1000); // Delay 1 detik sebelum animasi love muncul
        }

        setTimeout(() => {
            showMessage(); // Menampilkan pesan berikutnya setelah tombol diklik
        }, 1000); 
    });

    showMessage(); // Menampilkan pesan pertama saat halaman dimuat
};
