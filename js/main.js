/* ============================================================
   MAIN.JS — Header, Mobile Menu, Scroll Reveal, Accordion,
              Language Switcher, Forms, Cookie Banner, Toasts
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ── Header scroll effect ── */
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Highlight active nav link ── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href && (href === currentPath || href.endsWith(currentPath))) {
      link.classList.add("active");
    }
  });

  /* ── Mobile menu ── */
  const hamburger   = document.querySelector(".hamburger");
  const mobileMenu  = document.querySelector(".mobile-menu");
  const toggleMenu  = () => {
    const open = hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
    hamburger.setAttribute("aria-expanded", open);
  };
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", toggleMenu);
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  /* ── Language switcher ── */
  const langSwitchers = document.querySelectorAll(".lang-switcher");
  langSwitchers.forEach(sw => {
    const btn = sw.querySelector(".lang-btn");
    const dropdown = sw.querySelector(".lang-dropdown");
    if (!btn || !dropdown) return;

    btn.addEventListener("click", e => {
      e.stopPropagation();
      langSwitchers.forEach(other => { if (other !== sw) other.classList.remove("open"); });
      sw.classList.toggle("open");
    });
    dropdown.querySelectorAll(".lang-option").forEach(opt => {
      opt.addEventListener("click", () => {
        const lang = opt.getAttribute("data-lang");
        if (lang) {
          applyTranslations(lang);
          btn.querySelector(".current-lang").textContent = opt.querySelector(".lang-name").textContent;
          dropdown.querySelectorAll(".lang-option").forEach(o => o.classList.toggle("active", o === opt));
        }
        sw.classList.remove("open");
      });
    });
  });
  document.addEventListener("click", () => {
    langSwitchers.forEach(sw => sw.classList.remove("open"));
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── Accordion ── */
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const isOpen = item.classList.contains("open");
      /* Close all in same accordion */
      const accordion = item.closest(".accordion");
      if (accordion) {
        accordion.querySelectorAll(".accordion-item.open").forEach(open => {
          if (open !== item) open.classList.remove("open");
        });
      }
      item.classList.toggle("open", !isOpen);
    });
  });

  /* ── Tab system ── */
  document.querySelectorAll(".tabs").forEach(tabBar => {
    tabBar.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
        const parent = btn.closest(".tabs-wrapper") || btn.closest(".section") || document;
        tabBar.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        parent.querySelectorAll(".tab-panel").forEach(p => {
          p.classList.toggle("active", p.getAttribute("data-panel") === target);
        });
      });
    });
  });

  /* ── Contact / Support form ── */
  document.querySelectorAll(".ajax-form").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      /* Honeypot check */
      const hp = form.querySelector(".hp-field");
      if (hp && hp.value) return;

      const btn = form.querySelector('[type="submit"]');
      const successEl = form.querySelector(".form-success");
      btn.classList.add("loading");
      btn.disabled = true;

      /* Simulate send (replace with real fetch to your backend) */
      await new Promise(r => setTimeout(r, 1200));

      btn.classList.remove("loading");
      btn.disabled = false;
      form.reset();
      if (successEl) {
        successEl.classList.add("show");
        setTimeout(() => successEl.classList.remove("show"), 5000);
      }
      showToast("✓ Message sent! We'll get back to you shortly.", "success");
    });
  });

  /* ── Newsletter form ── */
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const input = form.querySelector("input");
      if (!input.value || !input.value.includes("@")) {
        showToast("Please enter a valid email address.", "error");
        return;
      }
      btn.textContent = "...";
      btn.disabled = true;
      await new Promise(r => setTimeout(r, 900));
      btn.textContent = "✓";
      setTimeout(() => {
        btn.textContent = btn.getAttribute("data-original-text") || "Subscribe";
        btn.disabled = false;
        input.value = "";
      }, 2000);
      showToast("✓ You're subscribed!", "success");
    });
  });
  /* Store original button text */
  document.querySelectorAll(".newsletter-form button").forEach(btn => {
    btn.setAttribute("data-original-text", btn.textContent);
  });

  /* ── Cookie banner ── */
  const cookieBanner = document.querySelector(".cookie-banner");
  if (cookieBanner && !localStorage.getItem("cookies_accepted")) {
    setTimeout(() => cookieBanner.classList.add("show"), 1500);
    cookieBanner.querySelector(".btn-accept-cookies")?.addEventListener("click", () => {
      localStorage.setItem("cookies_accepted", "1");
      cookieBanner.classList.remove("show");
    });
    cookieBanner.querySelector(".btn-decline-cookies")?.addEventListener("click", () => {
      cookieBanner.classList.remove("show");
    });
  }

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
        window.scrollTo({ top: target.offsetTop - offset - 16, behavior: "smooth" });
      }
    });
  });

  /* ── Pricing currency switcher ── */
  const currencyRates = { USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36 };
  const currencySymbols = { USD: "$", EUR: "€", GBP: "£", CAD: "C$" };
  document.querySelectorAll(".currency-selector").forEach(sel => {
    sel.addEventListener("change", () => {
      const cur = sel.value;
      const rate = currencyRates[cur] || 1;
      const sym  = currencySymbols[cur] || "$";
      document.querySelectorAll("[data-price-3m]").forEach(el => {
        const base = parseFloat(el.getAttribute("data-base-3m") || "0");
        el.textContent = sym + (base * rate).toFixed(2);
      });
      document.querySelectorAll("[data-price-6m]").forEach(el => {
        const base = parseFloat(el.getAttribute("data-base-6m") || "0");
        el.textContent = sym + (base * rate).toFixed(2);
      });
      document.querySelectorAll("[data-price-12m]").forEach(el => {
        const base = parseFloat(el.getAttribute("data-base-12m") || "0");
        el.textContent = sym + (base * rate).toFixed(2);
      });
    });
  });

  /* ── FAQ search ── */
  const faqSearch = document.querySelector(".faq-search");
  if (faqSearch) {
    faqSearch.addEventListener("input", () => {
      const q = faqSearch.value.toLowerCase();
      document.querySelectorAll(".accordion-item").forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? "" : "none";
      });
    });
  }

  /* ── Quality toggle (VIP / PRO server) ── */
  const qualityTabs = document.querySelectorAll(".quality-tab");
  if (qualityTabs.length) {
    const getCurrencyRate = () => {
      const rates = { USD:1, EUR:0.92, GBP:0.79, CAD:1.36 };
      const sym   = { USD:"$", EUR:"€", GBP:"£", CAD:"C$" };
      const sel   = document.querySelector(".currency-selector");
      const cur   = sel ? sel.value : "USD";
      return { rate: rates[cur] || 1, sym: sym[cur] || "$" };
    };
    qualityTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        qualityTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const quality = tab.getAttribute("data-quality");
        const { rate, sym } = getCurrencyRate();
        ["3m","6m","12m"].forEach(dur => {
          document.querySelectorAll(`[data-price-${dur}]`).forEach(el => {
            const base = parseFloat(el.getAttribute(`data-base-${dur}-${quality}`) || el.getAttribute(`data-base-${dur}`) || "0");
            el.textContent = sym + (base * rate).toFixed(2);
            el.setAttribute(`data-base-${dur}`, base);
          });
        });
        document.querySelectorAll(".plan-select-btn").forEach(btn => {
          const plan = btn.getAttribute("data-plan") || "";
          const dur  = plan.includes("3") ? "3m" : plan.includes("6") ? "6m" : "12m";
          const priceEl = btn.closest(".pricing-card")?.querySelector(`[data-price-${dur}]`);
          if (priceEl) btn.setAttribute("data-price", priceEl.getAttribute(`data-base-${dur}`));
        });
        document.querySelectorAll(".quality-server-label").forEach(el => {
          el.textContent = quality === "vip" ? "VIP Server" : "PRO Server";
          el.className   = quality === "vip"
            ? "quality-server-label badge badge--gold"
            : "quality-server-label badge badge--green";
        });
      });
    });
  }

  /* ── Announcement bar dismiss ── */
  document.querySelectorAll(".announcement-close").forEach(btn => {
    const bar = btn.closest(".announcement-bar");
    if (sessionStorage.getItem("trial_bar_closed") && bar) bar.remove();
    btn.addEventListener("click", () => {
      if (bar) {
        bar.style.overflow = "hidden";
        bar.style.transition = "max-height 0.3s ease, opacity 0.3s";
        bar.style.maxHeight = bar.scrollHeight + "px";
        requestAnimationFrame(() => { bar.style.maxHeight = "0"; bar.style.opacity = "0"; });
        setTimeout(() => bar.remove(), 320);
        sessionStorage.setItem("trial_bar_closed", "1");
      }
    });
  });

  /* ── Pricing plan selection in checkout ── */
  document.querySelectorAll(".plan-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const plan = btn.getAttribute("data-plan");
      const price = btn.getAttribute("data-price");
      sessionStorage.setItem("selected_plan", plan);
      sessionStorage.setItem("selected_price", price);
      window.location.href = "checkout.html";
    });
  });

  /* Restore selected plan on checkout page */
  const checkoutSummary = document.querySelector(".checkout-plan-summary");
  if (checkoutSummary) {
    const plan  = sessionStorage.getItem("selected_plan") || "12 Months";
    const price = sessionStorage.getItem("selected_price") || "[PRICE_12M]";
    const planEl  = checkoutSummary.querySelector(".checkout-plan-name");
    const priceEl = checkoutSummary.querySelector(".checkout-plan-price");
    if (planEl) planEl.textContent = plan;
    if (priceEl) priceEl.textContent = "$" + price;
  }

});

/* ── Toast notifications ── */
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : "✕"}</span>
    <span class="toast-text">${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4500);
}
