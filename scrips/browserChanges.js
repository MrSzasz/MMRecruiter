let detector = new MobileDetect(window.navigator.userAgent);

let browserName = (function (agent) {
    switch (true) {
        case agent.indexOf("firefox") > -1:
            return "Mozilla Firefox";
        default:
            return "other";
    }
})(window.navigator.userAgent.toLowerCase());

if (detector.phone() != null) {

    if (detector.userAgent() != 'Chrome' && detector.userAgent() != 'Firefox') {
        $('.mainImg').css('background-attachment', 'scroll');
    } else if (detector.userAgent() == 'Firefox') {
        $('.hasJs').toggleClass('blur', true);
    }

} else if (browserName == 'Mozilla Firefox') {
    $('.hasJs').toggleClass('blur', true);
}
