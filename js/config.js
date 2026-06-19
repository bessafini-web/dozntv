/* ============================================================
   BRAND CONFIG — Replace all [PLACEHOLDER] values before deploy
   ============================================================ */

const BRAND = {
  name:        "DOZNTV",
  domain:      "dozntv.com",
  tagline:     "Premium Streaming — DOZNTV",
  email:       "[SUPPORT_EMAIL]",
  whatsapp:    "https://wa.me/447882737006",
  instagram:   "[INSTAGRAM]",
  twitter:     "[TWITTER]",
  telegram:    "[TELEGRAM]",
  facebook:    "[FACEBOOK]",
  tiktok:      "[TIKTOK]",
  plan3m_pro:  "24.99",
  plan6m_pro:  "34.99",
  plan12m_pro: "59.99",
  plan3m_vip:  "45.99",
  plan6m_vip:  "64.99",
  plan12m_vip: "109.99",
  currency:    "USD",
  currencySymbol: "$",
};

/* Inject brand name everywhere */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-brand]").forEach(el => {
    el.textContent = BRAND.name;
  });
  document.querySelectorAll("[data-brand-tagline]").forEach(el => {
    el.textContent = BRAND.tagline;
  });
  /* Default pricing: PRO server */
  document.querySelectorAll("[data-price-3m]").forEach(el => {
    el.textContent = BRAND.currencySymbol + BRAND.plan3m_pro;
    el.setAttribute("data-base-3m", BRAND.plan3m_pro);
    el.setAttribute("data-base-3m-pro", BRAND.plan3m_pro);
    el.setAttribute("data-base-3m-vip", BRAND.plan3m_vip);
  });
  document.querySelectorAll("[data-price-6m]").forEach(el => {
    el.textContent = BRAND.currencySymbol + BRAND.plan6m_pro;
    el.setAttribute("data-base-6m", BRAND.plan6m_pro);
    el.setAttribute("data-base-6m-pro", BRAND.plan6m_pro);
    el.setAttribute("data-base-6m-vip", BRAND.plan6m_vip);
  });
  document.querySelectorAll("[data-price-12m]").forEach(el => {
    el.textContent = BRAND.currencySymbol + BRAND.plan12m_pro;
    el.setAttribute("data-base-12m", BRAND.plan12m_pro);
    el.setAttribute("data-base-12m-pro", BRAND.plan12m_pro);
    el.setAttribute("data-base-12m-vip", BRAND.plan12m_vip);
  });
  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    el.href = BRAND.whatsapp;
  });
  document.querySelectorAll("[data-email]").forEach(el => {
    el.href = "mailto:" + BRAND.email;
    el.textContent = BRAND.email;
  });
});
