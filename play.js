//Carrier (occupies 5 spaces), Battleship (4), Cruiser (3), Submarine (3), and Destroyer (2).
var destroyer = 2;
var submarine = 3;
var cruiser = 1;
var battleship = 4;
var carrier = 5;

var winHits = 21;
var totalHits = 0;
var missesLeft = 12;

gameOver = false;

var gameBoard = [
    [0, 2, 2, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 4, 4, 4]
]

//Ship Life: 
var destroyerHits = 0;
var submarineHits = 0;
var cruiserHits = 0;
var battleshipHits = 0;
var carrierHits = 0;

var shipsSunk = [];

//Make Table 
var table = $('#tb');
var row, cell;

for (var i = 0; i < gameBoard.length; i++) {
    row = $('<tr />');
    table.append(row);
    for (var j = 0; j < gameBoard[i].length; j++) {
        cell = $('<td value=' + gameBoard[i][j] + '>' + gameBoard[i][j] + '</td>');
        row.append(cell);
    }
}

$("td").click(function() {
    console.log("clicked")
    console.log($(this).attr("value"));
    boat = ($(this).attr("value"));
    switch (boat) {
        case "2":
            console.log("HIT A 2");
            $(this).addClass("hit");
            totalHits += 1;
            destroyerHits += 1;
            if (destroyerHits === 2) {
                shipsSunk.push(" Destroyer");
                $("#ships-sunk").text(shipsSunk);
            }
            break;
        case "3":
            console.log("HIT A 3");
            $(this).addClass("hit");
            totalHits += 1;
            submarineHits += 1;
            if (submarineHits === 3) {
                shipsSunk.push(" Submarine");
                $("#ships-sunk").text(shipsSunk);
            }
            break;
        case "1":
            console.log("HIT A 1");
            $(this).addClass("hit");
            totalHits += 1;
            cruiserHits += 1;
            if (cruiserHits === 3) {
                shipsSunk.push(" Cruiser");
                $("#ships-sunk").text(shipsSunk);
            }
            break;
        case "4":
            console.log("HIT A 4");
            $(this).addClass("hit");
            totalHits += 1;
            battleshipHits += 1;
            if (battleshipHits === 4) {
                shipsSunk.push(" Battleship");
                $("#ships-sunk").text(shipsSunk);
            }
            break;
        case "5":
            console.log("HIT A 5");
            $(this).addClass("hit");
            totalHits += 1;
            carrierHits += 1;
            if (carrierHits === 5) {
                shipsSunk.push(" Carrier");
                $("#ships-sunk").text(shipsSunk);
            }
            break;
        case "0":
            console.log("MISS");
            $(this).addClass("miss");
            missesLeft -= 1;
            console.log(missesLeft);
            $("#hits-left").text(missesLeft);
            break;
    }
    if (shipsSunk.length === 5) {
        console.log("YOU WIN");
        gameOver = true;
        $("td").off("click");
    }
    if (missesLeft === 0) {
        console.log("You loose...");
        $("#hits-left").text("Sorry You Loose...");
        gameOver = true;
        $("td").off("click");
    }
})