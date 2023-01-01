const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", e => { 
    const computerMove = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (computerMove === "rock" && e.target.id === "paper") {
      result = "You win!";
    } else if (computerMove === "paper" && e.target.id === "scissors") {
      result = "You lose!";
    } else if (computerMove === "scissors" && e.target.id === "rock") {
      result = "You win!";
    } else if (computerMove === e.target.id) {
      result = "It's a tie!";
    } else {
      result = "You lose!";
    }

    document.querySelector("#result").textContent = result;
  });
});
