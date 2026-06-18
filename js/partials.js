/* ============================================================
   PARTIALS.JS — Inject shared header & footer into every page
   ============================================================ */

const TICKER_HTML = `
<div class="channels-ticker" aria-label="Available channels" role="marquee" aria-live="off">
  <div class="ticker-fade ticker-fade--left"  aria-hidden="true"></div>
  <div class="ticker-fade ticker-fade--right" aria-hidden="true"></div>
  <div class="ticker-track">
    <div class="ticker-inner">
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nat-geo.png" alt="Nat Geo"></span><span class="ch-name">Nat Geo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports.png" alt="beIN Sports"></span><span class="ch-name">beIN Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/amc.png" alt="AMC"></span><span class="ch-name">AMC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/abc.png" alt="ABC"></span><span class="ch-name">ABC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/a-and-e.png" alt="A&amp;E"></span><span class="ch-name">A&amp;E</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/eurosport.png" alt="Eurosport"></span><span class="ch-name">Eurosport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/disney-plus.png" alt="Disney+"></span><span class="ch-name">Disney+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/prime-video.png" alt="Prime Video"></span><span class="ch-name">Prime Video</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bbc-news.png" alt="BBC News"></span><span class="ch-name">BBC News</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/dazn.png" alt="DAZN"></span><span class="ch-name">DAZN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/netflix.png" alt="Netflix"></span><span class="ch-name">Netflix</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hbo.png" alt="HBO"></span><span class="ch-name">HBO</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/espn.png" alt="ESPN"></span><span class="ch-name">ESPN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sky-sports.png" alt="Sky Sports"></span><span class="ch-name">Sky Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fox-sports.png" alt="Fox Sports"></span><span class="ch-name">Fox Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/canal-plus.png" alt="Canal+"></span><span class="ch-name">Canal+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mbc.png" alt="MBC"></span><span class="ch-name">MBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/al-jazeera.png" alt="Al Jazeera"></span><span class="ch-name">Al Jazeera</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cnn.png" alt="CNN"></span><span class="ch-name">CNN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/discovery.png" alt="Discovery"></span><span class="ch-name">Discovery</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cartoon-network.png" alt="Cartoon Network"></span><span class="ch-name">Cartoon Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mtv.png" alt="MTV"></span><span class="ch-name">MTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/paramount-plus.png" alt="Paramount+"></span><span class="ch-name">Paramount+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tnt.png" alt="TNT"></span><span class="ch-name">TNT</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/showtime.png" alt="Showtime"></span><span class="ch-name">Showtime</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fx.png" alt="FX"></span><span class="ch-name">FX</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sport1.png" alt="Sport 1"></span><span class="ch-name">Sport 1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rmc-sport.png" alt="RMC Sport"></span><span class="ch-name">RMC Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nbc.png" alt="NBC"></span><span class="ch-name">NBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cbs.png" alt="CBS"></span><span class="ch-name">CBS</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/history.png" alt="History"></span><span class="ch-name">History</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/animal-planet.png" alt="Animal Planet"></span><span class="ch-name">Animal Planet</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tlc.png" alt="TLC"></span><span class="ch-name">TLC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/comedy-central.png" alt="Comedy Central"></span><span class="ch-name">Comedy Central</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/syfy.png" alt="Syfy"></span><span class="ch-name">Syfy</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bt-sport.png" alt="BT Sport"></span><span class="ch-name">BT Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/osn.png" alt="OSN"></span><span class="ch-name">OSN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tv5-monde.png" alt="TV5 Monde"></span><span class="ch-name">TV5 Monde</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rai.png" alt="RAI"></span><span class="ch-name">RAI</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tf1.png" alt="TF1"></span><span class="ch-name">TF1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/france24.png" alt="France 24"></span><span class="ch-name">France 24</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/ard.png" alt="ARD"></span><span class="ch-name">ARD</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/antena3.png" alt="Antena 3"></span><span class="ch-name">Antena 3</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports-2.png" alt="beIN Sports 2"></span><span class="ch-name">beIN Sports 2</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/e-entertainment.png" alt="E!"></span><span class="ch-name">E! Entertainment</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/food-network.png" alt="Food Network"></span><span class="ch-name">Food Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hgtv.png" alt="HGTV"></span><span class="ch-name">HGTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bravo.png" alt="Bravo"></span><span class="ch-name">Bravo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/telemundo.png" alt="Telemundo"></span><span class="ch-name">Telemundo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/univision.png" alt="Univision"></span><span class="ch-name">Univision</span></span>
      <!-- duplicate set for seamless loop -->
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nat-geo.png" alt="Nat Geo"></span><span class="ch-name">Nat Geo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports.png" alt="beIN Sports"></span><span class="ch-name">beIN Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/amc.png" alt="AMC"></span><span class="ch-name">AMC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/abc.png" alt="ABC"></span><span class="ch-name">ABC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/a-and-e.png" alt="A&amp;E"></span><span class="ch-name">A&amp;E</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/eurosport.png" alt="Eurosport"></span><span class="ch-name">Eurosport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/disney-plus.png" alt="Disney+"></span><span class="ch-name">Disney+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/prime-video.png" alt="Prime Video"></span><span class="ch-name">Prime Video</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bbc-news.png" alt="BBC News"></span><span class="ch-name">BBC News</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/dazn.png" alt="DAZN"></span><span class="ch-name">DAZN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/netflix.png" alt="Netflix"></span><span class="ch-name">Netflix</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hbo.png" alt="HBO"></span><span class="ch-name">HBO</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/espn.png" alt="ESPN"></span><span class="ch-name">ESPN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sky-sports.png" alt="Sky Sports"></span><span class="ch-name">Sky Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fox-sports.png" alt="Fox Sports"></span><span class="ch-name">Fox Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/canal-plus.png" alt="Canal+"></span><span class="ch-name">Canal+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mbc.png" alt="MBC"></span><span class="ch-name">MBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/al-jazeera.png" alt="Al Jazeera"></span><span class="ch-name">Al Jazeera</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cnn.png" alt="CNN"></span><span class="ch-name">CNN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/discovery.png" alt="Discovery"></span><span class="ch-name">Discovery</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cartoon-network.png" alt="Cartoon Network"></span><span class="ch-name">Cartoon Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mtv.png" alt="MTV"></span><span class="ch-name">MTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/paramount-plus.png" alt="Paramount+"></span><span class="ch-name">Paramount+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tnt.png" alt="TNT"></span><span class="ch-name">TNT</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/showtime.png" alt="Showtime"></span><span class="ch-name">Showtime</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fx.png" alt="FX"></span><span class="ch-name">FX</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sport1.png" alt="Sport 1"></span><span class="ch-name">Sport 1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rmc-sport.png" alt="RMC Sport"></span><span class="ch-name">RMC Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nbc.png" alt="NBC"></span><span class="ch-name">NBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cbs.png" alt="CBS"></span><span class="ch-name">CBS</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/history.png" alt="History"></span><span class="ch-name">History</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/animal-planet.png" alt="Animal Planet"></span><span class="ch-name">Animal Planet</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tlc.png" alt="TLC"></span><span class="ch-name">TLC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/comedy-central.png" alt="Comedy Central"></span><span class="ch-name">Comedy Central</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/syfy.png" alt="Syfy"></span><span class="ch-name">Syfy</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bt-sport.png" alt="BT Sport"></span><span class="ch-name">BT Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/osn.png" alt="OSN"></span><span class="ch-name">OSN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tv5-monde.png" alt="TV5 Monde"></span><span class="ch-name">TV5 Monde</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rai.png" alt="RAI"></span><span class="ch-name">RAI</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tf1.png" alt="TF1"></span><span class="ch-name">TF1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/france24.png" alt="France 24"></span><span class="ch-name">France 24</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/ard.png" alt="ARD"></span><span class="ch-name">ARD</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/antena3.png" alt="Antena 3"></span><span class="ch-name">Antena 3</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports-2.png" alt="beIN Sports 2"></span><span class="ch-name">beIN Sports 2</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/e-entertainment.png" alt="E!"></span><span class="ch-name">E! Entertainment</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/food-network.png" alt="Food Network"></span><span class="ch-name">Food Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hgtv.png" alt="HGTV"></span><span class="ch-name">HGTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bravo.png" alt="Bravo"></span><span class="ch-name">Bravo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/telemundo.png" alt="Telemundo"></span><span class="ch-name">Telemundo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/univision.png" alt="Univision"></span><span class="ch-name">Univision</span></span>
    </div>
    </div>
    </div>
    </div>
  </div>
</div>
`;

