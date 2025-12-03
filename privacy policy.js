document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".navbar-links");
  const overlay = document.querySelector(".menu-overlay");
  const body = document.body;

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }

  // Close menu when link clicked
  if (navLinks) {
    navLinks.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target.classList.contains("nav-link") ||
        target.classList.contains("nav-dropdown-link")
      ) {
        toggleMenu();
      }
    });
  }

  // Mobile handling for Features dropdown tap (optional, keeps heading clickable)
  const featuresItem = document.querySelector(".nav-item.has-dropdown");
  const featuresLink = featuresItem
    ? featuresItem.querySelector(".nav-link")
    : null;
  const featuresDropdown = featuresItem
    ? featuresItem.querySelector(".nav-dropdown")
    : null;

  if (featuresItem && featuresLink && featuresDropdown && navLinks) {
    featuresLink.addEventListener("click", (e) => {
      const isMobile = window.getComputedStyle(navLinks).position === "fixed";
      if (isMobile) {
        e.preventDefault();
        featuresItem.classList.toggle("dropdown-open");
        featuresDropdown.classList.toggle("open");
      }
    });
  }
});
