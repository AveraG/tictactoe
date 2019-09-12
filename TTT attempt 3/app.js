$(document).ready(function() { //tells java not to run immediately
    
let player1 = "X"; //creates X mark
let player2 = "O"; //creates O mark

let moves = [0,0,0,0,0,0,0,0,0]

let currentTurn= 1;
let movesMade = 0 //no moves made yet. 

let sqr=$(".square"); //creates square variable
let winnerContainer = $(".winner"); //winner variable
let reset = $(".reset"); //reset variable
    
sqr.on('click',function(e){ //begin click function
    if (moves[this.id] > 0){
        alert ("No!");
        if (currentTurn === 1) {
            event.target.innerHTML = player1; //if current turn is = to 1, it's player 1
            event.target.style.color = "black"; //color of x
            currentTurn++ //changes to player2
        } else {
            event.target.innerHTML = player2;
            event.target.style.color = "black"; //color of o
            currentTurn--; //changes to player 1
        }
 } else {
    movesMade++; //adds new move into movesMade
    var move = this.id;
    moves[move]++;
 }

   if(currentTurn === 1) {
       event.target.innerHTML = player1; //if current turn is = to 1, it's player 1
       event.target.style.color = "black"; //color of x
       currentTurn++ //changes to player2
   } else {
       event.target.innerHTML = player2;
       event.target.style.color = "black"; //color of o
       currentTurn--; //changes to player 1
   }

   if(checkForWinner()) { //the winner is the opposite of current turn, since turn change happns within click function
       let theWinner = currentTurn === 1 ?player2:player1; //if currentTurn is player1, player2 wins. Else player1 wins
        declareWinner(theWinner); //passes theWinner through declareWinner
    }
});

function stayClick() {
    if(sqr.on) {
        moves[i]++;
    }
}


function checkForWinner() {
    if(movesMade > 4) { //don't check for winner until after 5 moves
        var moves = Array.prototype.slice.call($(".square")); //call an array and slice will return a new array on the starting end of the index we use (squares)
        var results = moves.map(function(square) {   
            return square.innerHTML;
        })

        let winCombo = [ //array of wining indexes
            [0, 1, 2],
            [0, 4, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ];

        return winCombo.find(function(combo) {
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) { //check to see if it isn't empty, then see if they're all equal. Move through all winning combos, if index 0 isn't anything it returns, if it is, it checks one and two. if not empty, checks if they're equal to each other
                return true;
            } else {
                return false;
            }
        })
    } 
}

function declareWinner(winner) { //stops game when someone wins
    winnerContainer.css('display', 'block');
    reset.css('display', 'block');
    winner = winner === player1 ? 'X ' : 'O '; 
    winnerContainer.html(winner + "Wins!!!"); 
}

})



//KEEP PEOPLE FROM PLAYING, RESET INDEX ADDITIONS WITH RESET BUTTON