const HEADER_HTML = `
<a href="index.html" class="skip-link">Skip to content</a>
<header class="header" role="banner">
  <div class="header-inner">
    <a href="index.html" class="logo" aria-label="DOZNTV Home">
      <img src="img/logo.png" alt="DOZNTV" class="logo-img">
    </a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="features.html" class="nav-link" data-i18n="nav_features">Features</a>
      <a href="pricing.html"  class="nav-link" data-i18n="nav_pricing">Pricing</a>
      <a href="devices.html"  class="nav-link" data-i18n="nav_devices">Devices</a>
      <a href="setup.html"    class="nav-link" data-i18n="nav_setup">Setup</a>
      <a href="faq.html"      class="nav-link" data-i18n="nav_faq">FAQ</a>
      <a href="reseller.html" class="nav-link" data-i18n="nav_reseller">Reseller</a>
      <a href="contact.html"  class="nav-link" data-i18n="nav_contact">Contact</a>
    </nav>
    <div class="header-actions">
      <div class="lang-switcher" role="navigation" aria-label="Language selector">
        <button class="lang-btn" aria-haspopup="listbox" aria-expanded="false">
          <span class="flag">🌐</span>
          <span class="current-lang">EN</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="lang-dropdown" role="listbox">
          <button class="lang-option active" data-lang="en"><span class="flag">🇬🇧</span><span class="lang-name">English</span></button>
          <button class="lang-option" data-lang="fr"><span class="flag">🇫🇷</span><span class="lang-name">Français</span></button>
          <button class="lang-option" data-lang="ar"><span class="flag">🇸🇦</span><span class="lang-name">العربية</span></button>
          <button class="lang-option" data-lang="es"><span class="flag">🇪🇸</span><span class="lang-name">Español</span></button>
          <button class="lang-option" data-lang="pt"><span class="flag">🇧🇷</span><span class="lang-name">Português</span></button>
        </div>
      </div>
      <a href="pricing.html" class="btn btn--ghost btn--sm nav-trial-btn">🎁 Free Trial</a>
      <a href="pricing.html" class="btn btn--primary" data-i18n="nav_cta">Get Started</a>
      <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
  <div class="mobile-nav-links">
    <a href="features.html" class="mobile-nav-link" data-i18n="nav_features">Features</a>
    <a href="pricing.html"  class="mobile-nav-link" data-i18n="nav_pricing">Pricing</a>
    <a href="devices.html"  class="mobile-nav-link" data-i18n="nav_devices">Devices</a>
    <a href="setup.html"    class="mobile-nav-link" data-i18n="nav_setup">Setup</a>
    <a href="faq.html"      class="mobile-nav-link" data-i18n="nav_faq">FAQ</a>
    <a href="reseller.html" class="mobile-nav-link" data-i18n="nav_reseller">Reseller</a>
    <a href="contact.html"  class="mobile-nav-link" data-i18n="nav_contact">Contact</a>
    <a href="pricing.html"  class="mobile-nav-link mobile-trial-link">🎁 Free Trial 24H</a>
  </div>
  <div class="mobile-menu-footer">
    <a href="pricing.html" class="btn btn--primary btn--lg" data-i18n="nav_cta">Get Started</a>
    <div class="mobile-menu-socials">
      <a href="#" class="social-icon-btn" data-whatsapp aria-label="WhatsApp">💬</a>
      <a href="#" class="social-icon-btn" aria-label="Telegram">✈</a>
      <a href="#" class="social-icon-btn" aria-label="Instagram">📷</a>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo"><div class="logo-icon" aria-hidden="true">▶</div><span data-brand>[BRAND_NAME]</span></a>
        <p class="footer-desc mt-4" data-i18n="footer_desc">Premium streaming experience for everyone. Quality, stability, and support you can count on.</p>
        <div class="footer-social-links mt-6">
          <a href="#" class="social-icon-btn" data-whatsapp aria-label="WhatsApp">💬</a>
          <a href="#" class="social-icon-btn" aria-label="Telegram">✈</a>
          <a href="#" class="social-icon-btn" aria-label="Instagram">📷</a>
          <a href="#" class="social-icon-btn" aria-label="Facebook">👥</a>
          <a href="#" class="social-icon-btn" aria-label="TikTok">🎵</a>
        </div>
      </div>
      <div>
        <h3 class="footer-col-title" data-i18n="footer_quick">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="index.html"    class="footer-link" data-i18n="footer_home">Home</a></li>
          <li><a href="features.html" class="footer-link" data-i18n="footer_features">Features</a></li>
          <li><a href="pricing.html"  class="footer-link" data-i18n="footer_pricing">Pricing</a></li>
          <li><a href="devices.html"  class="footer-link" data-i18n="footer_devices">Devices</a></li>
          <li><a href="about.html"    class="footer-link">About</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-col-title" data-i18n="footer_support">Support</h3>
        <ul class="footer-links">
          <li><a href="faq.html"     class="footer-link" data-i18n="footer_faq">FAQ</a></li>
          <li><a href="setup.html"   class="footer-link" data-i18n="footer_setup">Setup Guides</a></li>
          <li><a href="contact.html" class="footer-link" data-i18n="footer_contact">Contact</a></li>
          <li><a href="status.html"  class="footer-link" data-i18n="footer_status">Service Status</a></li>
          <li><a href="trust.html"   class="footer-link">Trust Center</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-col-title" data-i18n="footer_legal">Legal</h3>
        <ul class="footer-links">
          <li><a href="privacy-policy.html"   class="footer-link" data-i18n="footer_privacy">Privacy Policy</a></li>
          <li><a href="terms-of-service.html" class="footer-link" data-i18n="footer_terms">Terms of Service</a></li>
          <li><a href="refund-policy.html"    class="footer-link" data-i18n="footer_refund">Refund Policy</a></li>
          <li><a href="cookie-policy.html"    class="footer-link" data-i18n="footer_cookies">Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-col-title" data-i18n="footer_connect">Connect</h3>
        <p class="small text-muted mb-4">Get updates and streaming tips straight to your inbox.</p>
        <form class="footer-newsletter newsletter-form" aria-label="Newsletter signup">
          <input type="email" data-i18n-placeholder="footer_newsletter_ph" placeholder="Enter your email" aria-label="Email address" required>
          <button type="submit" data-i18n="footer_newsletter_btn">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="container">
    <div class="footer-bottom">
      <p class="footer-copy">© <span class="current-year"></span> <span data-brand>[BRAND_NAME]</span>. <span data-i18n="footer_copy">All rights reserved.</span></p>
      <div class="footer-payment-icons" aria-label="Accepted payment methods">
        <span class="payment-icon">VISA</span>
        <span class="payment-icon">MC</span>
        <span class="payment-icon">AMEX</span>
        <span class="payment-icon">PayPal</span>
        <span class="payment-icon">Crypto</span>
      </div>
    </div>
  </div>
</footer>
<div class="sticky-mobile-cta"><a href="pricing.html" class="btn btn--primary" data-i18n="nav_cta">Get Started</a></div>
<a href="#" class="sticky-whatsapp" data-whatsapp aria-label="Chat on WhatsApp">💬</a>
<div class="cookie-banner" role="dialog" aria-label="Cookie consent">
  <p class="cookie-text">We use cookies to improve your experience. By continuing, you agree to our <a href="cookie-policy.html">Cookie Policy</a>.</p>
  <div class="cookie-actions">
    <button class="btn btn--outline btn--sm btn-decline-cookies">Decline</button>
    <button class="btn btn--primary btn--sm btn-accept-cookies">Accept</button>
  </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
  /* Inject ticker (skip on index.html — it has its own) */
  const isIndex = (window.location.pathname.split("/").pop() || "index.html") === "index.html";
  if (!isIndex && !document.querySelector(".channels-ticker")) {
    document.body.insertAdjacentHTML("afterbegin", TICKER_HTML);
  }

  /* Inject header */
  const headerTarget = document.getElementById("header-placeholder");
  if (headerTarget) headerTarget.outerHTML = HEADER_HTML;

  /* Inject footer */
  const footerTarget = document.getElementById("footer-placeholder");
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  /* Set year */
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* Highlight active nav */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    if (href === currentPage) link.classList.add("active");
  });
});
