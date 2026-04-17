// On attend que le DOM soit chargé pour tout initialiser
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. SÉLECTEURS ---
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const myNav = document.querySelector('.hero');
    const backToTop = document.getElementById("backToTop");
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;



    // --- 2. MENU BURGER ---
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('#nav-links li').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }

    // --- 3. GESTION DU SCROLL (NAV + BACK TO TOP) ---
    // On utilise addEventListener pour ne rien écraser
    window.addEventListener("scroll", () => {
        // Pour la Nav Hero
        if (window.scrollY > 50) {
            myNav.classList.add('scrolled');
        } else {
            myNav.classList.remove('scrolled');
        }

        // Pour le bouton Back to Top
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        }
    });

    // --- 4. SMOOTH SCROLL ---
    const scrollLinks = document.querySelectorAll('#nav-links a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                if (burger) burger.classList.remove("active");
                if (navLinks) navLinks.classList.remove("active");
            }
        });
    });

    // --- 5. TYPED.JS ---
    if (document.getElementById('auto-typing')) {
        new Typed('#auto-typing', {
            strings: [
                'Développeur web Full-stack.',
                'Recherche Stage (2-3 mois)',
                'Recherche Alternance',
                'Étudiant en BTS SIO Option SLAM.',
                'Mobilité : Île-de-France'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500
        });
    }

    // --- 6. THEME TOGGLE (Sécurisé si le bouton est commenté) ---
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            if (body.classList.contains('light-theme')) {
                themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: rgb(255, 255, 255);"></i> ';
            }
        });
    }

    // --- 7. EMAILJS ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        emailjs.init("eSEAC2a6HZO3G0qhM");
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            emailjs.sendForm("service_s5qjz1k", "template_0ulm64s", this)
                .then(() => {
                    alert("Message envoyé !");
                    this.reset();
                })
                .catch((error) => {
                    console.log("Erreur EmailJS :", error);
                    alert("Erreur lors de l'envoi");
                });
        });
    }
});