const { $ } = require('@wdio/globals')

module.exports = class Footer {
    get loginWidget() {
        return $('//*[@content-desc="Login"]');
    }

    get webviewWidget() {
        return $('//android.widget.TextView[@text="Webview"]');
    }

    get swipeWidget() {
        return $('//android.widget.TextView[@text="Swipe"]');
    }
}