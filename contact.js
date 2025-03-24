document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const serviceID = 'service_qadu5l1';
    const templateID = 'template_5d5m60f';
  
    const templateParams = {
      to_name: document.getElementById('name').value,
      from_name: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    emailjs.send(serviceID, templateID, templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      }, error => {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again.');
      });
  });