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
		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(this.placeItem, this);


		this.pet = this.game.add.sprite(175, 300, 'pet');
		this.pet.anchor.setTo(0.5);
		this.pet.scale.setTo(3.5);

		//custom parameters
		this.pet.customParams = {health: 100, fun:100};

		//draggable pet
		this.pet.inputEnabled = true;
		this.pet.input.enableDrag();

		//creates sprites on canvas, sets size and anchor point and allows user input
		this.strawberry = this.game.add.sprite(55, 570, 'strawberry');
		this.strawberry.anchor.setTo(0.5);
		this.strawberry.scale.setTo(1.2);
		this.strawberry.inputEnabled = true;
		this.strawberry.events.onInputDown.add(this.pickItem, this);
		this.strawberry.customParams = {health: 20};

		this.burger = this.game.add.sprite(130, 570, 'burger');
		this.burger.anchor.setTo(0.5);
		this.burger.inputEnabled = true;
		this.burger.events.onInputDown.add(this.pickItem, this);
		this.burger.customParams = {health: -20, fun: 10};


		this.toy = this.game.add.sprite(216, 570, 'toy');
		this.toy.anchor.setTo(0.5);
		this.toy.inputEnabled = true;
		this.toy.events.onInputDown.add(this.pickItem, this);
		this.toy.customParams = {fun: 10};


		this.rotate = this.game.add.sprite(288, 570, 'rotate');
		this.rotate.scale.setTo(.6);
		this.rotate.anchor.setTo(0.5);
		this.rotate.inputEnabled = true;
		this.rotate.events.onInputDown.add(this.rotatePet, this);

		this.buttons = [this.strawberry, this.burger, this.toy, this.rotate];

		//nothing is selected
		this.selectedItem = null;
		//checks if ui is blocked 
		this.uiBlocked = false;
	},

	//pick item method 
	pickItem: function(sprite, event){
		if(!this.uiBlocked) {
		console.log('pick item');
		this.clearSelection();
		//alpha property makes sprite semi transparent
		sprite.alpha = 0.5;
		this.selectedItem = sprite;
		}
	},
	//rotate pet method
	rotatePet: function(sprite, event){
		if(!this.uiBlocked) {
		console.log('rotating');
		this.uiBlocked = true;

		this.clearSelection();
		sprite.alpha = 0.5;
		// tween animation rotates pet 
		var petRotation = this.game.add.tween(this.pet);
		petRotation.to({angle: '+720'}, 1000);
		petRotation.onComplete.add(function(){
			this.uiBlocked = false;
			sprite.alpha = 1;
			this.pet.customParams.fun += 10;
			console.log(this.pet.customParams.fun);
		}, this);
		petRotation.start();
		}
	},

	clearSelection: function() {
		//loops through buttons array and changes transparency(alpha) back to 1
		//used inside of pickItem method
		this.buttons.forEach(function(element, index){
			element.alpha = 1;
		});
		this.selectedItem = null;
	},

	placeItem: function(sprite, event) {
		//if nothing has been selected and ui is blocked you can't place things on the screen
		if(this.selectedItem && !this.uiBlocked) {
			var x = event.position.x;
			var y = event.position.y;

			var newItem = this.game.add.sprite(x, y, this.selectedItem.key);
			newItem.anchor.setTo(0.5);
			newItem.customParams = this.selectedItem.customParams;
		}

	}
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
