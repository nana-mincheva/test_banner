const element = document.querySelector('.banner-button');
const totalIterations = Infinity; // Общее количество циклов анимации
const delayBetweenIterations = 3000; // Задержка между циклами анимации в миллисекундах

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