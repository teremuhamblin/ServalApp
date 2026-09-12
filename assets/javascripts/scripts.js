/* ---------------------------------------------------------
   ServalApp – scripts.js
   Modern Vanilla JS – 2026 Edition
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  console.log("%c[ServalApp] Tactical UI Loaded", "color:#3b82f6;font-weight:bold;");

  /* Smooth scrolling for internal links */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Fade-in animation for blocks */
  const blocks = document.querySelectorAll(".block");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  blocks.forEach(block => observer.observe(block));

  /* Auto dark mode (CSS already handles it) */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(prefersDark ? "Dark mode active" : "Light mode active");
});
