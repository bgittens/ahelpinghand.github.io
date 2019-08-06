var db = firebase.firestore;
var x = "";
var slideIndex = 0;
carousel();

function carousel() {
  var x = document.getElementsByClassName("mySlides");
  for (var i = 0; i < x.length; i++) {
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
  var slides = document.getElementsByClassName("tests");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


$("form").submit( function(e){
	e.preventDefault();	
	var submit = $(this);
  	var formID = submit.attr("id");
	x = formID;
	
});


function search() {
	
	//doc search element based on what search button was clicked in the nav bar
	db.collection(x).get().then(function(doc){
		
		
	});
	
	//get that collection based on the above and goi through the option that they chose (ex. location, interest, length)
	
	//choose the ones that match with their search
	
	//put those items in a temporary list that resets on every search
	
	//go through a for loop to display each item based on list[i] (index) 
	
	//this is done to put them into the corresponding spaces in the premade template for search results
}

function getResults() {
	
}
