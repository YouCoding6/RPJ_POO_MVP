class Turn {
    players_winner = []
    startTurn(turn_left, players) {

        this.display_status(players);
        if (players[0].hp > 0 && players[1].hp == 0) {
            players[0].status = "winner"
        }
        if ((players[0].hp == 0) && (players[1] > 0)) {
            players[1].status = "winner"
        }
        if (players[0].hp > 0 && players[1].hp > 0) {
            console.log("La partie est en cours....")
        }
        if (players[0].status != "winner" || players[1].status != "winner") {
            console.log(`It's a turn of ${players[0].name}(left ${turn_left} turns)`)
            players[0].dealDamage(players[1])
            if (players[1].status != "loser") {
                console.log(`It's a turn of ${players[1].name}(left ${turn_left} turns)`)
                players[1].dealDamage(players[0])
            }


        }

    }

    display_status(players) {
        players.map((player) => {
            console.log(`${player.name}: ${player.status}`)
        })
    }

};

