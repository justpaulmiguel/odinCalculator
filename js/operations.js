
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
    console.log(num2)
    if(num2 === 0) return ('Can\'t divide to zero');
    else return num1 / num2;
  };
  
  //this is the operate that accepts an operator and 2 numbers then compute the 2 numbers depends of the given operator
  const operate = (operator, num1, num2) => {
    if (operator === "+") return add(num1, num2);
    else if (operator === "-") return subtract(num1, num2);
    else if (operator === "*") return multiply(num1, num2);
    else if (operator === "/") return divide(num1, num2);
  };

  