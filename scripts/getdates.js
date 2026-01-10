const today = new Date();
const currentYear = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModified');

currentYear.innerHTML = today.getFullYear() + ' ©';
lastModified.innerHTML = 'Last Modified: '+ document.lastModified;