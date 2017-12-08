$( document ).ready(function() {
    console.log( "ready!" );
    $("#girl").hover(girlHoverIn,girlHoverOut);
    $("#boy1").hover(boyHoverIn,boyHoverOut);
});



var girlHoverIn = function(){
  // $("#girl").css('opacity',.5);
  // $("#girltext").text("Fewer girls are diagnosed because they don’t fit autism stereotypes and they mask symptoms better than boys do.");
  $("#girl").attr('src',"white_girl.svg");
}

var girlHoverOut = function(){
  // $("#girl").css({'opacity':1});
  // $("#girltext").text("");
  $("#girl").attr('src',"white_girl.svg");
}

var boyHoverIn = function(){
  $("#boy1").attr('src',"white_boy.svg");
  // $("#bro").show();
}

var boyHoverOut = function(){
  $("#boy1").attr('src',"boy.svg");
  // $("#bro").hide();
}
