const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let X;
let Y;
const balls = [];
const body = document.getElementById("body");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
body.width  = window.innerWidth;
body.height = window.innerHeight;
function start() {
  X = document.getElementById("quantity").value;
  Y = document.getElementById("distance").value;



  for (let i = 0; i < X; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    });
  }


  function createCanvas() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const item of balls) {
      item.x += item.dx;
      item.y += item.dy;

 
      if (item.x < 0 || item.x > canvas.width) {
        item.dx *= -1;
      }
      if (item.y < 0 || item.y > canvas.height) {
        item.dy *= -1;
      }

      context.beginPath();
      context.arc(item.x, item.y, 5, 0, 2 * Math.PI);
      context.fill();
    }

    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const ball1 = balls[i];
        const ball2 = balls[j];
        const distance = Math.sqrt(
          (ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2
        );
        if (distance < Y * canvas.width) {
          context.beginPath();
          context.moveTo(ball1.x, ball1.y);
          context.lineTo(ball2.x, ball2.y);
          context.stroke();
        }
      }
    }

 
    requestAnimationFrame(createCanvas);
  }
  createCanvas();
}

function reset() {
  X = document.getElementById("quantity").value;
  Y = document.getElementById("distance").value;
  balls.length = 0;
  for (let i = 0; i < X; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    });
  }
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", reset);
