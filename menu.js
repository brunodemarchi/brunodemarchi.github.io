
var main_menu = function(game){}

main_menu.prototype = {

	preload: function() {
	},

	create: function() {

        game.add.tileSprite(0, 0, 1200, 600, 'backgroundMenu');
        
		animalButton = game.add.button(200, 80, 'animalButton', clickAnimalsStart, this, 1, 0, 1);

		animalButton.inputEnabled = true;
		animalButton.input.useHandCursor = true;
		animalButton.scale.setTo(0.75,0.75);

		clothesButton = game.add.button(600, 80, 'clothesButton', clickClothesStart, this, 1, 0, 1);

		clothesButton.inputEnabled = true;
		clothesButton.input.useHandCursor = true;	
		clothesButton.scale.setTo(0.75,0.75);

		fruitsButton = game.add.button(200, 300, 'fruitsButton', clickFruitsStart, this, 1, 0, 1);

		fruitsButton.inputEnabled = true;
		fruitsButton.input.useHandCursor = true;	
		fruitsButton.scale.setTo(0.75,0.75);


		colorsButton = game.add.button(600, 300, 'colorsButton', clickColorsStart, this, 1, 0, 1);

		colorsButton.inputEnabled = true;
		colorsButton.input.useHandCursor = true;	
		colorsButton.scale.setTo(0.75,0.75);
	},

	update: function() {
		
	},

}

