document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("venividivincenzo");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('serviceid-emailjs-script', 'templateid-emailjs', this)
            .then(function() {
                alert('SUCCESS!');
            }, function(error) {
                alert('FAILED...', error);
            });
    });
});
