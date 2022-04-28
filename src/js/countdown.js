var countDownDate = new Date("May 07, 2022 00:00:00").getTime();
const countdownEl = document.querySelector('.countdown');
const timelineEl = document.querySelector('.timeline');

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector('.dvalue').textContent = days;
  document.querySelector('.hvalue').textContent = hours;
  document.querySelector('.mvalue').textContent = minutes;
  document.querySelector('.svalue').textContent = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    countdownEl.style.animation = 'fadeOut 2s';
    countdownEl.style.display = 'none';
    timelineEl.style.animation = 'fadeIn 2s';
    timelineEl.style.display = 'flex';
    printYear();
  }
}, 1000);