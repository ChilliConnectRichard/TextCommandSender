module.exports = {

    play : function (sdk, command) {
        var command = command.toUpperCase();
        var moveIndex = Math.floor(Math.random() * 3);
        var possibleMoves = ["ROCK", "PAPER", "SCISSORS"];
        var computerMove = possibleMoves[moveIndex];
        var message = "Your: " + command + " Pigeon: " + computerMove;
        
        if (command === computerMove) {
            return message + " Stale Mate";
        }
        
        if (command === "ROCK") {
            if(computerMove === "PAPER"){
                return message + " You Lose :(";
            } else {
                return message + " You Win!! :)";
            }
        }
        
        if (command === "PAPER") {
            if(computerMove === "SCISSORS"){
                return  message + " You Lose :(";
            } else {
                return message + " You Win!! :)";
            }
        }
        
        if (command === "SCISSORS") {
            if(computerMove === "ROCK"){
                return  message + " You Lose :(";
            } else {
                return message + " You Win!! :)";
            }
        }
        
        return message;
    }
}