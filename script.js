document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('input[placeholder="Name"]').value.trim();
        const email = document.querySelector('input[placeholder="E-mail"]').value.trim();
        const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

        if (name === "" || email === "" || message === "") {
            alert('Please fill out all fields.');
        } else {
            alert('Thank you for contacting me! Your message has been submitted.');
            window.location.reload();
        }
    });

    const portfolioSection = document.getElementById('portfolio-section');
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            if (portfolioSection) {
                portfolioSection.style.backgroundColor = color;
            }
        });
    });
});
