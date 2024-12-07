document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieOverlay = document.getElementById('cookie-overlay');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function showCookieConsent() {
        cookieOverlay.style.display = 'block';
        cookieConsent.style.display = 'block';
    }

    function hideCookieConsent() {
        cookieOverlay.style.display = 'none';
        cookieConsent.style.display = 'none';
    }

    if (!getCookie('cookieConsent')) {
        showCookieConsent();
    }

    acceptBtn.addEventListener('click', function() {
        setCookie('cookieConsent', 'true', 365);
        setCookie('analyticsCookies', 'true', 365);
        setCookie('marketingCookies', 'true', 365);
        hideCookieConsent();
    });

    rejectBtn.addEventListener('click', function() {
        setCookie('cookieConsent', 'false', 365);
        setCookie('analyticsCookies', 'false', 365);
        setCookie('marketingCookies', 'false', 365);
        hideCookieConsent();
    });
});