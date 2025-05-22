// function to calculate time
function calculateTime() {
  let calcTime = document.querySelector('#calcTime');

  let d = new Date();
  let x, y, z;

  x = d.getHours();
  // x = 23;
  y = d.getMinutes();
  // y = 59;
  z = d.getSeconds();

  // incrementTime
  function incrementTime() {
    z += 1; // what's the need to manually increment, even i know this  and can make it small by adding the date object in this function and get the exact time every second, the purpose of this was to learn the manual logic

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
    calcTime.innerHTML = `<span> <h1> HH: ${x} MM: ${y} SS: ${z} </h1> </span>`;
  }

  setInterval(incrementTime, 1000);
}

// Public time api's are unstable, so need to change the approach
// fetch timer from the WorldTimeAPI
// async function timeFromApi() {
//   const response = await fetch(
//     'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//   ); // was getting an error because of using http, don't use http the browser will block non-HTTPS requests on HTTPS websites and in general.

//   const data = await response.json();
//   console.log(data);
// }
// timeFromApi();

// Event Listeners
document.addEventListener('DOMContentLoaded', calculateTime);
