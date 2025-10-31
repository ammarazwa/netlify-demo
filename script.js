/*
 * OpenAI Landing Page Clone - Animation Script
 * * Requirements:
 * 1. Sidebar menu toggle functionality
 * 2. Button hover animations (handled via class manipulation)
 * 3. Smooth transitions (CSS-driven)
 * 4. Smooth scroll behavior (added as per TODO hint)
 */

document.addEventListener('DOMContentLoaded', function() {
    // === 1. Sidebar Menu Toggle (Assuming a toggle button exists in HTML) ===
    
    // Asumsi: Anda menambahkan tombol toggle di header (contoh: <button id="menu-toggle">)
    const menuToggleButton = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (menuToggleButton && sidebar && contentWrapper) {
        menuToggleButton.addEventListener('click', function() {
            // Toggle class 'sidebar-open' pada body atau elemen yang mengontrol tampilan
            // Saya akan menggunakan class di body untuk kontrol CSS global yang lebih mudah
            document.body.classList.toggle('sidebar-open');
        });
        
        // Bonus: Sembunyikan sidebar setelah link diklik (di mobile)
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (document.body.classList.contains('sidebar-open')) {
                    document.body.classList.remove('sidebar-open');
                }
            });
        });
    } else {
         // Jika tombol toggle tidak ada, kita bisa mengabaikan fungsionalitas ini
         // atau log pesan jika Anda ingin melacaknya.
         // console.warn("Sidebar toggle elements not found. Skipping toggle setup.");
    }
    
    // Catatan: Transisi dan posisi 'sidebar-open' harus didefinisikan di styles.css

    // === 2. Implement Button Hover Animations ===
    
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        // Class 'btn-hover-effect' sudah ditambahkan di HTML/CSS sebelumnya,
        // tapi kita bisa secara eksplisit menggunakan JS untuk menambahkannya/mengubahnya
        // jika kita ingin logika yang lebih kompleks.
        
        // Untuk quiz ini, kita hanya memastikan bahwa transisi sudah diaktifkan di CSS.
        
        button.addEventListener('mouseenter', function() {
            this.classList.add('is-hovering');
        });

        button.addEventListener('mouseleave', function() {
            this.classList.remove('is-hovering');
        });
    });
    
    // Tambahkan class CSS:
    // .btn.is-hovering { transform: translateY(-2px); box-shadow: ... }

    // === 3. Tambahkan Smooth Scroll Behavior ===
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Hanya aktifkan smooth scroll untuk link yang menuju ke ID
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
});