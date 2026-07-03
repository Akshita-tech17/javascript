// document.querySelector('#clock')

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// set interval  2 parameters - function and time - seconds=1000/1sec , 2000/2sec , etc
