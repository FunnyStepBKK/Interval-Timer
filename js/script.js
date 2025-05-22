// function to calculate time
function calculateTime() {
  let calcTime = document.querySelector('#calcTime');
  let d = new Date();
  let x, y, z;

  // x = d.getHours();
  x = 23;
  // y = d.getMinutes();
  y = 59;
  z = d.getSeconds();

  // incrementTime
  function incrementTime() {
    z += 1;

    if (z > 59) {
      z = 0;
      y += 1;
    }
    if (y > 59) {
      y = 0;
      x += 1;
    }
    if (x > 23) {
      x = 0;
    }
    calcTime.innerHTML = `<span id = > <h1> HH: ${x} MM: ${y} SS: ${z} </h1> </span>`;
  }

  setInterval(incrementTime, 1000);
}

calculateTime();
// document.addEventListener('DOMContentLoaded', calculateTime());

// console.log(500 % 60);
// console.log(500 / 60);
