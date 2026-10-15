// Theme Toggle (Dark / Light Mode)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    if (currentTheme === "light") {
        body.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
    } else {
        body.setAttribute("data-theme", "light");
        themeToggle.textContent = "☀️";
    }
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealOnScroll.observe(el));