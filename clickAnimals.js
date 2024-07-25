var click_animals = function(game) {};


click_animals.prototype = {

    preload: function() { 

    },

    create: function() { 

        // Reset variables and creates check marks, error marks and background

        resetVariables();
        checkMark = game.add.sprite(-1000, -1000, 'checkMark');
        errorMark = game.add.sprite(-1000, -1000, 'errorMark');
        game.add.tileSprite(0, 0, 1200, 600, 'background');

        // Creates the timer

        minuteTimer = game.time.events.add(Phaser.Timer.SECOND * 60, createEndingScreen, this);

        // Call createImages function passing the current state array as an argument

    	createImages(animals);

        // Creates the timer text once

        var textStyle = { font: "38px Arial", fill: "#000000", align: "center"};
        timerText = game.add.text(900, 20, "Time left: " + game.time.events.duration, textStyle);


    },
    
    update: function() {

        // Makes the timer looks great and check if game has ended or not

        var timing = game.time.events.duration/1000
        timerText.setText("");

        if (!gameEnded) {

            timerText.setText("Time left: " + timing.toFixed(1));

        } else {

            imagesGroup.forEach(function(item){
            item.kill();
            })

            removeText();

        }


    },
};

