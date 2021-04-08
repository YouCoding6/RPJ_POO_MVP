class Game {

    players = [first_player, second_player];
    turnLeft = 10


    newTurn() {
        while (this.turnLeft != 0) {
            if (this.players[0].status != "winner" && this.players[1].status != "winner") {
                const turn = new Turn()
                turn.startTurn(this.turnLeft, this.players)
            }
            this.turnLeft -= 1
        }
    }

}


