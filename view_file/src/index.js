const View = require("./ttt-view")
const Game = require("../../tictactoe/game")

  $(() => {
    // Your code here
    console.log("DOM loaded")
    const game = new Game();
    const $el = $(".ttt");

    const view = new View(game, $el);
    view.bindEvents();

  }); 
