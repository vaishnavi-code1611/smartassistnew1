// Smooth scroll for navigation links

document.addEventListener("DOMContentLoaded", function () {
  // Handle anchor link clicks
  const anchorLinks = document.querySelectorAll("a[href^='#']");

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href.length <= 1) return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Add navbar background on scroll
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      navbar.style.boxShadow = "none";
    }
  });

  // Intersection Observer for scroll animations (feature + testimonial cards)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".feature-card, .testimonial-card"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

  // Button click handlers (demo)
  const ctaButtons = document.querySelectorAll(".btn");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.closest("a")) return;

      if (
        this.textContent.includes("Free Trial") ||
        this.textContent.includes("Demo")
      ) {
        alert(
          "This would open a signup/demo form. You can customize this action!"
        );
      }

      console.log("Button clicked:", this.textContent);
    });
  });

  console.log("Smart Assist Landing Page - Initialized");
});

// call analysis and whatsapp chat

document.addEventListener("DOMContentLoaded", function () {
  // -------- Conversation / Call Analysis DATA --------
  // Enquiry + Cold for each range

  const callAnalysisData = {
    "1D": {
      enquiry: {
        connectedCount: 14,
        conversationTime: "19m 40s",
        notConnected: 4,
        all: { calls: 20, duration: "25m 10s", clients: 9 },
        connected: { calls: 14, duration: "19m 40s", clients: 8 },
        missed: { calls: 4, duration: "5m 10s", clients: 1 },
        rejected: { calls: 2, duration: "0m 20s", clients: 1 },
        incoming: { calls: 20, duration: "25m 10s", clients: 9 },
        chartLabel: "Today • Enquiry",
      },
      cold: {
        connectedCount: 8,
        conversationTime: "10m 25s",
        notConnected: 6,
        all: { calls: 18, duration: "15m 30s", clients: 10 },
        connected: { calls: 8, duration: "10m 25s", clients: 6 },
        missed: { calls: 7, duration: "3m 15s", clients: 3 },
        rejected: { calls: 3, duration: "1m 50s", clients: 1 },
        incoming: { calls: 18, duration: "15m 30s", clients: 10 },
        chartLabel: "Today • Cold Calls",
      },
    },
    "1W": {
      enquiry: {
        connectedCount: 68,
        conversationTime: "2h 15m 30s",
        notConnected: 16,
        all: { calls: 90, duration: "2h 45m 40s", clients: 38 },
        connected: { calls: 68, duration: "2h 15m 30s", clients: 32 },
        missed: { calls: 14, duration: "17m 20s", clients: 4 },
        rejected: { calls: 8, duration: "12m 50s", clients: 2 },
        incoming: { calls: 90, duration: "2h 45m 40s", clients: 38 },
        chartLabel: "This week • Enquiry",
      },
      cold: {
        connectedCount: 40,
        conversationTime: "1h 05m 10s",
        notConnected: 22,
        all: { calls: 72, duration: "1h 25m 20s", clients: 30 },
        connected: { calls: 40, duration: "1h 05m 10s", clients: 24 },
        missed: { calls: 20, duration: "12m 30s", clients: 4 },
        rejected: { calls: 12, duration: "7m 40s", clients: 2 },
        incoming: { calls: 72, duration: "1h 25m 20s", clients: 30 },
        chartLabel: "This week • Cold Calls",
      },
    },
    "1M": {
      enquiry: {
        connectedCount: 230,
        conversationTime: "6h 40m 10s",
        notConnected: 55,
        all: { calls: 320, duration: "7h 55m 25s", clients: 140 },
        connected: { calls: 230, duration: "6h 40m 10s", clients: 125 },
        missed: { calls: 55, duration: "48m 30s", clients: 12 },
        rejected: { calls: 35, duration: "26m 45s", clients: 8 },
        incoming: { calls: 320, duration: "7h 55m 25s", clients: 140 },
        chartLabel: "This month • Enquiry",
      },
      cold: {
        connectedCount: 160,
        conversationTime: "4h 05m 40s",
        notConnected: 80,
        all: { calls: 260, duration: "5h 10m 00s", clients: 120 },
        connected: { calls: 160, duration: "4h 05m 40s", clients: 90 },
        missed: { calls: 60, duration: "35m 10s", clients: 18 },
        rejected: { calls: 40, duration: "29m 10s", clients: 12 },
        incoming: { calls: 260, duration: "5h 10m 00s", clients: 120 },
        chartLabel: "This month • Cold Calls",
      },
    },
    "1Q": {
      enquiry: {
        connectedCount: 640,
        conversationTime: "18h 20m 45s",
        notConnected: 150,
        all: { calls: 880, duration: "21h 35m 15s", clients: 380 },
        connected: { calls: 640, duration: "18h 20m 45s", clients: 340 },
        missed: { calls: 150, duration: "1h 28m 30s", clients: 28 },
        rejected: { calls: 90, duration: "1h 45m 60s", clients: 12 },
        incoming: { calls: 880, duration: "21h 35m 15s", clients: 380 },
        chartLabel: "This quarter • Enquiry",
      },
      cold: {
        connectedCount: 430,
        conversationTime: "12h 40m 20s",
        notConnected: 210,
        all: { calls: 700, duration: "16h 10m 00s", clients: 320 },
        connected: { calls: 430, duration: "12h 40m 20s", clients: 280 },
        missed: { calls: 170, duration: "1h 05m 30s", clients: 32 },
        rejected: { calls: 100, duration: "2h 24m 10s", clients: 20 },
        incoming: { calls: 700, duration: "16h 10m 00s", clients: 320 },
        chartLabel: "This quarter • Cold Calls",
      },
    },
    "1Y": {
      enquiry: {
        connectedCount: 2450,
        conversationTime: "72h 10m 00s",
        notConnected: 620,
        all: { calls: 3200, duration: "80h 30m 00s", clients: 1250 },
        connected: { calls: 2450, duration: "72h 10m 00s", clients: 1100 },
        missed: { calls: 470, duration: "4h 55m 00s", clients: 90 },
        rejected: { calls: 280, duration: "3h 25m 00s", clients: 60 },
        incoming: { calls: 3200, duration: "80h 30m 00s", clients: 1250 },
        chartLabel: "Last 12 months • Enquiry",
      },
      cold: {
        connectedCount: 1700,
        conversationTime: "54h 20m 00s",
        notConnected: 900,
        all: { calls: 2900, duration: "68h 40m 00s", clients: 1150 },
        connected: { calls: 1700, duration: "54h 20m 00s", clients: 930 },
        missed: { calls: 750, duration: "6h 10m 00s", clients: 140 },
        rejected: { calls: 450, duration: "8h 10m 00s", clients: 80 },
        incoming: { calls: 2900, duration: "68h 40m 00s", clients: 1150 },
        chartLabel: "Last 12 months • Cold Calls",
      },
    },
  }; // [attached_file:2]

  let currentCallMode = "enquiry";
  let currentRangeKey = "1Y";

  // -------- Helper to update the UI for a given range + mode --------
  function updateCallAnalysis(rangeKey, mode = currentCallMode) {
    const rangeBlock = callAnalysisData[rangeKey];
    if (!rangeBlock) return;

    const data = rangeBlock[mode];
    if (!data) return;

    // Key metrics
    const connectedCountEl = document.querySelector(
      "[data-field='connected-count']"
    );
    const conversationTimeEl = document.querySelector(
      "[data-field='conversation-time']"
    );
    const notConnectedEl = document.querySelector(
      "[data-field='not-connected']"
    );

    if (connectedCountEl) connectedCountEl.textContent = data.connectedCount;
    if (conversationTimeEl)
      conversationTimeEl.textContent = data.conversationTime;
    if (notConnectedEl) notConnectedEl.textContent = data.notConnected;

    // Table rows
    const mapField = (field, value) => {
      const el = document.querySelector(`[data-field='${field}']`);
      if (el) el.textContent = value;
    };

    mapField("all-calls", data.all.calls);
    mapField("all-duration", data.all.duration);
    mapField("all-clients", data.all.clients);

    mapField("connected-calls", data.connected.calls);
    mapField("connected-duration", data.connected.duration);
    mapField("connected-clients", data.connected.clients);

    mapField("missed-calls", data.missed.calls);
    mapField("missed-duration", data.missed.duration);
    mapField("missed-clients", data.missed.clients);

    mapField("rejected-calls", data.rejected.calls);
    mapField("rejected-duration", data.rejected.duration);
    mapField("rejected-clients", data.rejected.clients);

    // Footer pill
    mapField("incoming-calls", data.incoming.calls);
    mapField("incoming-duration", data.incoming.duration);
    mapField("incoming-clients", data.incoming.clients);

    // Chart label
    const chartLabelEl = document.querySelector(
      "[data-field='chart-label-range']"
    );
    if (chartLabelEl) chartLabelEl.textContent = data.chartLabel;
  }

  // -------- Enquiry / Cold Calls toggle (now data-aware) --------
  const modes = document.querySelectorAll(".segment-btn");
  const metricsBlock = document.querySelector(".analysis-metrics-row--key");
  const callsTable = document.querySelector(".analysis-table--icons");

  if (modes.length && metricsBlock && callsTable) {
    modes.forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-mode") || "enquiry";
        currentCallMode = mode;

        modes.forEach((b) =>
          b.classList.toggle("segment-btn--active", b === btn)
        );

        [metricsBlock, callsTable].forEach((el) => {
          el.style.opacity = "0.1";
        });

        setTimeout(() => {
          updateCallAnalysis(currentRangeKey, currentCallMode);
          [metricsBlock, callsTable].forEach((el) => {
            el.style.opacity = "1";
          });
        }, 150);
      });
    });
  }

  // -------- Timeline range toggle (uses current mode) --------
  const timelinePills = document.querySelectorAll(".timeline-pill");

  if (timelinePills.length && metricsBlock && callsTable) {
    timelinePills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const range = pill.getAttribute("data-range");
        if (!range) return;
        currentRangeKey = range;

        timelinePills.forEach((p) =>
          p.classList.toggle("timeline-pill--active", p === pill)
        );

        [metricsBlock, callsTable].forEach((el) => {
          el.style.opacity = "0.1";
        });

        setTimeout(() => {
          updateCallAnalysis(currentRangeKey, currentCallMode);
          [metricsBlock, callsTable].forEach((el) => {
            el.style.opacity = "1";
          });
        }, 150);
      });
    });

    // initial load: match default active pill + mode
    const activePill = document.querySelector(".timeline-pill--active");
    if (activePill) {
      currentRangeKey = activePill.getAttribute("data-range") || "1Y";
    }
    const activeModeBtn = document.querySelector(
      ".segment-btn.segment-btn--active"
    );
    if (activeModeBtn) {
      currentCallMode = activeModeBtn.getAttribute("data-mode") || "enquiry";
    }

    updateCallAnalysis(currentRangeKey, currentCallMode);
  }
});

