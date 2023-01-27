let endDate = new Date("April 3, 2023 23:10:00");

let currentDate = setInterval(() => {
  let current = new Date().getTime();
  let diff = endDate - current;
  if (diff >= 0) {
    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((diff % (1000 * 60)) / 1000);

    let day = document.getElementById("timer-gunler");
    let hour = document.getElementById("timer-saatler");
    let min = document.getElementById("timer-dakikalar");
    let sec = document.getElementById("timer-saniyeler");

    day.textContent = d;
    hour.textContent = h;
    min.textContent = m;
    sec.textContent = s;
  } else {
    clearInterval(currentDate);
  }
}, 1000);
