// destroyer = 0;
// submarine = 1;
// cruiser = 2;              <--- Ship lengths for personal reference.
// battleship = 3;
// carrier = 4;

//Init some global variables. 
var shipLength;
//default direction=horizontal, have to click manually to chage
//horizontal = true vertical = false
var dir = "true";
var shipObj = {
    destroyer: [],
    submarine: [],
    cruiser: [],
    battleship: [],
    carrier: []
};

//Highlight selected ship for ship placement.
$('h6').click(function() {
    $("h6").removeClass('selected');
    $(this).addClass('selected');
});

//Get info to place ship when user clicks on ship name. 
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
        shipPlacement(ship, shipLength, dir, location);
    })
    $(".dir-btn").click(function() {
        console.log($(this).attr("value"));
        dir = ($(this).attr("value"));
    })
})

function shipPlacement(ship, lng, dir, loc) {
    console.log("length", lng);
    console.log("dirrection", dir);
    console.log("location", loc);
    console.log("ship", ship)
    console.log("+++++++");
    var xy = loc.split("");
    var x = parseInt(xy[0]);
    var y = parseInt(xy[1]);
    console.log("x", x, "y", y);
    var placement = [];
    placement.push(loc);
    if (dir === "true") {
        console.log("horizontal");
        for (let i = 1; i < lng; i++) {
            console.log(i);
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
    makeShipObj(placement, ship);
}

function makeShipObj(placement, ship) {
    switch (ship) {
        case "0":
            shipObj.destroyer = { coordinates: placement, hits: [] };
            console.log(shipObj);
            break;
        case "1":
            shipObj.submarine = { coordinates: placement, hits: [] };
            console.log(shipObj);
            break;
        case "2":
            shipObj.cruiser = { coordinates: placement, hits: [] };
            console.log(shipObj);
            break;
        case "3":
            shipObj.battleship = { coordinates: placement, hits: [] };
            console.log(shipObj);
            break;
        case "4":
            shipObj.carrier = { coordinates: placement, hits: [] };
            console.log(shipObj);
            break;
    }
}