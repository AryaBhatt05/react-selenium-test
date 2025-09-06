const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver"); // <-- ensures local chromedriver is used

describe("React App E2E", function () {
  this.timeout(60000); // extend timeout to 60s

  let driver;

  before(async function () {
    let options = new chrome.Options();
    options.addArguments("--headless=new"); // run headless (no browser window)
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--disable-gpu");        // 👈 prevents GPU errors
    options.addArguments("--disable-software-rasterizer");
    

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    await driver.get("http://localhost:3000");
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it("shows the app title", async function () {
    const title = await driver.getTitle();
    console.log("Page Title:", title);
  });
});
