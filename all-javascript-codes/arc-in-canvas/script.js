let ctx = document.querySelector("canvas").getContext("2d");
let section = document.querySelector('section');
let angle = 0;

function drawCircle() {
    if (angle < 1 || angle > 360) return;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 150);
    ctx.arc(150, 150, 100, 0, Math.PI * ((360 - angle) || 360) / 180, true);
    ctx.lineWidth = 3;
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.stroke();
}

function clear() {
    section.innerHTML = "";
    ctx.clearRect(0, 0, 300, 300);
}

function compute() {
    clear();
    angle = +document.querySelector('#angle').value;
    let circleData = {
        'angle': angle,
        'rest': 360 - angle,
    }
    drawCircle();
    section.innerHTML = "";
    drawTable(circleData)
}

document.querySelector('#comp').addEventListener('click', compute)

function drawTable(obj) {
    if (obj.angle < 1 || obj.angle > 360) {
        section.innerText = "Invalid value";
        return;
    }
    let table = document.createElement('table');
    for (let i in obj) {
        table.innerHTML += `<tr><td>${i}</td><td>${obj[i]}</td></tr>`
    }
    section.appendChild(table)
}
