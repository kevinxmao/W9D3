class HanoiView {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupTowers();
        this.$el.on("click", "ul", this.clickTower.bind(this));
        this.render();
    }

    setupTowers() {
        for (let i = 0; i < 3; i++) {
            let $ul = $("<ul></ul>");
            $ul.data("id", i);
            for (let j = 0; j < 3; j++) {
                let $li = $("<li></li>");
                $ul.append($li);
            }
            this.$el.append($ul);
        }
    }

    clickTower(event) {
        const $ulClicked = $(event.currentTarget);
        $ulClicked.addClass("selected");
        if (this.idx === undefined) {
            this.idx = $ulClicked.data("id");
        } else {
            this.idx2 = $ulClicked.data("id");
            let moved = this.game.move(this.idx, this.idx2);
            if (!moved) {
                alert("Invalid move");
            }
            $("ul").removeClass();
            this.idx = undefined;
        }
        this.render();
        if (this.game.isWon()) { 
            alert("Good work, you!");
            this.$el.off('click');
        }
    }

    // [3]
    render() {
        const towers = this.game.towers;

        $("li").removeClass()
        let $uls = $("ul")
        $uls.each( (idx, ele) => {
            let thisTower = towers[idx];
            if (thisTower.length) {
                let j = 3;
                for (let i = 0; i < thisTower.length; i++) {
                    let size = thisTower[i];
                    let $li = $(ele).children(`li:nth-child(${j})`)
                    switch (size) {
                        case 1:
                            $li.addClass("one");
                            break;
                        case 2:
                            $li.addClass("two");
                            break;
                        default:
                            $li.addClass("three");
                    }
                    j--;
                }
            }
        })
    }
}

module.exports = HanoiView;
