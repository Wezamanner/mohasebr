export function animateCounter(element, target) {

    let count = 0;

    const speed = target / 100;

    const timer = setInterval(() => {

        count += speed;

        if (count >= target) {

            element.textContent = target;

            clearInterval(timer);

        } else {

            element.textContent = Math.floor(count);

        }

    }, 20);

}