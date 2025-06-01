const button = document.getElementById("runBtn");

document.addEventListener("mouseover", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const btnRect = button.getBoundingClientRect();

    const offset = 90;
    const distX = Math.abs(mouseX - (btnRect.left + btnRect.width / 2));
    const distY = Math.abs(mouseY - (btnRect.top + btnRect.height / 2));

    if (distX < offset && distY < offset) {
        moveButton();
    }
});

function moveButton() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function showMsg() {
    document.querySelector("h2").innerHTML = "I Love You Too! 😭💖";
    document.querySelector("h2").style.fontSize = "26px";
}
