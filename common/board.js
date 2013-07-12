/**
 * Instance of a board
 */
var Board = function() {
};

Board.prototype.generate = function() {
    var slots = new Array();

    for(var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            slots.push(new Slot(i,j));
        }
    }

    return slots;
};

/**
 * Instance of a slot
 */
var Slot = function(x, y) {
    this.x = x;
    this.y = y;
};