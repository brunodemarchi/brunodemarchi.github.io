// ********************************
// Animals Variables

var chosenImage, lastImage;
var imagesGroup;
var animals = ['BEAR', 'BIRD','CAMEL','CAPYBARA', 'CAT','CHICKEN','COW','CROCODILE','DEER', 'DOG', 'DOLPHIN','DONKEY','DUCK', 'ELEPHANT', 'FERRET', 'FISH', 'FOX', 'FROG','GIRAFFE','GOAT','GORILLA', 'GUINEA PIG','HIPPOPOTAMUS', 'HORSE', 'IGUANA','KANGAROO','KOALA','LEOPARD', 'LION', 'MONKEY', 'MOUSE','OSTRICH','PIG', 'RABBIT','RACCOON', 'SEAL', 'SHARK','SHEEP', 'SNAKE','SQUIRREL','TIGER', 'TURTLE','ZEBRA'];

var clothes = ['BELT', 'BOOTS', 'BRA', 'DRESS', 'FLIP FLOP', 'GLOVES', 'HAT', 'HIGH HEELS', 'JACKET', 'OVERCOAT', 'PAJAMAS', 'PANTS', 'SANDALS', 'SCARF', 'SHIRT', 'SHOES', 'SHORTS', 'SKIRT', 'SNEAKERS', 'SOCKS', 'SUIT', 'SWEATER','T-SHIRT', 'TIE'];


var fruits = ['APPLE', 'AVOCADO', 'BANANA', 'BLACKBERRY', 'CANARY MELON', 'CASHEW', 'CHERRY', 'COCONUT', 'CUCUMBER', 'GRAPE', 'GUAVA', 'JACKFRUIT', 'KIWI', 'LEMON', 'LIME', 'MANGO', 'ORANGE', 'PAPAYA', 'PASSION FRUIT', 'PEACH', 'PEAR', 'PERSIMMON', 'PINEAPPLE', 'PUMPKIN', 'STAR FRUIT', 'STRAWBERRY', 'TANGERINE', 'TOMATO', 'WATERMELON'];

var colors = ['BEIGE', 'BLACK', 'BLUE', 'BROWN', 'GREEN', 'GREY', 'ORANGe', 'PINK', 'PURPLE', 'WHITE', 'YELLOW'];

// ********************************
// Texts Variables

var text, 
    redText, 
    clicksCorrectText, 
    clicksWrongText, 
    timerText;

var mainFont;

// ********************************
// Clicks Variables

var clicksCorrect = 0,
    clicksWrong = 0;

// ********************************
// Game Variables

var gameEnded = false;

// ********************************
// Buttons variables

var repeatButton,
	backButton,
    smallBackButton,
	animalButton,
    clothesButton;

// ********************************
// Markers variables

var checkMark,
	errorMark,
    checkIcon,
    errorIcon;


// ********************************
// Timer Variables
var minuteTimer;


// ********************************
// Clear Variables Functions

function resetVariables() {
	gameEnded = false;
	clicksCorrect = 0;
	clicksWrong = 0;
}

// ********************************
// Start Functions

function clickAnimalsStart() {
	game.state.start('clickAnimals');
}

function clickClothesStart() {
    game.state.start('clickClothes');
}

function clickFruitsStart() {
    game.state.start('clickFruits');

}

function clickColorsStart() {
    game.state.start('clickColors');
}

function startMenu() {
	game.state.start('mainMenu');
}

function restartState() {
    game.state.start(game.state.current);
}

// ********************************
// Animal Functions

function removeText(){
    redText.setText("");
    clicksCorrectText.setText("");
    clicksWrongText.setText("");

}

// ********************************
// Creating Ending Screen

function createEndingScreen(type) { 
    checkIcon.kill();
    errorIcon.kill();
	checkMark.kill();
	errorMark.kill();

    gameEnded = true;
    var textStyle, text;

    if (type == "wrong") {
    	game.time.events.remove(minuteTimer);
    	textStyle = { font: "50px Arial", fill: "#D90000", align: "center"};
    	text = game.add.text(400, 200, "You missed more than five times! \n Try again!", textStyle);
    	text.x = this.game.width / 2 - text.width / 2;
    } else {
    	textStyle = { font: "50px Arial", fill: "#000000", align: "center"};
    	text = game.add.text(400, 200, "You got " + clicksCorrect + " right in one minute!", textStyle);
    	text.x = game.width / 2 - text.width / 2;
    }

	createEndingButtons();
}

