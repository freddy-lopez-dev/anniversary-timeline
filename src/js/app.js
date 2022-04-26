let currentYear = 2017;
let futureYear = 2018;
let previousYear = currentYear -1;
const currentYearEl = document.querySelector('.current-year');
const futureYearEl = document.querySelector('.future-year');
const previousYearEl = document.querySelector('.previous-year');

futureYearEl.addEventListener('click', () => {
  currentYear++;
  futureYear++;
  previousYear++;
  printYear();
})

previousYearEl.addEventListener('click', () => {
  currentYear--;
  futureYear--;
  previousYear--;
  printYear();
})

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
  } else {
    previousYearEl.style.display = 'block';
  }
}

function checkMaxYear() {
  if (currentYear === 2022) {
    futureYearEl.style.display = 'none';
  } else {
    futureYearEl.style.display = 'block';
  }
}