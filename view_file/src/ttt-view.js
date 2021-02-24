class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard()
  }

  bindEvents() {
    
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $("<ul></ul>");
    this.$el.append($ul);

    // if ($li.attr("class") === "unclicked") {
      
    // }

    for (let i = 1; i <= 9; i++) {
      let $li = $("<li></li>");
      $ul.append($li);
    }
  }
}

module.exports = View;
