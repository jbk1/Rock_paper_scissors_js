// this is defining a class, 'game' and storing the given argument against 'player1' and 'player2' instance variables:
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};


// this is creating a hash nested inside a hash (called an object in JS) and defines what each 'key object' 'beats', with 1st dimension containing the object in question and the 2nd dimension containing the value of what the object beats assigned against a key of 'beats'
Game.prototype.PAIRS = {
    rock:     { scissors: 'blunts', lizard: 'squashes'},
    paper:    { rock: 'smothers', spock: 'disproves'},
    scissors: { paper: 'cuts', lizard: 'decapitates'},
    spock:		{ scissors: 'smashes', rock: 'vaporises'},
    lizard:		{ spock: 'poisons', paper: 'eats'}
      };
  

Game.prototype.winner = function() {
 // declaring that the method isSamePick returns true, retun 'null', surely should return something, ie 'game draw' or somthing, as opposed to null?
  if(this.isSamePick()) return null;
// this looks into the PAIRS hash, returns the 1st level key that's equiv to player1's 'pick', which is into the 2nd level, then returns the value assigned to the beats key. If this value is equivalent to player2's pick then it returns player1 as the winner, else it returns player2. 
  if(this._victoryVerbFor(this.player1.pick, this.player2.pick)) {
   return this.player1;
  }
  else {
  	return this.player2;
  	}
	};


// this defines 
Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
};


Game.prototype.winningMessage = function() {
  var message;
//this creates and returns an array with 1st element of winner().name, 2nd victory verb, 3rd loser pick, 4th loser name, all .join by a, ' ', space.
  if(this.winner()) {
    message = [this.winner().name,
    this._victoryVerbFor(this.winner().pick, this.loser().pick),
    this.loser().name].join(' ');
    // else returns "Draw"
  } else {
    message = 'Draw'
  }
  return message;
};


// a method that returns the corresponding value attached to the key of pick or opponent pick: 
Game.prototype._victoryVerbFor = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
};


// this will return true or false pending on whether player1's pick (variable assigned in the picks method) is equal to player2's pick.
Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};


