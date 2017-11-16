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
		this.load.image('strawberry', 'assets/imgs/strawberry.png');
		this.load.image('burger', 'assets/imgs/burger.png');
		this.load.image('toy', 'assets/imgs/toy.png');
		this.load.image('rotate', 'assets/imgs/rotate.png');



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

		//draggable pet
		this.pet.inputEnabled = true;
		this.pet.input.enableDrag();
		this.strawberry = this.game.add.sprite(55, 570, 'strawberry');
		this.strawberry.scale.setTo(1.2);
		this.burger = this.game.add.sprite(130, 570, 'burger');
		this.toy = this.game.add.sprite(216, 570, 'toy');
		this.rotate = this.game.add.sprite(288, 570, 'rotate');
		this.rotate.scale.setTo(.6);

	},
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
