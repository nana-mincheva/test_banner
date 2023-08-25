const element = document.querySelector('.banner-button');
const totalIterations = Infinity;
const delayBetweenIterations = 3000;
const adhesionBanner = document.querySelector('.adhesion-banner');
const closeButton = document.querySelector('.close-button');

function startAnimation() {
    let iterationCount = 0;

    function runAnimation() {
        if (iterationCount < totalIterations) {
            element.style.animation = 'none';
            void element.offsetWidth;
            element.style.animation = 'pulse 0.1s 3';
            iterationCount++;
            setTimeout(runAnimation, delayBetweenIterations);
        }
    }
    runAnimation();
}
startAnimation();


closeButton.addEventListener('click', () => {
    adhesionBanner.classList.add('closed');
});