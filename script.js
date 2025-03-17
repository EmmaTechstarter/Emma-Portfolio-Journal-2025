document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("greeting");
    const greetings = ["Willkommen auf meinem Portfolio", "Schön, dass du hier bist!", "Entdecke meine Arbeit!"];
    let currentGreeting = 0;

    function changeGreeting() {
        greeting.textContent = greetings[currentGreeting];
        currentGreeting = (currentGreeting + 1) % greetings.length;
    }

    changeGreeting();
    setInterval(changeGreeting, 3000);

    const header = document.getElementById("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const fadeElements = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn();

    let slideIndex = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slides img").length;

    function changeSlide(direction) {
        slideIndex += direction;

        if (slideIndex >= totalSlides) slideIndex = 0;
        if (slideIndex < 0) slideIndex = totalSlides - 1;

        slides.style.transform = `translateX(${-slideIndex * 300}px)`;
    }

    setInterval(() => changeSlide(1), 4000);

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("form-message").textContent = "Danke für deine Nachricht!";
        this.reset();
    });
});
