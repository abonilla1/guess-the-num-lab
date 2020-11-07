const game = {
    title: 'Guess the Number!',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    getGuess: function() {
        let guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum} to guess the Secret Number!`));
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
            guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum} to guess the Secret Number!`));
        }
        return guess;
    },
    render: function(x){
        if (x === this.secretNum) {
            alert(`Congrats! You guessed the number in ${prevGuesses.length} guesses!`);
        } else if (x > this.secretNum) {
            alert(`Your guess is too high!`);
            let playerPreviousGuesses = prevGuesses.toLocaleString(',');
            alert(`Previous guesses ${playerPreviousGuesses}`);
        } else if (x < this.secretNum) {
            alert(`Your guess is too low!`);
            playerPreviousGuesses = prevGuesses.toLocaleString(',');
            alert(`Previous guesses ${playerPreviousGuesses}`);
        }
    },
    play: function() {
        this.biggestNum = parseInt(prompt(`Enter the top number for your guessing range!`));
        this.smallestNum = parseInt(prompt(`Enter the bottom number for your guessing range!`));
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum +1)) + this.smallestNum;
        let playerGuess = this.getGuess();
        this.prevGuesses.push(playerGuess);
        while (playerGuess !== this.secretNum) {
            playerGuess = this.getGuess();
            this.render(playerGuess);   
            if (playerGuess === this.secretNum) return; 
        }    
    }
  };

  game.play();


