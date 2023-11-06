let display = document.getElementById("display");
let displayValue = "";
buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "*") {
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "C") {
      displayValue = 0;
      display.value = displayValue;
    } else if (buttonText == "=") {
      display.value = eval(displayValue);
    } else {
      displayValue += buttonText;
      display.value = displayValue;
    }
  });
  //   buttonText = e.ta;
}
