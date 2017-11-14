//this game will have 1 state only
var GameState = {

	//initiate game level settings
	init: function() {

	},
	//loads the game assets before game starts
	preload: function() {

	},
	create: function() {

	},
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
