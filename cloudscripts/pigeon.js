ChilliConnect.Logger.info("Command recieved: " + ChilliConnect.Request.command);

var bird = require("bird");

var rps = require ("ROCK_PAPER_SCISSORS");

var sdk = ChilliConnect.getSdk("2.15.0");

var response = {
    Message: ""
};

var commands = ChilliConnect.Request.command.split(" ", 2);

switch(commands[0].toUpperCase()) {
    case "GAME":
        response.Message = rps.play(sdk, commands[1].toUpperCase());
        break;
    case "HEALTH?":
        var health = bird.getHealth(sdk);
        response.Message = "health: " + health; 
        break;
    case "HUNGRY?":
        var hunger = bird.getHunger(sdk);
        if(hunger >= 10) {
            response.Message = "pure dead starving like";
        } else if(hunger >= 5) {
            response.Message = "aye up mate I'm waiting to be fed";
        } else if(hunger >= 1) {
            response.Message = "not bothered like";
        } else {
            response.Message = "ease up I'm stuffed";
        }
        break;
    case "FEED":
        var newHunger = bird.feed(sdk);
        response.Message = "nom nom nom H:" + newHunger;
        break;
    default:
        response.Message = "cooo what?";
        break;
}

ChilliConnect.Logger.info("Operation complete.");

return response;
