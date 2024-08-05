const body = document.body;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Using SWITCH Case:
    // switch (event.target.id) {
    //   case 'grey':
    //     body.style.backgroundColor = 'grey';
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = 'white';
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = 'blue';
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = 'yellow';
    //     break;
    //   default:
    //     body.style.backgroundColor = "#22222";
    // }

    // In simpler way:
    body.style.backgroundColor = event.target.id;
  });
});
