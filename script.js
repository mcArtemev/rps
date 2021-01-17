const game = () => {

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerSign = document.querySelector('.player-sign');
        const opponentSign = document.querySelector('.opponent-sign');

        const opponentOptions = ['rock', 'paper', 'scissors']; //0 1 2

        options.forEach((option) => { //функции надо передать option??
            option.addEventListener('click', function() { //какого здесь нельзя стрелочную функцию?? Потеря контекста
                const opponentChoose = Math.floor(Math.random() * 3); //округлить значение до целых, как?
                const opponentChoice = opponentOptions[opponentChoose];
                console.log(opponentChoice); 
                compareSigns(this.textContent, opponentChoice);
                playerSign.src = `./img/${this.textContent}.png`; //почему не пашет?
                opponentSign.src = `./img/${opponentChoice}.png`;
            });
        })
        // console.log(opponentChoose); 
    };

    const compareSigns = (playerChoice, opponentChoice) => {
        const winner = document.querySelector('.winner');

        if(playerChoice === opponentChoice) {
            winner.textContent = 'Tie';
            return;
        }
        if (playerChoice === 'rock') {
            if(opponentChoice === 'scissors') {
                winner.textContent = 'Win';
                return;
            } else {
                winner.textContent = 'Lose';
                return;
            }
        }
        if (playerChoice === 'paper') {
            if(opponentChoice === 'rock') {
                winner.textContent = 'Win';
                return;
            } else {
                winner.textContent = 'Lose';
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if(opponentChoice === 'paper') {
                winner.textContent = 'Win';
                return;
            } else {
                winner.textContent = 'Lose';
                return;
            }
        }
    }


    
    playMatch();
};


game();