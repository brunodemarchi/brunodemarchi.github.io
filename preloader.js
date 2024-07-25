
var preloader = function(game){}

preloader.prototype = {

	preload: function() {

        game.background = this.add.sprite(0, 0, 'backgroundMenu');
        game.clickPic = this.add.sprite(0, 50, 'clickPic');
        game.clickPic.x = game.world.centerX - game.clickPic.width / 2;
        game.preloadBar = this.add.sprite(game.world.centerX, 430, 'preloaderBar');
        game.preloadBar.x = game.world.centerX - game.preloadBar.width / 2;

        this.load.setPreloadSprite(game.preloadBar);

        //ANIMALS **************

        game.load.image('BEAR', 'assets/imgs/animals/BEAR.png');
        game.load.image('BIRD', 'assets/imgs/animals/BIRD.png');
        game.load.image('CAMEL', 'assets/imgs/animals/CAMEL.png');
        game.load.image('CAPYBARA', 'assets/imgs/animals/CAPYBARA.png');
        game.load.image('CAT', 'assets/imgs/animals/CAT.png');
        game.load.image('CHICKEN', 'assets/imgs/animals/CHICKEN.png');
        game.load.image('COW', 'assets/imgs/animals/COW.png');
        game.load.image('CROCODILE', 'assets/imgs/animals/CROCODILE.png');
        game.load.image('DEER', 'assets/imgs/animals/DEER.png');
        game.load.image('DOG', 'assets/imgs/animals/DOG.png');
        game.load.image('DOLPHIN', 'assets/imgs/animals/DOLPHIN.png');
        game.load.image('DONKEY', 'assets/imgs/animals/DONKEY.png');
        game.load.image('DUCK', 'assets/imgs/animals/DUCK.png');
        game.load.image('ELEPHANT', 'assets/imgs/animals/ELEPHANT.png');
        game.load.image('FERRET', 'assets/imgs/animals/FERRET.png');
        game.load.image('FISH', 'assets/imgs/animals/FISH.png');
        game.load.image('FOX', 'assets/imgs/animals/FOX.png');
        game.load.image('FROG', 'assets/imgs/animals/FROG.png');
        game.load.image('GIRAFFE', 'assets/imgs/animals/GIRAFFE.png');
        game.load.image('GOAT', 'assets/imgs/animals/GOAT.png');
        game.load.image('GORILLA', 'assets/imgs/animals/GORILLA.png');
        game.load.image('GUINEA PIG', 'assets/imgs/animals/GUINEA-PIG.png');
        game.load.image('HIPPOPOTAMUS', 'assets/imgs/animals/HIPPOPOTAMUS.png');
        game.load.image('HORSE', 'assets/imgs/animals/HORSE.png');
        game.load.image('IGUANA', 'assets/imgs/animals/IGUANA.png');
        game.load.image('KANGAROO', 'assets/imgs/animals/KANGAROO.png');
        game.load.image('KOALA', 'assets/imgs/animals/KOALA.png');
        game.load.image('LEOPARD', 'assets/imgs/animals/LEOPARD.png');
        game.load.image('LION', 'assets/imgs/animals/LION.png');
        game.load.image('MONKEY', 'assets/imgs/animals/MONKEY.png');
        game.load.image('MOUSE', 'assets/imgs/animals/MOUSE.png');
        game.load.image('OSTRICH', 'assets/imgs/animals/OSTRICH.png');
        game.load.image('PIG', 'assets/imgs/animals/PIG.png');
        game.load.image('RABBIT', 'assets/imgs/animals/RABBIT.png');
        game.load.image('RACCOON', 'assets/imgs/animals/RACCOON.png');
        game.load.image('SEAL', 'assets/imgs/animals/SEAL.png');
        game.load.image('SHARK', 'assets/imgs/animals/SHARK.png');
        game.load.image('SHEEP', 'assets/imgs/animals/SHEEP.png');
        game.load.image('SNAKE', 'assets/imgs/animals/SNAKE.png');
        game.load.image('SQUIRREL', 'assets/imgs/animals/SQUIRREL.png');
        game.load.image('TIGER', 'assets/imgs/animals/TIGER.png');
        game.load.image('TURTLE', 'assets/imgs/animals/TURTLE.png');
        game.load.image('ZEBRA', 'assets/imgs/animals/ZEBRA.png');


        // CLOTHES ************

        game.load.image('BELT', 'assets/imgs/clothes/BELT.png');
        game.load.image('BOOTS', 'assets/imgs/clothes/BOOTS.png');
        game.load.image('BRA', 'assets/imgs/clothes/BRA.png');
        game.load.image('DRESS', 'assets/imgs/clothes/DRESS.png');
        game.load.image('FLIP FLOP', 'assets/imgs/clothes/FLIP-FLOP.png');
        game.load.image('GLOVES', 'assets/imgs/clothes/GLOVES.png');
        game.load.image('HAT', 'assets/imgs/clothes/HAT.png');
        game.load.image('HIGH HEELS', 'assets/imgs/clothes/HIGH-HEELS.png');
        game.load.image('JACKET', 'assets/imgs/clothes/JACKET.png');
        game.load.image('OVERCOAT', 'assets/imgs/clothes/OVERCOAT.png');
        game.load.image('PAJAMAS', 'assets/imgs/clothes/PAJAMAS.png');
        game.load.image('PANTS', 'assets/imgs/clothes/PANTS.png');
        game.load.image('SANDALS', 'assets/imgs/clothes/SANDALS.png');
        game.load.image('SCARF', 'assets/imgs/clothes/SCARF.png');
        game.load.image('SHIRT', 'assets/imgs/clothes/SHIRT.png');
        game.load.image('SHOES', 'assets/imgs/clothes/SHOES.png');
        game.load.image('SHORTS', 'assets/imgs/clothes/SHORTS.png');
        game.load.image('SKIRT', 'assets/imgs/clothes/SKIRT.png');
        game.load.image('SNEAKERS', 'assets/imgs/clothes/SNEAKERS.png');
        game.load.image('SOCKS', 'assets/imgs/clothes/SOCKS.png');
        game.load.image('SUIT', 'assets/imgs/clothes/SUIT.png');
        game.load.image('SWEATER', 'assets/imgs/clothes/SWEATER.png');
        game.load.image('T-SHIRT', 'assets/imgs/clothes/T-SHIRT.png');
        game.load.image('TIE', 'assets/imgs/clothes/TIE.png');

        // Fruits *****************

        game.load.image('APPLE', 'assets/imgs/fruits/APPLE.png');
        game.load.image('AVOCADO', 'assets/imgs/fruits/AVOCADO.png');
        game.load.image('BANANA', 'assets/imgs/fruits/BANANA.png');
        game.load.image('BLACKBERRY', 'assets/imgs/fruits/BLACKBERRY.png');
        game.load.image('CANARY MELON', 'assets/imgs/fruits/CANARY-MELON.png');
        game.load.image('CASHEW', 'assets/imgs/fruits/CASHEW.png');
        game.load.image('CHERRY', 'assets/imgs/fruits/CHERRY.png');
        game.load.image('COCONUT', 'assets/imgs/fruits/COCONUT.png');
        game.load.image('CUCUMBER', 'assets/imgs/fruits/CUCUMBER.png');
        game.load.image('GRAPE', 'assets/imgs/fruits/GRAPE.png');
        game.load.image('GUAVA', 'assets/imgs/fruits/GUAVA.png');
        game.load.image('JACKFRUIT', 'assets/imgs/fruits/JACKFRUIT.png');
        game.load.image('KIWI', 'assets/imgs/fruits/KIWI.png');
        game.load.image('LEMON', 'assets/imgs/fruits/LEMON.png');
        game.load.image('LIME', 'assets/imgs/fruits/LIME.png');
        game.load.image('MANGO', 'assets/imgs/fruits/MANGO.png');
        game.load.image('ORANGE', 'assets/imgs/fruits/ORANGE.png');
        game.load.image('PAPAYA', 'assets/imgs/fruits/PAPAYA.png');
        game.load.image('PASSION FRUIT', 'assets/imgs/fruits/PASSION-FRUIT.png');
        game.load.image('PEACH', 'assets/imgs/fruits/PEACH.png');
        game.load.image('PEAR', 'assets/imgs/fruits/PEAR.png');
        game.load.image('PERSIMMON', 'assets/imgs/fruits/PERSIMMON.png');
        game.load.image('PINEAPPLE', 'assets/imgs/fruits/PINEAPPLE.png');
        game.load.image('PUMPKIN', 'assets/imgs/fruits/PUMPKIN.png');
        game.load.image('STAR FRUIT', 'assets/imgs/fruits/STAR-FRUIT.png');
        game.load.image('STRAWBERRY', 'assets/imgs/fruits/STRAWBERRY.png');
        game.load.image('TANGERINE', 'assets/imgs/fruits/TANGERINE.png');
        game.load.image('TOMATO', 'assets/imgs/fruits/TOMATO.png');
        game.load.image('WATERMELON', 'assets/imgs/fruits/WATERMELON.png');




        // colors *****************

        game.load.image('BEIGE', 'assets/imgs/colors/BEIGE.png');
        game.load.image('BLACK', 'assets/imgs/colors/BLACK.png');
        game.load.image('BLUE', 'assets/imgs/colors/BLUE.png');
        game.load.image('BROWN', 'assets/imgs/colors/BROWN.png');
        game.load.image('GREEN', 'assets/imgs/colors/GREEN.png');
        game.load.image('GREY', 'assets/imgs/colors/GREY.png');
        game.load.image('ORANGe', 'assets/imgs/colors/ORANGE.png');
        game.load.image('PINK', 'assets/imgs/colors/PINK.png');
        game.load.image('PURPLE', 'assets/imgs/colors/PURPLE.png');
        game.load.image('WHITE', 'assets/imgs/colors/WHITE.png');
        game.load.image('YELLOW', 'assets/imgs/colors/YELLOW.png');








        game.load.image('background', 'assets/imgs/backgroundFlag.png');


        // BUTTONS ************

        game.load.spritesheet('repeatButton', 'assets/imgs/buttons/repeatButton.png', 78, 78);

        game.load.spritesheet('backButton', 'assets/imgs/buttons/backButton.png', 78, 78);

        game.load.spritesheet('animalButton', 'assets/imgs/buttons/animalButton.png', 500, 200);

        game.load.spritesheet('clothesButton', 'assets/imgs/buttons/clothesButton.png', 500, 200);

        game.load.spritesheet('fruitsButton', 'assets/imgs/buttons/fruitsButton.png', 500, 200);

        game.load.spritesheet('colorsButton', 'assets/imgs/buttons/colorsButton.png', 500, 200);



        game.load.image('checkMark', 'assets/imgs/misc/checkMark.png');
        game.load.image('errorMark', 'assets/imgs/misc/errorMark.png');
        game.load.image('checkIcon', 'assets/imgs/misc/checkIcon.png');
        game.load.image('errorIcon', 'assets/imgs/misc/errorIcon.png');


	},

	create: function() {
 
		game.preloadBar.kill();
        var textStyle = { font: '80px Arial', fill: "#4A7B89", align: "center"};
        if (this.game.device.desktop) {
            var text = game.add.text(0, 400, "Click to start", textStyle);
            text.x = game.world.centerX - text.width / 2;
        } else {
            var text = game.add.text(0, 400, "Tap to start", textStyle);
            text.x = game.world.centerX - text.width / 2;
        }



	},

	update: function() {
        if(game.input.activePointer.isDown) {
            game.state.start('mainMenu');
        }
	},
}

