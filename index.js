
var pseudo1 = ""
var pseudo2 = ""

while (pseudo1 === "" && pseudo2 === "") {
    pseudo1 = prompt("What is the name of this first player?");
    pseudo2 = prompt("What is your name of the second player");
}

const first_player = new Character(9, 2, pseudo1)
const second_player = new Character(10, 5, pseudo2)




/////////////////////////////////////////////////////////////////////////////////

const game = new Game()
game.newTurn()
