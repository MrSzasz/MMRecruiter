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


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'ENVIANDO...';

   const serviceID = 'service_09cark9';
   const templateID = 'template_lpqu7kb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
      alert('Mensaje enviado correctamente!');
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });
});