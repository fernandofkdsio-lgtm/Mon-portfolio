
// BURGER MENU

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".links");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
});




// Partie Initialisation EmailJS
(function(){
    emailjs.init("eSEAC2a6HZO3G0qhM");
})();

document
.getElementById("contactForm")

.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_s5qjz1k",
        "template_0ulm64s",
        this
    )
    .then(function(){
        alert("Message envoyé !");
    })
    .catch(function(error){
        console.log("Erreur EmailJS :", error);
        alert("Erreur lors de l'envoi");
    });

});
document.getElementById("contactForm").addEventListener("submit", function(){
    this.reset();
});


// partie scroll

const scrollLinks = document.querySelectorAll('.links a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        burger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});


// partie typed

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#auto-typing', {
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
});