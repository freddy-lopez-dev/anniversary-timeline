let currentYear = 2017;
let futureYear = 2018;
let previousYear = currentYear -1;
const currentYearEl = document.querySelector('.current-year');
const futureYearEl = document.querySelector('.future-year');
const previousYearEl = document.querySelector('.previous-year');
const imageContainer17 = document.querySelector('.image-container2017');
const imageContainer18 = document.querySelector('.image-container2018');
const imageContainer19 = document.querySelector('.image-container2019');
const imageContainer20 = document.querySelector('.image-container2020');

setTimeout(nextYear, 3000);
setTimeout(prevYear, 3000);

function nextYear() {
  futureYearEl.addEventListener('click', () => {
    currentYear++;
    futureYear++;
    previousYear++;
    printYear();
  })
}

function prevYear() {
  previousYearEl.addEventListener('click', () => {
    currentYear--;
    futureYear--;
    previousYear--;
    printYear();
  })
}



printYear();

function printYear() {
  console.log(currentYear)
  checkMinYear();
  checkMaxYear();
  currentYearEl.textContent = currentYear;
  futureYearEl.textContent = futureYear;
  previousYearEl.textContent = previousYear;
}


function checkMinYear() {
  if (currentYear === 2017) {
    previousYearEl.style.display = 'none';
    imageContainer17.style.display = 'block';
    imageContainer17.style.animation = 'fadeIn 3s';
    imageContainer18.style.animation = 'fadeOut 3s';
    setTimeout(hide2018, 2500);
  } 
  
  if (currentYear === 2018) {
    previousYearEl.style.display = 'block';
    imageContainer17.style.animation = 'fadeOut 3s';
    setTimeout(hide2017, 2500);
    imageContainer19.style.animation = 'fadeOut 3s';
    setTimeout(hide2019, 2500);
    imageContainer18.style.animation = 'fadeIn 3s';
    imageContainer18.style.display = 'block';
  }

  if (currentYear === 2019) {
    previousYearEl.style.display = 'block';
    imageContainer18.style.animation = 'fadeOut 3s';
    setTimeout(hide2018, 2500);
    imageContainer20.style.animation = 'fadeOut 3s';
    setTimeout(hide2020, 2500);
    imageContainer19.style.animation = 'fadeIn 3s';
    imageContainer19.style.display = 'block';
  }

  if (currentYear === 2020) {
    previousYearEl.style.display = 'block';
    imageContainer19.style.animation = 'fadeOut 3s';
    setTimeout(hide2019, 2500);
    imageContainer20.style.animation = 'fadeIn 3s';
    imageContainer20.style.display = 'block';
  }
}

function checkMaxYear() {
  if (currentYear === 2022) {
    futureYearEl.style.display = 'none';
  } else {
    futureYearEl.style.display = 'block';
  }
}

function hide2017() {
  imageContainer17.style.display = 'none';
}

function hide2018() {
  imageContainer18.style.display = 'none';
}

function hide2019() {
  imageContainer19.style.display = 'none';
}

function hide2020() {
  imageContainer20.style.display = 'none';
}