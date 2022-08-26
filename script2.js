let d = document.querySelector(".d");
let h = document.querySelector(".h");
let m = document.querySelector(".m");
let det = document.querySelector(".det");

let launchDay = new Date("Aug 25, 2022 12:00:00").getTime();

let countdown = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();

  let t = launchDay - now;
  let day = Math.floor(t / (1000 * 60 * 60 * 24));
  if (day < 10) {
    day = "0" + day;
  }

  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours < 10) {
    hours = "0" + hours;
  }

  let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  if (mins < 10) {
    mins = "0" + mins;
  }

  let secs = Math.floor((t % (1000 * 60)) / 1000);
  if (secs < 10) {
    secs = "0" + secs;
  }

  d.innerHTML = day;
  h.innerHTML = hours;
  m.innerHTML = mins;
  det.innerHTML = secs;

  //   let time = `${d} : ${hours} : ${mins} : ${secs} `;

  //   document.querySelector(".time").innerHTML = time;
}
