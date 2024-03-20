buttons.forEach((button) => {
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
    button.style.backgroundColor = "rgba(68,68,68, 0.9)";
  });
});

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
buttonGroups.forEach((buttonGroup) => {
  const buttons = buttonGroup.querySelectorAll("button");

  buttons.forEach((button) => {
    //putting value on the input[type=display] if the button clicked is a number
    if (numeric.split("").includes(button.textContent)) {
      button.addEventListener("click", () => {
        //this is when you click on the number after a calculation
        //if the is total is true and the variable isOperator is equals to zero it calls reset function
        if (total !== 0 && isOperator === 0) {
          reset();
        }

        //if isOperator is equals to to it removes the content of the display and sets the isOperator value into two
        //the isOperator has 3 states
        // 0 if there is no operator being used
        // 1 if there is an an operator
        // 2 to prevent it from clearing the display bec. if it is set to zero it will clear the display
        // also prevents the display from clearing when the display.value is '0.'
        if (isOperator === 1 && display.value !== "0.") {
          display.value = "";
          isOperator = 2;
        }

        //just displays the value of buttons being clicked
        display.value += button.textContent;

        //if the 1st input is already get
        //the num2 will the the value
        if (num1 !== 0) {
          num2 = parseFloat(display.value);
          console.log(num2);
        }
      });
    }
  });
});

buttonGroups.forEach((buttonGroup) => {
  const buttons = buttonGroup.querySelectorAll("button");

  buttons.forEach((button) => {
    //the if filters the buttons with operators in it and distribute the event to the buttons with operator right after
    if (operatorList.split("").includes(button.textContent)) {
      button.addEventListener("click", () => {
        // after typing the 1st input if this operator event is triggered
        // this then filters if the first input is already in variable
        //if not num1 gets the display.value and parse it into float
        //set the isOperator into 1 to say that we picked an operator
        if (num1 === 0) {
          num1 = parseFloat(display.value);
          console.log(num1);
          isOperator = 1;
        }

        //if num2 already have content and the operator event is triggered
        //this will call the operate function
        //and set operator to 1 to say that another operation might be coming
        if (num2 !== 0) {
          total = fixedLength(operate(operator, num1, num2));
          display.value = total;
          num1 = parseFloat(total);
          num2 = 0;
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
  });
});

//get the percent
percentage.addEventListener("click", () => {
  display.value = fixedLength(parseFloat(display.value) * 0.01);
});

//make the display negative of bring back to positive
negate.addEventListener("click", () => {
  if (display.value > 0) {
    display.value = "-" + display.value;
  } else if (display.value < 0) {
    display.value = Math.abs(display.value);
  }
});

//remove number on the end
backspace.addEventListener("click", () => {
  let splitted = "";
  splitted = display.value.split("");
  splitted.pop();
  splitted = splitted.join("");
  display.value = splitted;
});

//add point
point.addEventListener("click", () => {
  if (
    (num2 === 0 && (isOperator === 1 || isOperator === 2)) ||
    display.value === ""
  )
    display.value = "0.";

  if (!display.value.includes('.')) {
    display.value += ".";
  }
});

//if the number length is greater than 12 the number of digits will be 12
const fixedLength = (number) => {
  number = number.toString();
  if (number.length > 12) return number.slice(0, 13);
  else return number;
};
