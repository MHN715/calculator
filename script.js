const buttons = document.querySelector(".btn-wrapper");
const screen = document.querySelector(".screen");

let previousNumber = "";
let currentNumber = "";
let actionType = "";
let calculating = false;

document.addEventListener("DOMContentLoaded", () => {
  buttons.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      const onScreen = screen.textContent;
      const keyContent = key.textContent;

      if (!action) {
        if (onScreen === "0") {
          screen.textContent = keyContent;
        } else {
          screen.textContent = onScreen + keyContent;
        }
      }

      if (
        action === "divide" ||
        action === "mulitply" ||
        action === "subtract" ||
        action === "add"
      ) {
        previousNumber = onScreen;
        screen.textContent = "0";

        // if (previousNumber != "") {
        //   screen.textContent = "";
        // }

        if (onScreen === "0") {
          screen.textContent = "0";
        }

        switch (action) {
          case "divide":
            actionType = "divide";
            break;
          case "mulitply":
            actionType = "mulitply";
            break;
          case "subtract":
            actionType = "subtract";
            break;
          case "add":
            actionType = "add";
            break;
          default:
            console.log("operator keys not working");
        }
      }

      if (action === "clear") {
        console.log("clear key");
        screen.textContent = "0";
      }

      if (action === "delete") {
        console.log("delete key");
        let str = onScreen;
        str = str.slice(0, -1);
        if (onScreen.length === 1) {
          screen.textContent = "0";
        } else {
          screen.textContent = str;
        }
      }

      if (action === "decimal") {
        console.log("decimal key");
        if (!onScreen.includes(".")) {
          screen.textContent = onScreen + ".";
        }
      }
      if (action === "calculate") {
        // console.log(previousNumber);
        if (previousNumber != "") {
          console.log(action);
          currentNumber = onScreen;
          screen.textContent = calculate(
            previousNumber,
            currentNumber,
            actionType
          );
        }
      }
    }

    function calculate(previousNumber, currentNumber, actionType) {
      let result = "";
      switch (actionType) {
        case "divide":
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
          break;
        case "mulitply":
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case "subtract":
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case "add":
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        default:
      }
      return result;
    }
  });
});