function createEndingButtons() {
    smallBackButton.kill();
	repeatButton = game.add.button(650, 480, 'repeatButton', restartState, this, 1, 0, 1);
	
    repeatButton.inputEnabled = true;
    repeatButton.input.useHandCursor = true;

    backButton = game.add.button(450, 480, 'backButton', startMenu, this, 1, 0, 1);
    backButton.inputEnabled = true;
    backButton.input.useHandCursor = true;	
}

function setScale() {

    if (this.game.device.desktop)
        {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.minWidth = 600;
            game.scale.minHeight = 300;
            game.scale.maxWidth = 1200;
            game.scale.maxHeight = 600;
            game.scale.pageAlignHorizontally = true;
            game.scale.setScreenSize(true);
        }

     else

        {
            game.scale.startFullScreen(true);
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            game.scale.maxWidth = 1024;
            game.scale.maxHeight = 672;
            game.scale.forceOrientation(true, false, 'turnPhone');
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            game.scale.setScreenSize(true);
        }


}

function leaveIncorrectOrientation() {
    game.paused = false;
}

function enterIncorrectOrientation() {
    game.paused = true;
}


function clickListener(image, array) {
    // Check if the player got the picture right and gives points accordingly

    if (image.key == chosenImage) {

        clicksCorrect++;
        checkMark = game.add.sprite(image.x, image.y, 'checkMark');

    } else { 

        clicksWrong++;
        errorMark = game.add.sprite(image.x, image.y, 'errorMark')

    }

    // More than 5 mistakes? End game

    if (clicksWrong > 5) {
        createEndingScreen("wrong");
    }

    // Disable input for a little, so you don't click/tap accidentaly

    imagesGroup.forEach(function(item){
    item.inputEnabled = false;
    })

    // Set a little time out so the marks stay a little

    setTimeout(function(){
    smallBackButton.kill();    
    errorIcon.kill();
    checkIcon.kill();
    checkMark.kill();
    errorMark.kill();
    imagesGroup.forEach(function(item){
    item.kill();
    })

    removeText();

    createImages(array);
    }, 200);

}

function createImages(array) {

    if (gameEnded) {    
        imagesGroup.forEach(function(item){
        item.kill();
        })
        return false;
    }

    shuffle(array);

    lastImage = chosenImage;

    while (lastImage === chosenImage) {
    chosenImage = array[rand(0,2)];
    }

    imagesGroup = game.add.group();

    for (var i = 0; i < 3; i++) {
        var image = imagesGroup.create(80 + (i * 360), 100, array[i]);
        image.inputEnabled = true;
        image.input.useHandCursor = true;
        image.events.onInputDown.add(function(image){clickListener(image, array)}, this);
        image.events.onInputOver.add(alphaLight, this);
        image.events.onInputOut.add(alphaNormal, this);
    }

    // creating the go back button

    smallBackButton = game.add.button(20, 10, 'backButton', startMenu, this, 1, 0, 1);
    smallBackButton.scale.setTo(0.60,0.60);
    smallBackButton.inputEnabled = true;
    smallBackButton.input.useHandCursor = true;  

    // text creation

      
    var textStyle = { font: '80px Arial', fill: "#4A7B89", align: "center"};

    redText = game.add.text(510, 470, chosenImage.toLowerCase().capitalize(), textStyle);
    redText.x = this.game.width / 2 - redText.width / 2;

    textStyle = { font: '30px Arial', fill: "#000000", align: "center"};

    clicksCorrectText = game.add.text(1040, 490, clicksCorrect + "", textStyle);
    clicksCorrectText.fontSize = "50px";

    clicksWrongText = game.add.text(50, 490, clicksWrong + "/5", textStyle);
    clicksWrongText.fontSize = "50px";

    checkIcon = game.add.sprite(1105, 490, 'checkIcon');
    
    errorIcon = game.add.sprite(135, 500, 'errorIcon');
    
}
