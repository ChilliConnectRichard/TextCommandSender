module.exports = {

    getHunger: function(sdk) {
        var hunger = 5;
        var hungerSaved = sdk.CloudData.getPlayerData(["HUNGER"]).Values;
        
        if(hungerSaved.length === 1) {
            hunger = hungerSaved[0].Value;
            var lastTimeFed = new Date(hungerSaved[0].DateModified);
            var diff = Date.now() - lastTimeFed.getTime();
            hunger = hunger + Math.floor(diff / (5 * 60 * 1000));
            hunger = hunger > 10 ? 10 : hunger;
        }
        
        return hunger;
    },
    
    getHealth: function(sdk) {
        var health = sdk.CloudData.getPlayerData(["HEALTH"]).Values;
        
        if(health.length === 0) {
            health = 10;
        } else {
            health = health[0].Value;
        }
        
        return health;
    },
    
    feed: function (sdk) {
        var hunger = this.getHunger(sdk);
        
        if(hunger - 1 >= 0) {
            --hunger;
            sdk.CloudData.setPlayerData("HUNGER", hunger);
        } else {
            var health = this.getHealth(sdk);
            if(health - 1 >= 0) {
                --health;
                sdk.CloudData.setPlayerData("HEALTH", health);
            }
        }
        return hunger;
    }
}