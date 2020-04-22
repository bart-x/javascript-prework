const playGame = function(playerInput) {

    clearMessages();

    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }

        return 'nieznany ruch';
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
        if (argComputerMove == argPlayerMove) {
            printMessage('REMIS');
        } else if (
            (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')
            ||
            (argPlayerMove == 'papier' && argComputerMove == 'kamień')
            ||
            (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
        ) {
            printMessage('WYGRAŁEM');
        } else {
            printMessage('PRZEGRAŁEM');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    printMessage('JA WYBRAŁEM: ' + playerMove);
    printMessage('KOMPUTER WYBRAŁ: ' + computerMove);

    displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});