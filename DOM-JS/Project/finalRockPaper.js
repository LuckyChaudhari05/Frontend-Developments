    // JSON.parse is use to convert the string into value
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }
      }
      else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
      }
      else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }

      if (result === 'You win.') {
        score.wins += 1;
      }
      else if (result === 'You lose.') {
        score.losses += 1;
      }
      else if (result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));  // Save the score in local storage and coverted the score into the string whith the help of JSON.stringify

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves')
      .innerHTML = `    You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }

    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = ` Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`;
    }
    function pickComputerMove() {
      const randonNumber = Math.random();

      let computerMove = '';

      if (randonNumber >= 0 && randonNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randonNumber >= 2 / 3 && randonNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;    // The function will end at return , if anything below the return will not work

    }