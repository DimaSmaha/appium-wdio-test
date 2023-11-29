const Footer = require("./footer.page");

class WebViewPage extends Footer {
  get viewOnGH() {
    return $('//*[@text="View on GitHub"]');
  }
}

module.exports = new WebViewPage();
