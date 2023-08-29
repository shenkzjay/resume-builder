import { resolve } from "path";
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1600,
    height: 1000,
    deviceScaleFactor: 1,
  });

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });

  await page.screenshot({ path: "puppet.jpg" });

  await Promise.all([
    page.waitForNavigation(),
    page.waitForSelector("button"),
    page.click("button"),
  ]);

  await page.waitForSelector("div[data-testid='templates']");

  const template = await page.$$eval('div[data-testid="templates"]', (elem) => {
    return elem;
  });

  if (template.length > 0) {
    console.log("hey", template[0]);
    template[0].click();
    await page.waitForNavigation(); // Wait for navigation to complete
  }

  console.log(template > 0);

  await page.screenshot({ path: "puppetti.jpg" });

  await browser.close();
})();
