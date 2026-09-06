(function () {
  "use strict";

  /* ---- Safety wrapper ---- */
  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* =====================================================
     SPLASH
     ===================================================== */
  function initSplash() {
    var splash = document.querySelector("[data-splash]");
    if (!splash) return;
    var hide = function () { splash.classList.add("is-out"); };
    if (document.readyState === "complete") {
      setTimeout(hide, 2200);
    } else {
      window.addEventListener("load", function () { setTimeout(hide, 2200); });
    }
    setTimeout(hide, 4200);
  }

  /* =====================================================
     NAV — scroll behavior + mobile toggle
     ===================================================== */
  function initNav() {
    var nav     = document.getElementById("nav");
    var toggle  = document.querySelector(".nav-toggle");
    var drawer  = document.getElementById("navDrawer");
    if (!nav) return;

    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && drawer) {
      toggle.addEventListener("click", function () {
        var open = toggle.classList.toggle("is-open");
        drawer.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open);
        drawer.setAttribute("aria-hidden", !open);
      });
      drawer.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          toggle.classList.remove("is-open");
          drawer.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          drawer.setAttribute("aria-hidden", "true");
        });
      });
    }
  }

  /* =====================================================
     SMOOTH SCROLL — native, anchor-aware
     ===================================================== */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 72;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navH,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  }

  /* =====================================================
     SCROLL REVEAL — IntersectionObserver
     ===================================================== */
  function initReveals() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -3% 0px" });

    els.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
      io.observe(el);
    });

    /* 6-second safety: reveal anything still hidden in viewport */
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-visible");
        }
      });
    }, 6000);
  }

  /* =====================================================
     COUNT-UP NUMBERS
     ===================================================== */
  function initCountUp() {
    var nums = document.querySelectorAll("[data-count-to]");
    if (!nums.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el     = e.target;
        var target = parseFloat(el.getAttribute("data-count-to"));
        var suffix = el.getAttribute("data-suffix") || "";
        var start  = 0;
        var dur    = 1600;
        var t0     = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var prog = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - prog, 3);
          var val = Math.round(eased * target);
          el.textContent = val + suffix;
          if (prog < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (el) { io.observe(el); });
  }

  /* =====================================================
     TILT 3D — service & product cards
     ===================================================== */
  function initTilt() {
    if (window.matchMedia("(hover: none)").matches) return;

    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      var halo = document.createElement("div");
      halo.className = "halo";
      card.appendChild(halo);

      card.addEventListener("mouseover", function (e) {
        if (card.contains(e.relatedTarget)) return;
      });
      card.addEventListener("mousemove", function (e) {
        var r   = card.getBoundingClientRect();
        var x   = (e.clientX - r.left) / r.width  - 0.5;
        var y   = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = "perspective(800px) rotateY(" + (x * 7) + "deg) rotateX(" + (-y * 5) + "deg) scale(1.01)";
        card.style.transition = "transform 0.08s ease";
        var hx = ((e.clientX - r.left) / r.width  * 100).toFixed(1) + "%";
        var hy = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + "%";
        card.style.setProperty("--hx", hx);
        card.style.setProperty("--hy", hy);
      });
      card.addEventListener("mouseout", function (e) {
        if (card.contains(e.relatedTarget)) return;
        card.style.transform = "";
        card.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
      });
    });
  }

  /* =====================================================
     HERO IMAGE — slow Ken Burns
     ===================================================== */
  function initHeroImage() {
    var img = document.querySelector(".hero-img");
    if (!img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    img.style.transform = "scale(1)";
    img.style.transition = "transform 12s ease-out";
    setTimeout(function () { img.style.transform = "scale(1.06)"; }, 200);
  }

  /* =====================================================
     GSAP SCROLL TRIGGERS — section parallax reveals
     ===================================================== */
  function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    /* hero content stagger */
    gsap.from(".hero-ani", {
      y: 30, opacity: 0, duration: 1, stagger: 0.18, ease: "power3.out", delay: 0.6,
      clearProps: "opacity,transform"
    });

    /* hero mesh parallax */
    gsap.to(".hero-mesh", {
      y: "-20%",
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
    });

    /* stats — subtle Y parallax only (opacity handled by IntersectionObserver) */
    gsap.from(".stat-item", {
      y: 16, duration: 0.8, stagger: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: ".stats", start: "top 85%" }
    });
  }

  /* =====================================================
     PRODUCTS — show/hide extra cards
     ===================================================== */
  window.toggleProducts = function () {
    var grid = document.getElementById("productsGrid");
    var btn  = document.getElementById("productToggleBtn");
    if (!grid) return;
    var collapsed = grid.hasAttribute("data-collapsed");
    if (collapsed) {
      grid.removeAttribute("data-collapsed");
      btn.innerHTML = "Ver menos &nbsp;↑";
      /* trigger reveal on newly visible cards */
      grid.querySelectorAll(".product-card:nth-child(n+7)").forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      grid.setAttribute("data-collapsed", "");
      btn.innerHTML = "Ver más productos &nbsp;↓";
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* =====================================================
     BOOT
     ===================================================== */
  function boot() {
    safe(initSplash, "splash");
    safe(initNav, "nav");
    safe(initSmoothScroll, "scroll");
    safe(initReveals, "reveals");
    safe(initCountUp, "countup");
    safe(initTilt, "tilt");
    safe(initHeroImage, "heroimg");
    safe(initGSAP, "gsap");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
