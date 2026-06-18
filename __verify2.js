const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();

  // ── DESKTOP ──
  const desktop = await browser.newPage();
  await desktop.setViewportSize({ width: 1440, height: 900 });

  await desktop.goto("http://localhost:8765/devices.html", { waitUntil: "networkidle" });
  await desktop.waitForTimeout(800);
  await desktop.screenshot({ path: "C:/Users/Latifa/Desktop/v-devices-desktop.png" });

  await desktop.goto("http://localhost:8765/setup.html", { waitUntil: "networkidle" });
  await desktop.waitForTimeout(800);
  await desktop.screenshot({ path: "C:/Users/Latifa/Desktop/v-setup-desktop.png" });

  await desktop.goto("http://localhost:8765/index.html", { waitUntil: "networkidle" });
  await desktop.waitForTimeout(1200);
  await desktop.screenshot({ path: "C:/Users/Latifa/Desktop/v-hero-desktop.png" });

  // ── MOBILE (iPhone 13) ──
  const mobile = await browser.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.emulateMedia({ media: "screen" });

  await mobile.goto("http://localhost:8765/index.html", { waitUntil: "networkidle" });
  await mobile.waitForTimeout(1200);
  await mobile.screenshot({ path: "C:/Users/Latifa/Desktop/v-hero-mobile.png" });

  await mobile.goto("http://localhost:8765/devices.html", { waitUntil: "networkidle" });
  await mobile.waitForTimeout(800);
  await mobile.screenshot({ path: "C:/Users/Latifa/Desktop/v-devices-mobile.png" });

  await mobile.goto("http://localhost:8765/pricing.html", { waitUntil: "networkidle" });
  await mobile.waitForTimeout(800);
  await mobile.screenshot({ path: "C:/Users/Latifa/Desktop/v-pricing-mobile.png" });

  await browser.close();
  console.log("OK");
})();
