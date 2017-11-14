//this game will have 1 state only
var GameState = {

	//initiate game level settings
	init: function() {
		//keeps aspect ratio and scales game
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignvertically = true;
	},
	//loads the game assets before game starts
	preload: function() {
		this.load.image('background', 'assets/imgs/background.png');
		this.load.image('foods', 'assets/imgs/foods.png');
		this.load.image('strawberry', 'assets/imgs/strawberry.png');
		this.load.image('burger', 'assets/imgs/burger.png');
		this.load.image('toy', 'assets/imgs/toy.png');


		this.load.spritesheet('pet', 'assets/imgs/virtual-pet.png', 32, 32, 14);
	},
	//executed last
	create: function() {
		this.background = this.game.add.sprite(0, 0, 'background');
		this.pet = this.game.add.sprite(175, 300, 'pet');
		this.pet.anchor.setTo(0.5);
		this.pet.scale.setTo(3.5);

		//custom parameters
		this.pet.customParams = {health: 100, fun:100};

		this.strawberry = this.game.add.sprite(72, 570, 'strawberry');
		this.burger = this.game.add.sprite(134, 570, 'burger');
		this.toy = this.game.add.sprite(216, 570, 'toy');

	},
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
