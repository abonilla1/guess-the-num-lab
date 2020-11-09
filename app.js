const game = {
    // initialize state
    title: 'Guess the Number!',
    biggestNum: 0,
    smallestNum: 0,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        this.biggestNum = parseInt(prompt(`Enter the top number for your guessing range!`));
        this.smallestNum = parseInt(prompt(`Enter the bottom number for your guessing range!`));
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum +1)) + this.smallestNum;
        let playerGuess = NaN;
        while (playerGuess !== this.secretNum) { 
            playerGuess = this.getGuess();
            this.prevGuesses.push(playerGuess);
            this.render(playerGuess);
            if (playerGuess === this.secretNum) return
        }
    },
    getGuess: function() {
        let guess = NaN;
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
           guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum} to guess the Secret Number!`));  
        }
        return guess;
    },
    render: function(x){
        let playerPreviousGuesses = this.prevGuesses.join(',');
        if (x === this.secretNum) {
            alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`);
        } 
        else if (x > this.secretNum) {
            alert(`Your guess is too high! Previous guesses ${playerPreviousGuesses}`);
        } 
        else if (x < this.secretNum) {
            alert(`Your guess is too low! Previous guesses ${playerPreviousGuesses}`);
        } 
        else {
            alert('Critical error');
        }       
    }
};
  
game.play();


