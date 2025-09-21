const clock = document.getElementById("clock");

function undateClock() {
  const now = new Date();
  clock.innerText = now.toLocaleTimeString();
}
undateClock();
setInterval(undateClock, 1000);