// voice powered actions

document.addEventListener("DOMContentLoaded", function () {
  // ensure voices load (Chrome quirk)
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged =
      window.speechSynthesis.onvoiceschanged || (() => {});

    // ----- Voice helper: prefer Indian female voice -----
    function speakSentence(text, onEnd) {
      if (!("speechSynthesis" in window)) {
        onEnd?.();
        return;
      }

      function chooseVoice() {
        const voices = window.speechSynthesis.getVoices();
        if (!voices || !voices.length) return null;

        const indianVoices = voices.filter((v) =>
          v.lang.toLowerCase().startsWith("en-in")
        );
        const femaleIndian =
          indianVoices.find((v) => /female|woman|girl/i.test(v.name)) ||
          indianVoices[0];

        if (!femaleIndian) {
          const femaleEnglish =
            voices.find(
              (v) =>
                v.lang.toLowerCase().startsWith("en") &&
                /female|woman|girl/i.test(v.name)
            ) || voices.find((v) => v.lang.toLowerCase().startsWith("en"));
          return femaleEnglish || voices[0];
        }

        return femaleIndian;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.97;
      utterance.pitch = 1.05;
      utterance.lang = "en-IN";
      const selectedVoice = chooseVoice();
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = () => {
        onEnd?.();
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }

    // ----- Tap to speak demo: voice + text -----
    const tapToSpeakBtn = document.getElementById("tap-to-speak-btn");
    const remarksStatus = document.getElementById("remarks-status");
    const voiceCaption = document.getElementById("voice-caption");
    const voiceText = document.getElementById("voice-text");
    const bars = document.querySelectorAll(".followups-bar");
    const micRing = document.querySelector(".followups-voice-ring");

    const spokenSentence =
      "Reach out to the client tomorrow, thank them for their time and share the updated quotation.";
    const transcribedSentence =
      "Reach out to the client to thank them for their time, share the updated quotation, and check if they need any additional support before making a decision.";

    let isListening = false;

    if (tapToSpeakBtn && remarksStatus && voiceCaption && voiceText) {
      tapToSpeakBtn.addEventListener("click", () => {
        if (isListening) return;
        isListening = true;

        remarksStatus.textContent = "Playing sample voice note...";
        tapToSpeakBtn.classList.add("is-recording");
        bars.forEach((bar) => bar.classList.add("followups-bar--active"));
        if (micRing) micRing.classList.add("animate-voice-pulse");

        voiceCaption.textContent = "“...”";

        speakSentence(spokenSentence, () => {
          voiceCaption.textContent = `“${spokenSentence}”`;
          voiceText.classList.remove("animate-voice-typing");
          // force reflow
          // eslint-disable-next-line no-unused-expressions
          voiceText.offsetHeight;
          voiceText.textContent = transcribedSentence;
          voiceText.classList.add("animate-voice-typing");
          remarksStatus.textContent = transcribedSentence;
          tapToSpeakBtn.classList.remove("is-recording");
          bars.forEach((bar) => bar.classList.remove("followups-bar--active"));
          isListening = false;
        });
      });
    }
  }
});

// reload car

document.addEventListener("DOMContentLoaded", () => {
  const car = document.querySelector(".testdrive-car");

  if (car) {
    const animationDuration = 7; // Must match your CSS duration
    const negativeDelay = -Math.random() * animationDuration;
    car.style.animationDelay = `${negativeDelay}s`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // existing code ...
  const sections = document.querySelectorAll(
    "#about, #features, #mobile, #conversation-intelligence, #followups, #testdrive-flow, #team-performance, #benefits, #testimonials"
  );
  const navLinks = document.querySelectorAll(".navbar-links .nav-link");

  function setActiveNav() {
    let currentId = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 140) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href"); // "#about"
      link.classList.remove("active");
      if (currentId && href === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }

  // Update on scroll
  window.addEventListener("scroll", setActiveNav);
  // And once on load
  setActiveNav();

  // Optional: immediate active on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // keep your other existing JS below...
});

// Animation section
// === Scroll-based reveal animations (left & right alternating) ===

document.addEventListener("DOMContentLoaded", function () {
  // Select all sections with reveal classes
  const revealSections = document.querySelectorAll(
    ".reveal-left, .reveal-right"
  );

  // IntersectionObserver to trigger when section enters viewport
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Stop observing once revealed
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12, // Trigger when 12% of section is visible
      rootMargin: "0px 0px -80px 0px", // Offset from bottom
    }
  );

  // Observe each section
  revealSections.forEach((section) => {
    revealObserver.observe(section);
  });
});

