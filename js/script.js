function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';

      else if (argMoveId == 2) {
            return 'papier';
        }

        else if (argMoveId == 3) {
            return 'nożyce'
        }
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

/* function getMoveName(argMoveId){
  if(argMoveId == ){
    return '';
  } */


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if (randomNumber == 1) {
    computerMove = 'kamień';

else if (randomNumber == 2) {
        computerMove = 'papier'
    }

    else if (randomNumber == 3) {
        computerMove = 'nożyce'
    }

} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = getMoveName(randomNumber);

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

/* if (playerInput == '1') {
    playerMove = 'kamień';

  else if (playerInput == '2') {
        playerMove = 'papier'
    }

    else if (playerInput == '3') {
        playerMove = 'nożyce'
    }
} */

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
}

else if (playerInput < 3) {
    printMessage('nieznany ruch')
}

else (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis')
}

if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
}

else if (playerInput < 3) {
    printMessage('nieznany ruch')
}

else (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis')
}

if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Przegrałeś!');
}

else if (playerInput < 3) {
    printMessage('nieznany ruch')
}

else (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis')
}




function displayResult(argComputerMove) {
    if (argComputerMove == );

    console.log('moves:', argComputerMove, argPlayerMove);
}

function displayResult(argPlayerMove) {
    if (argPlayerMove == );

    console.log('moves:', argComputerMove, argPlayerMove);
}