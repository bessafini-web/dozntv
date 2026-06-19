/* ============================================================
   PARTIALS.JS — Inject shared header & footer into every page
   ============================================================ */

const TICKER_HTML = `
<div class="channels-ticker" aria-label="Available channels" role="marquee" aria-live="off">
  <div class="ticker-fade ticker-fade--left"  aria-hidden="true"></div>
  <div class="ticker-fade ticker-fade--right" aria-hidden="true"></div>
  <div class="ticker-track">
    <div class="ticker-inner">
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nat-geo.svg" alt="Nat Geo"></span><span class="ch-name">Nat Geo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports.svg" alt="beIN Sports"></span><span class="ch-name">beIN Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/amc.svg" alt="AMC"></span><span class="ch-name">AMC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/abc.svg" alt="ABC"></span><span class="ch-name">ABC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/a-and-e.svg" alt="A&amp;E"></span><span class="ch-name">A&amp;E</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/eurosport.svg" alt="Eurosport"></span><span class="ch-name">Eurosport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/disney-plus.svg" alt="Disney+"></span><span class="ch-name">Disney+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/prime-video.svg" alt="Prime Video"></span><span class="ch-name">Prime Video</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bbc-news.svg" alt="BBC News"></span><span class="ch-name">BBC News</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/dazn.svg" alt="DAZN"></span><span class="ch-name">DAZN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/netflix.svg" alt="Netflix"></span><span class="ch-name">Netflix</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hbo.svg" alt="HBO"></span><span class="ch-name">HBO</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/espn.svg" alt="ESPN"></span><span class="ch-name">ESPN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sky-sports.svg" alt="Sky Sports"></span><span class="ch-name">Sky Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fox-sports.svg" alt="Fox Sports"></span><span class="ch-name">Fox Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/canal-plus.svg" alt="Canal+"></span><span class="ch-name">Canal+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mbc.svg" alt="MBC"></span><span class="ch-name">MBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/al-jazeera.svg" alt="Al Jazeera"></span><span class="ch-name">Al Jazeera</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cnn.svg" alt="CNN"></span><span class="ch-name">CNN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/discovery.svg" alt="Discovery"></span><span class="ch-name">Discovery</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cartoon-network.svg" alt="Cartoon Network"></span><span class="ch-name">Cartoon Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mtv.svg" alt="MTV"></span><span class="ch-name">MTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/paramount-plus.svg" alt="Paramount+"></span><span class="ch-name">Paramount+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tnt.svg" alt="TNT"></span><span class="ch-name">TNT</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/showtime.svg" alt="Showtime"></span><span class="ch-name">Showtime</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fx.svg" alt="FX"></span><span class="ch-name">FX</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sport1.svg" alt="Sport 1"></span><span class="ch-name">Sport 1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rmc-sport.svg" alt="RMC Sport"></span><span class="ch-name">RMC Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nbc.svg" alt="NBC"></span><span class="ch-name">NBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cbs.svg" alt="CBS"></span><span class="ch-name">CBS</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/history.svg" alt="History"></span><span class="ch-name">History</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/animal-planet.svg" alt="Animal Planet"></span><span class="ch-name">Animal Planet</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tlc.svg" alt="TLC"></span><span class="ch-name">TLC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/comedy-central.svg" alt="Comedy Central"></span><span class="ch-name">Comedy Central</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/syfy.svg" alt="Syfy"></span><span class="ch-name">Syfy</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bt-sport.svg" alt="BT Sport"></span><span class="ch-name">BT Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/osn.svg" alt="OSN"></span><span class="ch-name">OSN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tv5-monde.svg" alt="TV5 Monde"></span><span class="ch-name">TV5 Monde</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rai.svg" alt="RAI"></span><span class="ch-name">RAI</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tf1.svg" alt="TF1"></span><span class="ch-name">TF1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/france24.svg" alt="France 24"></span><span class="ch-name">France 24</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/ard.svg" alt="ARD"></span><span class="ch-name">ARD</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/antena3.svg" alt="Antena 3"></span><span class="ch-name">Antena 3</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports-2.svg" alt="beIN Sports 2"></span><span class="ch-name">beIN Sports 2</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/e-entertainment.svg" alt="E!"></span><span class="ch-name">E! Entertainment</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/food-network.svg" alt="Food Network"></span><span class="ch-name">Food Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hgtv.svg" alt="HGTV"></span><span class="ch-name">HGTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bravo.svg" alt="Bravo"></span><span class="ch-name">Bravo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/telemundo.svg" alt="Telemundo"></span><span class="ch-name">Telemundo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/univision.svg" alt="Univision"></span><span class="ch-name">Univision</span></span>
      <!-- duplicate set for seamless loop -->
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nat-geo.svg" alt="Nat Geo"></span><span class="ch-name">Nat Geo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports.svg" alt="beIN Sports"></span><span class="ch-name">beIN Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/amc.svg" alt="AMC"></span><span class="ch-name">AMC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/abc.svg" alt="ABC"></span><span class="ch-name">ABC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/a-and-e.svg" alt="A&amp;E"></span><span class="ch-name">A&amp;E</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/eurosport.svg" alt="Eurosport"></span><span class="ch-name">Eurosport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/disney-plus.svg" alt="Disney+"></span><span class="ch-name">Disney+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/prime-video.svg" alt="Prime Video"></span><span class="ch-name">Prime Video</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bbc-news.svg" alt="BBC News"></span><span class="ch-name">BBC News</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/dazn.svg" alt="DAZN"></span><span class="ch-name">DAZN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/netflix.svg" alt="Netflix"></span><span class="ch-name">Netflix</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hbo.svg" alt="HBO"></span><span class="ch-name">HBO</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/espn.svg" alt="ESPN"></span><span class="ch-name">ESPN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sky-sports.svg" alt="Sky Sports"></span><span class="ch-name">Sky Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fox-sports.svg" alt="Fox Sports"></span><span class="ch-name">Fox Sports</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/canal-plus.svg" alt="Canal+"></span><span class="ch-name">Canal+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mbc.svg" alt="MBC"></span><span class="ch-name">MBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/al-jazeera.svg" alt="Al Jazeera"></span><span class="ch-name">Al Jazeera</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cnn.svg" alt="CNN"></span><span class="ch-name">CNN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/discovery.svg" alt="Discovery"></span><span class="ch-name">Discovery</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cartoon-network.svg" alt="Cartoon Network"></span><span class="ch-name">Cartoon Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/mtv.svg" alt="MTV"></span><span class="ch-name">MTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/paramount-plus.svg" alt="Paramount+"></span><span class="ch-name">Paramount+</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tnt.svg" alt="TNT"></span><span class="ch-name">TNT</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/showtime.svg" alt="Showtime"></span><span class="ch-name">Showtime</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/fx.svg" alt="FX"></span><span class="ch-name">FX</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/sport1.svg" alt="Sport 1"></span><span class="ch-name">Sport 1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rmc-sport.svg" alt="RMC Sport"></span><span class="ch-name">RMC Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/nbc.svg" alt="NBC"></span><span class="ch-name">NBC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/cbs.svg" alt="CBS"></span><span class="ch-name">CBS</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/history.svg" alt="History"></span><span class="ch-name">History</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/animal-planet.svg" alt="Animal Planet"></span><span class="ch-name">Animal Planet</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tlc.svg" alt="TLC"></span><span class="ch-name">TLC</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/comedy-central.svg" alt="Comedy Central"></span><span class="ch-name">Comedy Central</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/syfy.svg" alt="Syfy"></span><span class="ch-name">Syfy</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bt-sport.svg" alt="BT Sport"></span><span class="ch-name">BT Sport</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/osn.svg" alt="OSN"></span><span class="ch-name">OSN</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tv5-monde.svg" alt="TV5 Monde"></span><span class="ch-name">TV5 Monde</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/rai.svg" alt="RAI"></span><span class="ch-name">RAI</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/tf1.svg" alt="TF1"></span><span class="ch-name">TF1</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/france24.svg" alt="France 24"></span><span class="ch-name">France 24</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/ard.svg" alt="ARD"></span><span class="ch-name">ARD</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/antena3.svg" alt="Antena 3"></span><span class="ch-name">Antena 3</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bein-sports-2.svg" alt="beIN Sports 2"></span><span class="ch-name">beIN Sports 2</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/e-entertainment.svg" alt="E!"></span><span class="ch-name">E! Entertainment</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/food-network.svg" alt="Food Network"></span><span class="ch-name">Food Network</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/hgtv.svg" alt="HGTV"></span><span class="ch-name">HGTV</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/bravo.svg" alt="Bravo"></span><span class="ch-name">Bravo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/telemundo.svg" alt="Telemundo"></span><span class="ch-name">Telemundo</span></span>
      <span class="ch-logo"><span class="ch-icon"><img src="img/channels/univision.svg" alt="Univision"></span><span class="ch-name">Univision</span></span>
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
      <a href="#" class="social-icon-btn" data-whatsapp aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.522 5.845L.057 23.617a.75.75 0 0 0 .901.919l5.965-1.444A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.362-.214-3.742.906.938-3.637-.234-.375A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
      <a href="#" class="social-icon-btn" data-telegram aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
      <a href="#" class="social-icon-btn" data-instagram aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo"><div class="logo-icon" aria-hidden="true">▶</div><span data-brand>DOZNTV</span></a>
        <p class="footer-desc mt-4" data-i18n="footer_desc">Premium streaming experience for everyone. Quality, stability, and support you can count on.</p>
        <div class="footer-social-links mt-6">
          <a href="#" class="social-icon-btn" data-whatsapp aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.522 5.845L.057 23.617a.75.75 0 0 0 .901.919l5.965-1.444A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.362-.214-3.742.906.938-3.637-.234-.375A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
          <a href="#" class="social-icon-btn" data-telegram aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
          <a href="#" class="social-icon-btn" data-instagram aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          <a href="#" class="social-icon-btn" data-facebook aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="#" class="social-icon-btn" data-tiktok aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
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
      <p class="footer-copy">© <span class="current-year"></span> <span data-brand>DOZNTV</span>. <span data-i18n="footer_copy">All rights reserved.</span></p>
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
<a href="#" class="sticky-whatsapp" data-whatsapp aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.522 5.845L.057 23.617a.75.75 0 0 0 .901.919l5.965-1.444A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.362-.214-3.742.906.938-3.637-.234-.375A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
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

  /* Wire social links from BRAND config */
  if (typeof BRAND !== "undefined") {
    document.querySelectorAll("[data-telegram]").forEach(el => { el.href = BRAND.telegram; });
    document.querySelectorAll("[data-instagram]").forEach(el => { el.href = BRAND.instagram; });
    document.querySelectorAll("[data-facebook]").forEach(el => { el.href = BRAND.facebook; });
    document.querySelectorAll("[data-tiktok]").forEach(el => { el.href = BRAND.tiktok; });
  }

  /* Highlight active nav */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    if (href === currentPage) link.classList.add("active");
  });
});
