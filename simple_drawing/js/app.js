//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mousedown = false;

//when clicking on control list items
$(".controls").on("click", "li", function(){
    //deselect sibling elements
    $(this).siblings().removeClass("selected");
    //select clicked element
    $(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
});
//when "new color" is pressed
$("#revealColorSelect").click(function(){
    //show colour select or hide colour select
    changeColor();
    $("#colorSelect").toggle();
});
    //update the new colour span
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}
//when colour slider change
$("input[type=range]").change(changeColor);


//when "add colour" is pressed
$("#addNewColor").click(function(){
    //append the colour to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    // select the new colour
    $newColor.click();
});

//on mouse event on the canvas
$canvas.mousedown(function(e) {
    lastEvent = e;
    mousedown = true;
}).mousemove(function(e){
    //draw lines
    if(mousedown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function(){  
    mousedown = false;
}).mouseleave(function(){
    $canvas.mouseup();
});


  







