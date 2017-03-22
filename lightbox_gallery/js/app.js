//problem: user when clicking on image goes to a dead end
//solution: Create an overlay with the large image - lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>")
var $caption = $("<p></p>");

  //2.1 an image
$overlay.append($image);

//2. add an overlay
$("body").append($overlay);

  //2.2 a caption
  $overlay.append($caption);

//1. capture the click. event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //1.2 update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //1.1 show overlay 
  $overlay.show();

  //1.3 get childs alt attribute an set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});



//3. When overlay is clicked

$overlay.click(function(){
    //3.1 hide the overlay
  $overlay.hide();

});








