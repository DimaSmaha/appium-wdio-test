const webviewPage = require("../pageobjects/webviewPage.page");

describe("Webview Page", () => {
  it("should verify webview page", async () => {
    (await webviewPage.webviewWidget).click();
    await expect(webviewPage.viewOnGH).toBeDisplayed();
  });
});
