var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'game');


game.state.add('clickAnimals', click_animals);  
game.state.add('clickClothes', click_clothes);
game.state.add('clickFruits', click_fruits);
game.state.add('clickColors', click_colors)
game.state.add('preloader', preloader);
game.state.add('mainMenu', main_menu);
game.state.add('boot', boot);
game.state.start('boot');

