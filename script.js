const buttons = document.querySelector(".btn-wrapper");
const screen = document.querySelector(".screen");

document.addEventListener("DOMContentLoaded", () => {
  buttons.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      const onScreen = screen.textContent;
      const keyContent = key.textContent;

      if (!action) {
        console.log("number key");
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
        console.log(action, "operator key");

        switch (action) {
          case "divide":
            console.log("divide");
            break;
          case "mulitply":
            console.log("multiply");
            break;
          case "subtract":
            console.log("subtract");
            break;
          case "add":
            console.log("add");
            break;
          default:
            console.log("operator keys not working");
        }
      }

      if (action === "clear") {
        console.log("clear key");
        screen.textContent = "0";
      }
    }

    // switch (e.target) {
    //   case 0:
    //     day = "Sunday";
    //     break;
    //   case 1:
    //     day = "Monday";
    //     break;
    //   case 2:
    //     day = "Tuesday";
    //     break;
    //   case 3:
    //     day = "Wednesday";
    //     break;
    //   case 4:
    //     day = "Thursday";
    //     break;
    //   case 5:
    //     day = "Friday";
    //     break;
    //   case 6:
    //     day = "Saturday";
    // }
  });
});
