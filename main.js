const display = document.querySelector("input[type=display]");
const container = document.querySelectorAll(".container");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector("#equals");
let clear = document.querySelector('#clear');

let numeric = "1234567890";
let operatorList = "+-/*";
let isClicked1stInput = false;
let isOperator = 0;
let isTotal = false;

let temp = "";
let num1 = 0
let operator = "";
let num2 = 0

/*
 ________  ________  _______   ________  ________  _________  ___  ________  ________   ________
|\   __  \|\   __  \|\  ___ \ |\   __  \|\   __  \|\___   ___\\  \|\   __  \|\   ___  \|\   ____\
\ \  \|\  \ \  \|\  \ \   __/|\ \  \|\  \ \  \|\  \|___ \  \_\ \  \ \  \|\  \ \  \\ \  \ \  \___|_
 \ \  \\\  \ \   ____\ \  \_|/_\ \   _  _\ \   __  \   \ \  \ \ \  \ \  \\\  \ \  \\ \  \ \_____  \
  \ \  \\\  \ \  \___|\ \  \_|\ \ \  \\  \\ \  \ \  \   \ \  \ \ \  \ \  \\\  \ \  \\ \  \|____|\  \
   \ \_______\ \__\    \ \_______\ \__\\ _\\ \__\ \__\   \ \__\ \ \__\ \_______\ \__\\ \__\____\_\  \
    \|_______|\|__|     \|_______|\|__|\|__|\|__|\|__|    \|__|  \|__|\|_______|\|__| \|__|\_________\
                                                                                          \|_________|
The operations are happening here accepting 2 numbers and then calculate it
*/
const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  return num1 / num2;
};

//this is the operate that accepts an operator and 2 numbers then compute the 2 numbers depends of the given operator
const operate = (operator, num1, num2) => {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return subtract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);

  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);
  console.log(`operator: ${operator}`);
};
/*
 _______   ___      ___ _______   ________   _________  ________
|\  ___ \ |\  \    /  /|\  ___ \ |\   ___  \|\___   ___\\   ____\
\ \   __/|\ \  \  /  / | \   __/|\ \  \\ \  \|___ \  \_\ \  \___|_
 \ \  \_|/_\ \  \/  / / \ \  \_|/_\ \  \\ \  \   \ \  \ \ \_____  \
  \ \  \_|\ \ \    / /   \ \  \_|\ \ \  \\ \  \   \ \  \ \|____|\  \
   \ \_______\ \__/ /     \ \_______\ \__\\ \__\   \ \__\  ____\_\  \
    \|_______|\|__|/       \|_______|\|__| \|__|    \|__| |\_________\
                                                          \|_________|
*/
buttons.forEach((button) => {
  //putting value on the input[type=display] if the button clicked is a number
  if (numeric.split("").includes(button.textContent)) {
    button.addEventListener("click", () => {
      if (isTotal && isOperator === 0) {
        isOperator = 0;
        num1 = 0;
        operator = '';
        num2 = 0;
        total = 0;
        display.value = "";
        isTotal = false;
        isClicked1stInput = false;
      }

      if (isOperator === 1) {
        display.value = "";
        isOperator = 2;
      }

      display.value += button.textContent;
      if (isClicked1stInput) {
        num2 = parseInt(display.value);
        console.log(num2);
      }
    });
  }

  if (operatorList.split("").includes(button.textContent)) {
    button.addEventListener("click", () => {
      if (isClicked1stInput === false) {
        num1 = parseInt(display.value);
        isClicked1stInput = true;
        console.log(num1);
        isOperator = 1;
      }

      if (num2 !==0) {
        total = operate(operator, num1, num2);
        display.value = total;
        num1=parseInt(total);
        num2=0;
        isTotal = true;
        isOperator=1;
      }
      operator = button.textContent;
      if(isOperator ===0)
      {
        isOperator = 1;
      }
    });
  }

  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "orange";
  });
  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#aaa";
  });
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#aaa";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#eee";
  });
});

equals.addEventListener("click", () => {
  console.log(`num1 before: ${num1}`);
  console.log(`num2: ${num2}`);
  console.log(`operator: ${operator}`);
  total = operate(operator, num1, num2);
  display.value = total;
  num1=parseInt(total);
  num2=0;
  isOperator=0;
  operator = "";
});


