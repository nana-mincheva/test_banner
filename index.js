const element = document.querySelector('.banner-button');
const totalIterations = Infinity;
const delayBetweenIterations = 3000;
const containerBanner = document.querySelector('.banner-container');
const closeButton = document.querySelector('.banner-close__button');

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
    containerBanner.classList.add('closed');
});