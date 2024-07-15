//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function() {
    const searchDiv = document.querySelector('.search');
    const input = document.querySelector('.input');
    const button = document.querySelector('.btn');

    button.addEventListener('click', function() {
        searchDiv.classList.add('active');
        input.focus();
    });
});