// Scroll based animation
/* ========================================
Scroll-based section reveal animations (left/right slide)
======================================== */

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
      }
    });
  }, observerOptions);

  // Sections that should slide from LEFT
  const leftSlideSections = document.querySelectorAll(
    ".about-section, .mobile-section, .followups-section, .team-performance-section, .testimonials-section"
  );

  // Sections that should slide from RIGHT
  const rightSlideSections = document.querySelectorAll(
    ".features-section, .conversation-section, .testdrive-journey-section, .benefits-section, .stats-section"
  );

  // Initialize left-sliding sections
  leftSlideSections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateX(-80px)";
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(section);
  });

  // Initialize right-sliding sections
  rightSlideSections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateX(80px)";
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(section);
  });
});

// Nav button
// Enhanced Hamburger Menu Toggle with Overlay

// const hamburger = document.getElementById("hamburger");
// const navbarLinks = document.querySelector(".navbar-links");
// const menuOverlay = document.getElementById("menu-overlay");

// if (hamburger && navbarLinks) {
//   // Toggle menu function
//   function toggleMenu() {
//     hamburger.classList.toggle("active");
//     navbarLinks.classList.toggle("active");
//     menuOverlay.classList.toggle("active");
//     document.body.classList.toggle("menu-open");
//   }

