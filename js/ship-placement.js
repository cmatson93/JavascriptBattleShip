var destroyer = 0;
var submarine = 1;
var cruiser = 2;
var battleship = 3;
var carrier = 4;

var shipLength;

//default direction=horizontal, have to click manually to chage
//horizontal = true vertical = false
var dir = true;

//Highlight selected ship for ship placement.
$('h6').click(function() {
    $("h6").removeClass('selected');
    $(this).addClass('selected');
});

//Get info to place ship
$(".ships").click(function() {
    console.log("ship", $(this).attr("value"));
    var ship = ($(this).attr("value"));
    switch (ship) {
        case "0":
            shipLength = 2;
            break;
        case "1":
            shipLength = 3;
            break;
        case "2":
            shipLength = 3;
            break;
        case "3":
            shipLength = 4;
            break;
        case "4":
            shipLength = 5;
            break;
    }
    $("td").click(function() {
        console.log("location", $(this).attr("id"));
        var location = ($(this).attr("id"));
        shipPlacement(shipLength, dir, location);
    })
    $(".dir-btn").click(function() {
        console.log($(this).attr("value"));
        dir = ($(this).attr("value"));
    })
})

function shipPlacement(lng, dir, loc) {
    console.log("length", lng);
    console.log("dirrection", dir);
    console.log("location", loc);
    console.log("+++++++");
    console.log(typeof(loc));
    var xy = loc.split("");
    console.log(loc.split(""));
    var x = parseInt(xy[0]);
    var y = parseInt(xy[1]);
    console.log("x", x);
    console.log("y", y);
    var placement = [];
    placement.push(loc);
    console.log(placement);
    console.log("dir", dir);
    console.log(typeof(dir));
    if (dir === "true") {
        for (let i = 1; i < lng; i++) {
            var shipPlace = x + i;
            shipPlace = shipPlace.toString() + y;
            console.log("ship places", shipPlace);
            placement.push(shipPlace);
            console.log("new placement", placement);
        }
    } else if (dir === "false") {
        for (let i = 1; i < lng; i++) {
            var shipPlace = y + i;
            shipPlace = x + shipPlace.toString();
            console.log("ship places", shipPlace);
            placement.push(shipPlace);
            console.log("new placement", placement);
        }
    }
    for (let i = 0; i < placement.length; i++) {
        var id = "#" + placement[i];
        $(id).addClass('placed');

    }
}