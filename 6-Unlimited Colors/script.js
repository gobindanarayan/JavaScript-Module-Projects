const start = document.getElementById("start");
const stop = document.getElementById("stop");
let interv;

function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  document.body.style.backgroundColor = randomColor();
}

function startMe() {
  if (interv) {
    clearInterval(interv);
  }
  interv = setInterval(changeColor, 1000);
}

function stopMe() {
  if (interv) {
    clearInterval(interv);
    interv = null;
  }
}

start.addEventListener("click", startMe);
stop.addEventListener("click", stopMe);
