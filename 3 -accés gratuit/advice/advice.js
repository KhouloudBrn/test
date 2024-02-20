document.addEventListener("DOMContentLoaded", function () {
    const advice = document.querySelectorAll('.advice');

    advice.forEach((advice, index) => {
        setTimeout(() => {
            advice.classList.add('visible');
        }, index * 300); 
    });
});
