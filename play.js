var ship0 = 2;
var ship1 = 3;
var ship2 = 3;
var ship3 = 4;
var ship4 = 4;
var ship5 = 5;

var winHits = 21;
var totalHits = 0;
var missesLeft = 12;

var gameBoard = [
    [0, 2, 2, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 4, 0],
    [0, 3, 0, 0, 0, 5, 0, 0, 4, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 4, 4, 4]
]
console.log("javascript");

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

//For Ship in all-ships: 
//Ask where?
//Start point, direction 
//(L,X,Y,D) =>

$("td").click(function() {
    console.log("clicked")
    console.log($(this).attr("value"));
    boat = ($(this).attr("value"));
    switch (boat) {
        case "2":
            console.log("HIT A 2");
            $(this).addClass("hit");
            totalHits += 1;
            console.log(totalHits);
            break;
        case "3":
            console.log("HIT A 3");
            $(this).addClass("hit");
            totalHits += 1;
            console.log(totalHits);
            break;
        case "4":
            console.log("HIT A 4");
            $(this).addClass("hit");
            totalHits += 1;
            console.log(totalHits);
            break;
        case "5":
            console.log("HIT A 5");
            $(this).addClass("hit");
            totalHits += 1;
            console.log(totalHits);
            break;
        case "0":
            console.log("MISS");
            $(this).addClass("miss");
            missesLeft -= 1;
            console.log(missesLeft);
            $("#hits-left").text(missesLeft);
            break;
    }
    if (totalHits === winHits) {
        console.log("YOU WIN");
    }
    if (missesLeft === 0) {
        console.log("You loose...");
        $("#hits-left").text("Sorry You Loose...");
    }
})