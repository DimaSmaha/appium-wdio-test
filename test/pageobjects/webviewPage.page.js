const Footer = require('./footer.page');

class WebViewPage extends Footer {
    get viewOnGH () {
        return $('//android.widget.TextView[@text="View on GitHub"]');
    }

}

module.exports = new WebViewPage();