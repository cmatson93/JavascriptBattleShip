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
        console.log("location", $(this).attr("value"));
        var location = ($(this).attr("value"));
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
    console.log(loc.split(","));
    var arr1 = (loc.split(","));
    var arr2 = (arr1[0].split("("))
    var arr3 = (arr1[1].split(")"));
    var x = arr2[1];
    var y = arr3[0];
    x = parseInt(x);
    y = parseInt(y);
    console.log(typeof(x));
}