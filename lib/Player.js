// this is defining a class, 'player' & equiv to an initialize method.
function Player(name) {
  this.name = name;
};

// this is defining a method 'picks' which stores the given 'pick' argument against the pick variable, equiv to method def assigning given argument to an instance variable:
Player.prototype.picks = function(pick) {
  this.pick = pick;
  
};