//   // Close menu function
//   function closeMenu() {
//     hamburger.classList.remove("active");
//     navbarLinks.classList.remove("active");
//     menuOverlay.classList.remove("active");
//     document.body.classList.remove("menu-open");
//   }

//   // Hamburger click
//   hamburger.addEventListener("click", toggleMenu);

//   // Overlay click to close
//   if (menuOverlay) {
//     menuOverlay.addEventListener("click", closeMenu);
//   }

//   // Close menu when clicking nav links
//   const navLinks2 = document.querySelectorAll(".nav-link");
//   navLinks2.forEach((link) => {
//     link.addEventListener("click", closeMenu);
//   });

//   // Close menu on Escape key
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && navbarLinks.classList.contains("active")) {
//       closeMenu();
//     }
//   });
// }

// scroll up
/* ========================================
Scroll to top on page reload/refresh
======================================== */

// Disable browser's scroll restoration feature
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Scroll to top before page unloads
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// Force scroll to top on page load
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

// Also ensure scroll on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});

// form submission
// Contact form API call

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      teamSize: form["team-size"].value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://your-backend.com/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert("Something went wrong. Please try again.");
        return;
      }

      alert("Thanks! Your Smart Assist demo request has been submitted.");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection and try again.");
    }
  });
});

