/**
 * Instance of a player
 */
var Player = function(params) {
    if (!params) {
        return;
    }

    this.id = params.id;
    this.name = params.name;
    this.slots = new Array();
};

Player.prototype = new Player();
Player.prototype.constructor = Player;