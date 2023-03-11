const inpOne = document.querySelector('#inp1');
const inpTwo = document.querySelector('#inp2');
const outPut = document.querySelector('span');

function convy() {
  const num1 = parseInt(inpOne.value);
  const num2 = parseInt(inpTwo.value);

  if (isNaN(num1) || isNaN(num2)) {
    outPut.innerHTML = ' ';
  } else if (num1 > num2) {
    outPut.innerHTML = `The larger number is: ${num1}`;
  } else if (num2 > num1) {
    outPut.innerHTML = `The larger number is: ${num2}`;
  } else {
    outPut.innerHTML = `The two numbers are equal.`;
  }
}
