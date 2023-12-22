document.getElementById("playGame").addEventListener("click", function () {
  const WORDS = [
    "jultomten",
    "glögg",
    "mistel",
    "julklapp",
    "julgran",
    "snöstorm",
    "julbord",
  ];
  const MAXATTEMPTS = 6;

  const RANDOMWORD = Math.floor(Math.random() * WORDS.length);
  const CHOSENWORD = WORDS[RANDOMWORD];

  let attempts = 0;
  let guessedLetters = [];
  let correctGuesses = Array(CHOSENWORD.length).fill("_");

  while (attempts < MAXATTEMPTS && correctGuesses.includes("_")) {
    let guess = prompt("Gissa en bokstav:");

    if (guess === null) {
      alert(
        "Du var ju rolig att leka med.. Nu tar Skynet över välden, bra jobbat kompis!"
      );
      break;
    }

    guess = guess.toLowerCase();

    if (!guess.match(/^[a-zåäö]$/)) {
      alert("Skynet accepterar bara bokstäver!");
      continue;
    }

    if (guessedLetters.includes(guess)) {
      alert("Sluta uppreapa dig själv!");
      continue;
    }

    guessedLetters.push(guess);

    if (CHOSENWORD.includes(guess)) {
      for (let i = 0; i < CHOSENWORD.length; i++) {
        if (CHOSENWORD[i] === guess) {
          correctGuesses[i] = guess;
        }
      }
    } else {
      attempts++;
    }

    alert(
      correctGuesses.join(" ") +
        "\nGissningar kvar: " +
        (MAXATTEMPTS - attempts)
    );
  }

  if (correctGuesses.join("") === CHOSENWORD) {
    alert(
      "Grattis du räddade världen från undergång! \n\n Ordet va: " + CHOSENWORD
    );
  } else {
    alert(
      "Oh nej.. Du misslyckades och Skynet har aktiverat bomberna \n\n Ordet va: " +
        CHOSENWORD
    );
  }
});
