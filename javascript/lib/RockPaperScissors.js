// this is defining a class, 'player' & equiv to an initialize method.
function Player(name) {
  this.name = name;
};

// this is defining a method 'picks' which stores the given 'pick' argument against the pick variable, equiv to method def assigning given argument to an instance variable:
Player.prototype.picks = function(pick) {
  this.pick = pick;
};

// this is defining a class, 'game' and storing the given argument against 'player1' and 'player2' instance variables:
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

// this is creating a hash nested inside a hash (called an object in JS) and defines what each 'key object' 'beats', with 1st dimension containing the object in question and the 2nd dimension containing the value of what the object beats assigned against a key of 'beats'
Game.prototype.PAIRS = {
    rock:     { beats: 'scissors' },
    paper:    { beats: 'rock' },
    scissors: { beats: 'paper' }
  };
  
Game.prototype.winner = function() {
 // declaring that the method isSamePick returns true, retun 'null', surely should return something, ie 'game draw' or somthing, as opposed to null?
  if(this.isSamePick()) return null;

// this looks into the PAIRS hash, returns the 1st level key that's equiv to player1's 'pick', which is into the 2nd level, then returns the value assigned to the beats key. If this value is equivalent to player2's pick then it returns player1 as the winner, else it returns player2. 
  if(this.PAIRS[this.player1.pick]['beats'] === this.player2.pick){
  	return this.player1;
  }
  else {
  	return this.player2;
  	}
	};

// this will return true or false pending on whether player1's pick (variable assigned in the picks method) is equal to player2's pick.
Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};




