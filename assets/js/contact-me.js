document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('YNBSaMRiAidsU-Nha');
  
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = {
        'name': this['name'].value,
        'email': this['email'].value,
        'message': this['message'].value
      };
  
      emailjs.send('serviceid-emailjs-script', 'templateid-emailjs', formData)
        .then(function(response) {
          console.log('EmailJS success response:', response);
        }, function(error) {
          console.log('EmailJS error:', error);
        });
    });
  });
  
  
  
  