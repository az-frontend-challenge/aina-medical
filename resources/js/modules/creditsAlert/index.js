window.addEventListener('DOMContentLoaded', function () {
    const dismissers = [...document.querySelectorAll('.creditsAlert .dismiss')];
    if (dismissers) {
        dismissers.forEach(e => {
           const alerts = [...document.querySelectorAll('.creditsAlert')];
           e.addEventListener('click', () => {
               alerts.forEach(e => {
                   e.classList.toggle('non-visible');
               });
           });
        });
    }
});