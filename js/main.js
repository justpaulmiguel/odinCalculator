const display = document.querySelector("input[type=display]");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const buttonGroups = document.querySelectorAll('.buttonGroup');
const miscGroups = document.querySelector('.miscButton');
const percentage = document.querySelector('#percentage');
const negate = document.querySelector('#negate');
const backspace = document.querySelector('#backspace');
const point = document.querySelector('#point');

let numeric = "1234567890";
let operatorList = "+-/*";
let isOperator = 0;
let total = 0;
let num1 = 0;
let operator = "";
let num2 = 0;


//this is equal event listener and not inside the forEach

equals.addEventListener("click", () => {
  total = operate(operator, num1, num2);
  display.value = total.toFixed(5);
  num1 = parseFloat(total);
  num2 = 0;
  isOperator = 0;
  operator = "";
});

const reset = () => {
  num1 = 0;
  num2 = 0;
  isOperator = 0;
  operator = "";
  total = 0;
  display.value = "";
};
clear.addEventListener("click", reset);
