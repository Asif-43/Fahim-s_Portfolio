document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for your message. I will get back to you soon!';
    formMessage.style.color = 'green';
    this.reset();
});
