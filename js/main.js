var is_showing_1 = false;

document.getElementById("junkFood").addEventListener("click",function_1);

function function_1(){
  if (is_showing_1 == true) {
        document.getElementById("lowCarbon").style.display="none";
    is_showing_1 = false;

  }
  else{
    document.getElementById("lowCarbon").style.display="inherit";
    is_showing_1 = true;
  }
}


//chicken+hover text appears

var is_showing_2 = false;

document.getElementById("vegetable").addEventListener("click",function_2);

function function_2(){
  if (is_showing_2 == true) {
        document.getElementById("highPortein").style.display="none";
    is_showing_2 = false;

  }
  else{
    document.getElementById("highPortein").style.display="inherit";
    is_showing_2 = true;
  }
}


// play+hover text appears

var is_showing_3 = false;

document.getElementById("runExercise").addEventListener("click",function_3);

function function_3(){
  if (is_showing_3 == true) {
        document.getElementById("moreExercise").style.display="none";
    is_showing_3 = false;

  }
  else{
    document.getElementById("moreExercise").style.display="inherit";
    is_showing_3 = true;
  }
}











$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('body, html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});






















