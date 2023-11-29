const { $ } = require("@wdio/globals");

module.exports = class Footer {
  get loginWidget() {
    return $('//*[@content-desc="Login"]');
  }

  get webviewWidget() {
    return $('//*[@text="Webview"]');
  }

  get swipeWidget() {
    return $('//*[@text="Swipe"]');
  }
};
