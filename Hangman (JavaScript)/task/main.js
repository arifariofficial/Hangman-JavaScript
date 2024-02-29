// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

const listOfWords = ["python", "java", "swift", "javascript"];
let wins = 0;
let losses = 0;

function playGame() {
    const randomIndex = Math.floor(Math.random() * listOfWords.length);
    const selectedWord = listOfWords[randomIndex];
    let displayWord = selectedWord.split("").map(() => "-").join("");
    let attempts = 8;
    let guessedLetters = [];

    while (attempts > 0 && displayWord.includes("-")) {
        console.log(`\n${displayWord}`);
        const guess = input("Input a letter: ").trim();

        // Check 1: Ensure exactly one letter is entered
        if (guess.length !== 1) {
            console.log("Please, input a single letter.");
            continue; // Skip the rest of the loop iteration
        }

        // Check 2: Ensure the letter is a lowercase English letter
        if (!guess.match(/[a-z]/)) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
            continue; // Skip the rest of the loop iteration
        }

        // Check 3: Prevent repeat guesses from reducing attempts
        if (guessedLetters.includes(guess)) {
            console.log("You've already guessed this letter.");
            continue; // Skip the rest of the loop iteration
        }

        guessedLetters.push(guess);

        if (selectedWord.includes(guess)) {
            let updatedDisplayWord = "";
            for (let i = 0; i < selectedWord.length; i++) {
                updatedDisplayWord += selectedWord[i] === guess || displayWord[i] !== '-' ? selectedWord[i] : '-';
            }
            displayWord = updatedDisplayWord;
        } else {
            console.log("That letter doesn't appear in the word.");
            attempts--;
        }
    }

    if (!displayWord.includes("-")) {
        console.log(`\n${displayWord}`);
        console.log(`You guessed the word ${selectedWord}!`);
        console.log("You survived!");
        wins++;
    } else {
        console.log("You lost!");
        losses++;
    }
}

function showResults() {
    console.log(`You won: ${wins} times.`);
    console.log(`You lost: ${losses} times.`);
}

while (true) {
    console.log("H A N G M A N  // 8 attempts");
    console.log('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
    const choice = input().trim().toLowerCase();

    if (choice === "play") {
        playGame();
    } else if (choice === "results") {
        showResults();
    } else if (choice === "exit") {
        break;
    } else {
        console.log("Please type 'play', 'results', or 'exit'.");
    }
}
