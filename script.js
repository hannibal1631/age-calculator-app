// the input variables
const dayIn = document.getElementById('day');
const monthIn = document.getElementById('month');
const yearIn = document.getElementById('year');

// the output variables
const dayOut = document.getElementById('dd');
const monthOut = document.getElementById('mm');
const yearOut = document.getElementById('yy');

const form = document.querySelector('form');

// get the date info
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//validate the inputs
const validateInputs = () => {
  const inputs = document.querySelectorAll('input');
  let validator = true;

  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = 'red';
      parent.querySelector('.error-text').innerText = 'This field is required';
      validator = false;
    } else if (dayIn.value > 31) {
      dayIn.style.borderColor = 'red';
      dayIn.parentElement.querySelector('.error-text').innerText =
        'must be valid';
      validator = false;
    } else if (monthIn.value > 12) {
      monthIn.style.bordercolor = 'red';
      monthIn.parentElement.querySelector('.error-text').innerText =
        'must be valid';
      validator = false;
    } else if (yearIn.value > year) {
      yearIn.style.bordercolor = 'red';
      yearIn.parentElement.querySelector('.error-text').innerText =
        'can not be a future year';
      validator = false;
    } else {
      i.style.borderColor = 'black';
      parent.querySelector('.error-text').innerText = '';
      validator = true;
    }
  });
  return validator;
};

// handle the sumbit btn
const submitHandle = (e) => {
  e.preventDefault();
  if (validateInputs()) {
    if (dayIn.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthIn.value > month) {
      month = month + 12;
      year - year - 1;
    }

    const d = day - dayIn.value;
    const m = month - monthIn.value;
    const y = year - yearIn.value;

    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
  }
};

// calling the submit handle function
form.addEventListener('submit', submitHandle);
