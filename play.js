var ship0 = 2;
var ship1 = 3;
var ship2 = 3;
var ship3 = 4;
var ship4 = 4;
var ship5 = 5;

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
        cell = $('<td>' + gameBoard[i][j] + '</td>');
        row.append(cell);
    }
}

//For Ship in all-ships: 
//Ask where?
//Start point, direction 
//(L,X,Y,D) =>