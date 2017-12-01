$( document ).ready(function() {
    console.log( "ready!" );
    $("#girl").hover(girlHoverIn,girlHoverOut);
    $("#boy1").hover(boyHoverIn,boyHoverOut);
});



var girlHoverIn = function(){
  $("#girl").css('opacity',.5);
}

var girlHoverOut = function(){
  $("#girl").css({'opacity':1});
}

var boyHoverIn = function(){
  $("#boy1").attr('src',"white_boy.svg");
  $("#bro").text("This is my little brother, Logan.");
}

var boyHoverOut = function(){
  $("#boy1").attr('src',"boy.svg");
  $("#bro").text("");
}
