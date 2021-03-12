
function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randNum = Math.floor(Math.random() * Math.floor(3));
    return choices[randNum];
}

function playRound() {
    let userChoice = document.getElementById("choices").value;
    computerPlay = computerChoice();
    switch(userChoice) {
        case 'Rock':
            if(computerPlay == 'Paper') {
                document.getElementById("outcome").innerHTML = 'The Computer used Paper. You Lose!';
                console.log('The Computer used Paper. You Lose!');
                return 'computer';
            } else if(computerPlay == 'Rock') {
                document.getElementById("outcome").innerHTML = 'The Computer used Rock. It is a tie!';
                console.log('The Computer used Rock. It\'s a tie!');
                return 'tie';
            } else {
                document.getElementById("outcome").innerHTML = 'The Computer used Scissors. You win!';
                console.log('The Computer used Scissors. You win!');
                return 'user';
            }
            break;
        case 'Paper': 
            if(computerPlay == 'Scissors') {
                document.getElementById("outcome").innerHTML = 'The Computer used Scissors. You Lose!';
                console.log('The Computer used Scissors. You Lose!');
                return 'computer';
            } else if(computerPlay == 'Paper') {
                document.getElementById("outcome").innerHTML = 'The Computer used Paper. It is a tie!';
                console.log('The Computer used Paper. It\'s a tie!');
                return 'tie';
            } else {
                document.getElementById("outcome").innerHTML = 'The Computer used Rock. You win!';
                console.log('The Computer used Rock. You win!');
                return 'user';
            }
            break;
        case 'Scissors': 
            if(computerPlay == 'Rock') {
                document.getElementById("outcome").innerHTML = 'The Computer used Rock. You Lose!';
                console.log('The Computer used Rock. You Lose!');
                return 'computer';
            } else if(computerPlay == 'Rock') {
                document.getElementById("outcome").innerHTML = 'The Computer used Scissors. It is a tie!';
                console.log('The Computer used Scissors. It\'s a tie!');
                return 'tie';
            } else {
                document.getElementById("outcome").innerHTML = 'The Computer used Paper. You win!';
                console.log('The Computer used Paper. You win!');
                return 'user';
            }
            break;
        default:
            console.log('Error');
    }
}

// let dict = {
//     computer: 0,
//     user: 0,
//     tie: 0
// }
// let x = 0
// while(x < 5){
//     let userChoice = prompt('Enter rock, paper, or scissors').toUpperCase();
//     let computerChoice = computerPlay();

//     let result = playRound(userChoice, computerChoice); 
//     switch(result) {
//         case 'computer': 
//             dict.computer += 1;
//             break;
//         case 'user':
//             dict.user += 1;
//             break;
//         case 'tie': 
//             dict.tie += 1;
//             break
//         default:
//             console.log("Add Error");
//     }
//     x++;
// }

// console.log('You won %d times. The computer won %d times. You tied %d times.', dict.user, dict.computer, dict.tie)
    