// nav

// nav button drop
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".navbar-links");
  const overlay = document.querySelector(".menu-overlay");
  const body = document.body;

  // Toggle main mobile menu
  function toggleMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay && overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Close menu when clicking overlay
  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }

  // Close menu when a link is clicked (for single-page sections)
  navLinks.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("nav-link") ||
      target.classList.contains("nav-dropdown-link")
    ) {
      toggleMenu();
    }
  });

  // Mobile handling for Features dropdown (tap to open/close)
  const featuresItem = document.querySelector(".nav-item.has-dropdown");
  const featuresLink = featuresItem
    ? featuresItem.querySelector(".nav-link")
    : null;
  const featuresDropdown = featuresItem
    ? featuresItem.querySelector(".nav-dropdown")
    : null;

  if (featuresItem && featuresLink && featuresDropdown) {
    // Prevent default anchor jump on mobile, just toggle dropdown
    featuresLink.addEventListener("click", (e) => {
      // Only intercept when menu is in mobile mode (navbar-links is fixed)
      const isMobile = window.getComputedStyle(navLinks).position === "fixed";
      if (isMobile) {
        e.preventDefault();
        featuresItem.classList.toggle("dropdown-open");
        featuresDropdown.classList.toggle("open");
      }
    });
  }
});

document.querySelector(".brand-icon").addEventListener("click", function () {
  window.location.reload(); // reload current page
});

// cookie
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const STORAGE_KEY = "sa_cookie_consent";

  if (!banner || !acceptBtn) return;

  // Show banner only if not accepted before
  const hasConsent = localStorage.getItem(STORAGE_KEY);
  if (!hasConsent) {
    banner.classList.remove("cookie-banner--hidden");
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem(STORAGE_KEY, "accepted");
    banner.classList.add("cookie-banner--hidden");
  });
});

// cookie banner
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const STORAGE_KEY = "sa-cookie-consent";

  if (!banner || !acceptBtn) return;

  const hasConsent = localStorage.getItem(STORAGE_KEY);

  if (!hasConsent) {
    banner.classList.remove("cookie-banner--hidden");
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem(STORAGE_KEY, "accepted");
    banner.classList.add("cookie-banner--hidden");
  });
});

// cookie banner

// Zoom based navbar
// Mobile handling for Features dropdown tap to open/close
const featuresItem = document.querySelector(".nav-item.has-dropdown");
const featuresLink = featuresItem
  ? featuresItem.querySelector(".nav-link")
  : null;
const featuresDropdown = featuresItem
  ? featuresItem.querySelector(".nav-dropdown")
  : null;

if (featuresItem && featuresLink && featuresDropdown) {
  featuresLink.addEventListener("click", (e) => {
    const isMobile = window.getComputedStyle(navLinks).position === "fixed";
    if (isMobile) {
      e.preventDefault();
      featuresItem.classList.toggle("dropdown-open");
      featuresDropdown.classList.toggle("open");
    }
  });
}

// zoom based nav bar

// button submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // uses existing form

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const payload = {
      name: form.querySelector('input[name="name"], #name')?.value || "",
      phone: form.querySelector('input[name="phone"], #phone')?.value || "",
      email: form.querySelector('input[name="email"], #email')?.value || "",
      message:
        form.querySelector('textarea[name="message"], #message')?.value || "",
    };

    try {
      const response = await fetch(
        "https://api.ariantechsolutions.in/api/api/reach-us-send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Message sent successfully ✅");
        form.reset();
      } else {
        alert("Failed to send message ❌");
      }
    } catch (err) {
      alert("Server error. Try again later ⚠️");
      console.error(err);
    }
  });
});

// button submit
