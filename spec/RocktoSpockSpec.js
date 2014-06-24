describe("Rock-Paper-Scissors-Spock-Lizard", function(){
  var player1, player2, game;

  beforeEach(function() {
      player1 = new Player('James');
      player2 = new Player('Alex');
      game = new Game(player1, player2);
  });

  describe('draws', function() {

    describe('any identical picks', function() {
      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });
        
        expect(drawGameResults).toEqual([null, null, null]);
      });
    });
  });


  describe('winning and losing', function() {
    
    describe('rock', function() {
      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });
    });


    describe('paper', function() {
      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });
    });


    describe('scissors', function() {
      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });
    });


    describe('spock', function() {
      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat rock', function(){

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });
    });


    describe('lizard', function() {
      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });
      
      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });
      
    });


    describe('victory mesages', function() {
      it("should return the winner's name, the verb and the losers name", function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winningMessage()).toEqual('James squashes Alex');
      });
    });

  });
});


//redundant tests:

// it('should lose to paper', function() {

//         player1.picks('rock');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player2);
//       });


// it('should lose to scissors', function() {

//         player1.picks('paper');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player2);
//       });


// it('should lose to rock', function() {

//         player1.picks('scissors');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player2);
//       });

// it('should lose to paper', function() {

//         player1.picks('spock');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player2);
//       });

//       it('should lose to lizard', function() {

//         player1.picks('spock');
//         player2.picks('lizard');
//         expect(game.winner()).toBe(player2);
//       });

// it('should lose to rock', function() {

//         player1.picks('lizard');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player2);
//       });

//       it('should lose to scissors', function() {

//         player1.picks('lizard');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player2);
//       });