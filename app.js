let scorePlayer = 0;
let scoreComputer = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultatText = document.getElementById("resultat");
const buttons = document.querySelectorAll(".choice");

// Cette constante permet de définir le nombre de points à obtenir pour gagner
const score = 3;

function endGame() {
  if (scorePlayer === score) {
    alert(`Vous avez gagné ! 
    Voulez-vous recommencer une partie ?`);
  } else if (scoreComputer === score) {
    alert(`Vous avez perdu ! 
    Voulez-vous recommencer une partie ?`);
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const playerChoice = buttons[i].innerHTML;
    const computerChoice =
      buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";

    if (playerChoice === computerChoice) {
      resultat = "Egalité";
    } else if (
      (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
      (playerChoice === "Feuille" && computerChoice === "Pierre") ||
      (playerChoice === "Ciseaux" && computerChoice === "Feuille")
    ) {
      resultat = "Vous avez gagné !";
      scorePlayer++;
      userScoreSpan.innerHTML = scorePlayer;
    } else {
      resultat = "Vous avez perdu !";
      scoreComputer++;
      computerScoreSpan.innerHTML = scoreComputer;
    }

    resultatText.innerHTML = `
    Vous avez joué : ${playerChoice} </br>
    L'ordinateur a joué : ${computerChoice} </br></br>
    Résultat : ${resultat}
    `;

    endGame();

    if (scoreComputer === score || scorePlayer === score) {
      document.location.reload();
    }
  });
}
