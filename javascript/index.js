var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("tests");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$("#v_submit").submit( function(e){
	e.preventDefault();	
	
	var select = document.getElementById("v_search");
	console.log(select.value);
	
});

$("#i_submit").submit( function(e){
	e.preventDefault();	
	
	var select = document.getElementById("i_search");
	console.log(select.value);
	
});

$("#a_submit").submit( function(e){
	e.preventDefault();	
	
	var select = document.getElementById("a_search");
	console.log(select.value);
	
});

$("#sc_submit").submit( function(e){
	e.preventDefault();	
	
	var select = document.getElementById("sc_search");
	console.log(select.value);
	
});

$("#c_submit").submit( function(e){
	e.preventDefault();	
	
	var select = document.getElementById("c_search");
	console.log(select.value);
	
});

$("#su_submit").submit( function(e){
	e.preventDefault();	
	
	var select = document.getElementById("su_search");
	console.log(select.value);
	
});

function search() {
	//doc search element based on what search button was clicked in the nav bar
	
	//get that collection based on the above and goi through the option that they chose (ex. location, interest, length)
	
	//choose the ones that match with their search
	
	//put those items in a temporary list that resets on every search
	
	//go through a for loop to display each item based on list[i] (index) 
	
	//this is done to put them into the corresponding spaces in the premade template for search results
}