/* ==========================================
   PHUTI MANAMELA PORTFOLIO
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const topButton = document.createElement("button");

    topButton.id = "topBtn";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const sections = document.querySelectorAll("section");

    const reveal = () => {

        sections.forEach(section => {

            const top = section.getBoundingClientRect().top;

            const visible = window.innerHeight - 120;

            if (top < visible) {

                section.style.opacity = "1";

                section.style.transform = "translateY(0)";

                section.style.transition = "all 1s ease";

            }

        });

    };

    sections.forEach(section => {

        section.style.opacity = "0";

        section.style.transform = "translateY(60px)";

    });

    reveal();

    window.addEventListener("scroll", reveal);

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       DARK MODE
    ========================================== */

    const toggle = document.createElement("div");

    toggle.className = "theme-toggle";

    toggle.innerHTML = "🌙";

    document.body.appendChild(toggle);

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            toggle.innerHTML = "☀️";

        } else {

            toggle.innerHTML = "🌙";

        }

    });

    /* ==========================================
       TYPING EFFECT
    ========================================== */

    const subtitle = document.querySelector(".hero-text h2");

    if (subtitle) {

        const words = [

            "Software Developer",

            "Java Developer",

            "Web Developer",

            "Android Developer",

            "Cloud Computing Enthusiast",

            "Database Developer/Administrator",

            "Data Scientist",

            "System Analyst",

            "Quality  Engineer",

            "Moblie Solutions Developer",

           "UI/UX Designer"


        ];

        let wordIndex = 0;

        let charIndex = 0;

        let deleting = false;

        function type() {

            const current = words[wordIndex];

            subtitle.textContent = current.substring(0, charIndex);

            if (!deleting) {

                charIndex++;

                if (charIndex > current.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;

                }

            } else {

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {

                        wordIndex = 0;

                    }

                }

            }

            setTimeout(type, deleting ? 60 : 120);

        }

        type();

    }

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = this.querySelector('input[type="text"]');

            const email = this.querySelector('input[type="email"]');

            const message = this.querySelector("textarea");

            if (

                name.value.trim() === "" ||

                email.value.trim() === "" ||

                message.value.trim() === ""

            ) {

                alert("Please complete all fields.");

                return;

            }

            alert("Thank you! Your message is ready to send.");

            form.reset();

        });

    }

    /* ==========================================
       PROJECT CARD HOVER
    ========================================== */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });

    /* ==========================================
       PAGE LOADER
    ========================================== */

    const loader = document.createElement("div");

    loader.style.position = "fixed";

    loader.style.top = "0";

    loader.style.left = "0";

    loader.style.width = "100%";

    loader.style.height = "100%";

    loader.style.background = "#0f172a";

    loader.style.display = "flex";

    loader.style.justifyContent = "center";

    loader.style.alignItems = "center";

    loader.style.color = "#fff";

    loader.style.fontSize = "30px";

    loader.style.fontWeight = "bold";

    loader.style.zIndex = "9999";

    loader.innerHTML = "Loading Portfolio...";

    document.body.appendChild(loader);

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.transition = "0.6s";

            setTimeout(() => {

                loader.remove();

            }, 600);

        }, 700);

    });

});
