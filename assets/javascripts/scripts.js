/* ---------------------------------------------------------
   ServalApp – scripts.js
   Tactical MAX Edition – 2026
   Optimized, Modular, Mobile‑Ready, Military‑Grade
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     Tactical Logging
  --------------------------------------------------------- */
  const log = (msg) =>
    console.log(`%c[ServalApp] ${msg}`, "color:#3b82f6;font-weight:bold;");

  log("Tactical UI Loaded");
  log("Initializing modules…");

  /* ---------------------------------------------------------
     Utility: Debounce & Throttle
  --------------------------------------------------------- */
  const debounce = (fn, delay = 150) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const throttle = (fn, limit = 150) => {
    let waiting = false;
    return (...args) => {
      if (!waiting) {
        fn(...args);
        waiting = true;
        setTimeout(() => (waiting = false), limit);
      }
    };
  };

  /* ---------------------------------------------------------
     Smooth scrolling (optimized)
  --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, { passive: true });
  });

  /* ---------------------------------------------------------
     Fade-in + Reveal Tactical Animation
  --------------------------------------------------------- */
  const blocks = document.querySelectorAll(".block");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "reveal");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    blocks.forEach(block => observer.observe(block));
  } else {
    blocks.forEach(block => block.classList.add("visible"));
  }

  /* ---------------------------------------------------------
     Auto Dark Mode + Manual Toggle
  --------------------------------------------------------- */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const html = document.documentElement;

  if (prefersDark) html.classList.add("dark");

  log(prefersDark ? "Dark mode active" : "Light mode active");

  // Manual toggle (if you add a button later)
  window.toggleDarkMode = () => {
    html.classList.toggle("dark");
    log("Manual dark mode toggle");
  };

  /* ---------------------------------------------------------
     SPA Light Navigation (no reload)
     - Only for internal screens/
  --------------------------------------------------------- */
  const spaLinks = document.querySelectorAll('a[href^="screens/"]');

  spaLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");

      fetch(url)
        .then(res => res.text())
        .then(html => {
          document.querySelector("main.container").innerHTML = html;
          log(`Loaded screen: ${url}`);
        })
        .catch(() => log(`Error loading ${url}`));
    });
  });

  /* ---------------------------------------------------------
     UI Components: Toasts
  --------------------------------------------------------- */
  const toastContainer = document.createElement("div");
  toastContainer.className = "toast-container";
  document.body.appendChild(toastContainer);

  window.toast = (msg, duration = 2500) => {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    toastContainer.appendChild(t);

    setTimeout(() => t.classList.add("visible"), 10);
    setTimeout(() => {
      t.classList.remove("visible");
      setTimeout(() => t.remove(), 300);
    }, duration);
  };

  /* ---------------------------------------------------------
     UI Components: Modal
  --------------------------------------------------------- */
  window.modal = (content) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const box = document.createElement("div");
    box.className = "modal-box";
    box.innerHTML = content;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  };

  /* ---------------------------------------------------------
     Loader Military Style
  --------------------------------------------------------- */
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `<span class="pulse"></span>`;
  document.body.appendChild(loader);

  setTimeout(() => loader.classList.add("hide"), 800);

  /* ---------------------------------------------------------
     Mobile Optimization (iPhone/iPad)
  --------------------------------------------------------- */
  window.addEventListener("touchstart", throttle(() => {
    log("Touch event detected");
  }, 500), { passive: true });

});
