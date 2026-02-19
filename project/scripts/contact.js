const contactButton = document.querySelector('#contact-button');

contactButton.addEventListener('click', (event) => {
    
    const email = "fcaballero.pbl@gmail.com"
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Contact from Portfolio Website')}&body=${encodeURIComponent(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`)}`;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        event.preventDefault();
        alert('Please fill out all fields before submitting the form.');
    }
    
    window.location.href = mailtoLink;
})