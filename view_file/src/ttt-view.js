class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard()
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const selected = $(event.currentTarget);
      this.makeMove(selected);
    })
    
  }

  makeMove($square) {
    // $square.css("background-color", "white");
    try{
    const currentPlayer = this.game.currentPlayer;
    this.game.playMove($square.data("pos"))
    $square.addClass("clicked");
    $square.addClass(currentPlayer);
  }
  catch(e){
      alert(e.msg);
    }
    if (this.game.isOver()){
      let $h3 = $("<h3></h3>");
      $h3.text(`${this.game.winner()} has won the game!`);
      this.$el.append($h3);
      $("li").css("color", "red");
      $(`li.clicked.${this.game.winner()}`).css("backgroundColor", "green");
      $(`li.clicked.${this.game.winner()}`).css("color", "white");
      this.$el.off("click");
    }
  }


  setupBoard() {
    const $ul = $("<ul></ul>");
    this.$el.append($ul);


    // if ($li.attr("class") === "unclicked") {
      
    // }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li></li>");
        $li.data("pos", [i,j])
        $ul.append($li);
      }
    }
  }
}

module.exports = View;
