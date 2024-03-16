const display = document.querySelector("input[type=display]");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");

let numeric = "1234567890";
let operatorList = "+-/*";
let isClicked1stInput = false;
let isOperator = 0;
let isTotal = false;
let total = "";

let temp = "";
let num1 = 0;
let operator = "";
let num2 = 0;

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
      //this is when you click on the number after a calculation
      //if the is total is true and the variable isOperator is equals to zero it calls reset function
      if (isTotal && isOperator === 0) {
        reset();
      }

      //if isOperator is equals to to it removes the content of the display and sets the isOperator value into two
      //the isOperator has 3 states
      // 0 if there is no operator being used
      // 1 if there is an an operator
      // 2 to prevent it from clearing the display bec. if it is set to zero it will clear the display
      if (isOperator === 1) {
        display.value = "";
        isOperator = 2;
      }

      //just displays the value of buttons being clicked
      display.value += button.textContent;

      //if the 1st input is already get
      //the num2 will the the value
      if (isClicked1stInput) {
        num2 = parseInt(display.value);
        console.log(num2);
      }
    });
  }

  //the if filters the buttons with operators in it and distribute the event to the buttons with operator right after
  if (operatorList.split("").includes(button.textContent)) {
    button.addEventListener("click", () => {

      // after typing the 1st input if this operator event is triggered
      // this then filters if the first input is already in variable
      //if not num1 gets the display.value and parse it into int
      //set the isOperator into 1 to say that we picked an operator
      if (isClicked1stInput === false) {
        num1 = parseInt(display.value);
        isClicked1stInput = true;
        console.log(num1);
        isOperator = 1;
      }

      //if num2 already have content and the operator event is triggered
      //this will call the operate function
      //set the isTotal to true to distinguish that a calculation is performed
      //and set operator to 1 to say that another operation might be coming
      if (num2 !== 0) {
        total = operate(operator, num1, num2);
        display.value = total;
        num1 = parseInt(total);
        num2 = 0;
        isTotal = true;
        isOperator = 1;
      }

      //get what operator is clicked
      operator = button.textContent;

      //if there is no operator this will be called
      if (isOperator === 0) {
        isOperator = 1;
      }
    });
  }

  //this is just the behavior of the button
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "orange";
  });
  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#555";
  });
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#555";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = 'rgba(68,68,68, 0.9)';
  });
});

//this is equal event listener and not inside the forEach

equals.addEventListener("click", () => {
  total = operate(operator, num1, num2);
  display.value = total;
  num1 = parseInt(total);
  num2 = 0;
  isOperator = 0;
  operator = "";
  isTotal = true;
});

const reset = () => {
  num1 = 0;
  num2 = 0;
  isOperator = 0;
  operator = "";
  total = 0;
  display.value = "";
  isTotal = false;
  isClicked1stInput = false;
};
clear.addEventListener("click", reset);
