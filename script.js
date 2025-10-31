document.addEventListener('DOMContentLoaded', function() {
    
    const hoverElements = document.querySelectorAll('.nav-item a, .btn, .feature-card, .news-card');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('is-hovering');
        });

        element.addEventListener('mouseleave', function() {
            this.classList.remove('is-hovering');
        });
    });

    const menuToggleButton = document.querySelector('.menu-toggle-btn');
    
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', function() {
            document.body.classList.toggle('sidebar-open');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            if (document.body.classList.contains('sidebar-open')) {
                 document.body.classList.remove('sidebar-open');
            }
        });
    });
    
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.15}px)`; 
        });
    }
});