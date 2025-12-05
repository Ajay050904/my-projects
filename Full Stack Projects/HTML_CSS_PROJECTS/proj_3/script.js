let current = 0;
let interval;

const lights = [
    document.getElementById("red"),
    document.getElementById("yellow"),
    document.getElementById("green")
];

function changeLight() {
    lights.forEach(light => light.classList.remove("active"));
    lights[current].classList.add("active");

    current = (current + 1) % 3;
}

document.getElementById("start-btn").addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(changeLight, 1000);
    }
});

document.getElementById("stop-btn").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    lights.forEach(light => light.classList.remove("active"));
});
