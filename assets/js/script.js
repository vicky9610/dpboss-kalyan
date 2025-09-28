// Royal Kuber Matka - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const animatedElements = document.querySelectorAll('.rate-card, .feature-card, .step');

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Add animation class when element is in viewport
    function checkVisibility() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', function() {
        checkVisibility();

        // Show floating download button on scroll
        const floatingDownload = document.querySelector('.floating-download');
        if (floatingDownload) {
            if (window.scrollY > 300) {
                floatingDownload.classList.add('show');
            } else {
                floatingDownload.classList.remove('show');
            }
        }
    });

    // Mobile menu toggle (if needed in the future)
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Add current year to footer copyright
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');

    if (copyrightElement) {
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2025', currentYear);
    }
});