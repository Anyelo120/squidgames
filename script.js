
document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("December 1, 2024 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "El misterio ha llegado...";
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Botones ocultos
    const buttons = document.querySelectorAll('.hidden-button');
    const secretText = document.getElementById('secret-text');
    let activatedButtons = 0;

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (!button.classList.contains('activated')) {
                button.classList.add('activated');
                activatedButtons++;
                if (activatedButtons === buttons.length) {
                    secretText.style.display = 'block';
                }
            }
        });
    });
});

document.addEventListener("mousemove", function(event) {
    const shapes = ["circle", "triangle", "square"];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const shapeElement = document.createElement("div");
    shapeElement.className = `shape ${randomShape}`;
    
    // Randomize position slightly around mouse
    const offsetX = (Math.random() - 0.5) * 50; // Between -25px and 25px
    const offsetY = (Math.random() - 0.5) * 50;
    shapeElement.style.left = `${event.clientX + offsetX}px`;
    shapeElement.style.top = `${event.clientY + offsetY}px`;

    document.body.appendChild(shapeElement);

    setTimeout(() => {
        shapeElement.remove();
    }, 1200); // Duration before the shape disappears
});
