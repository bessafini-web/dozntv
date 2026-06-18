/* ============================================================
   BRAND CONFIG — Replace all [PLACEHOLDER] values before deploy
   ============================================================ */

const BRAND = {
  name:        "DOZNTV",
  domain:      "[DOMAIN]",
  tagline:     "Premium Streaming — DOZNTV",
  email:       "[SUPPORT_EMAIL]",
  whatsapp:    "[WHATSAPP_LINK]",
  instagram:   "[INSTAGRAM]",
  twitter:     "[TWITTER]",
  telegram:    "[TELEGRAM]",
  facebook:    "[FACEBOOK]",
  tiktok:      "[TIKTOK]",
  plan3m_pro:  "[PRICE_3M_PRO]",
  plan6m_pro:  "[PRICE_6M_PRO]",
  plan12m_pro: "[PRICE_12M_PRO]",
  plan3m_vip:  "[PRICE_3M_VIP]",
  plan6m_vip:  "[PRICE_6M_VIP]",
  plan12m_vip: "[PRICE_12M_VIP]",
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
