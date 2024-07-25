
var boot = function(game){}

boot.prototype = {

	preload: function() {
        game.load.image('backgroundMenu', 'assets/imgs/backgroundCSS.png');
        game.load.image('preloaderBar', 'assets/imgs/misc/preloadBar.png');
        game.load.image('clickPic', 'assets/imgs/misc/clickPic.png');
        game.load.image('turnPhone', 'assets/imgs/misc/turnPhone.png');

	},

	create: function() {
        setScale();
        game.stage.backgroundColor = "#DBE6E7";
		game.state.start('preloader');

	},

	update: function() {
	},
}

