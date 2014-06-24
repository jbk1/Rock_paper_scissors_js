describe("Rock-Paper-Scissors-Spock-Lizard", function(){
  var player1, player2, game;

  beforeEach(function() {
      player1 = new Player('James');
      player2 = new Player('Alex');
      game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('spock', function() {
      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });
    });

    describe('spock', function() {
      it('should beat rock', function(){

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      })
    })

    describe('spock', function() {
      it('should lose to paper', function() {

        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      })
    })
    describe('spock', function() {
      it('should lose to lizard', function() {

        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      })
    })

    describe('lizard', function() {
      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      })
    })

    describe('lizard', function() { 
      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      })
    })

    describe('lizard', function() {
      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      })
    })

    describe('scissors', function() {
      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      })
    })

    describe('rock', function() {
      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      })
    })

  })
})