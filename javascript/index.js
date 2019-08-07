var firebaseConfig = {
	apiKey: "AIzaSyAjOEPov0G8Tea7Mjm_tTVVbwO7A5VPeQU",
	authDomain: "a-helping-hand-551ce.firebaseapp.com",
	databaseURL: "https://a-helping-hand-551ce.firebaseio.com",
	projectId: "a-helping-hand-551ce",
	storageBucket: "a-helping-hand-551ce.appspot.com",
	messagingSenderId: "22285102950",
	appId: "1:22285102950:web:c08150dbdde3ccfd"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore;
var x = "";
var slideIndex = 0;
var list = [];
carousel();

function carousel() {
  var x = document.getElementsByClassName("mySlides");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); // Change image every 4 seconds
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

//checks to see if any of the forms are submitted
$("form").submit( function(e){
	e.preventDefault();	
  	
	var formID = $(this).attr("id");
	x = formID;
	var opt1;
	var opt2;
	var opt3;
	
	if(formID === "v_submit") {
		opt1 = document.getElementById("v_search_city").value;
	} else if(formID === "i_submit") {
		opt1 = document.getElementById("i_search_city").value;
		opt2 = document.getElementById("i_search_interest").value;
	} else if(formID === "a_submit") {
		opt1 = document.getElementById("a_search_city").value;
		opt2 = document.getElementById("a_search_interest").value;
		opt3 = document.getElementById("a_search_length").value;
	} else if(formID === "sc_submit") {
		opt1 = document.getElementById("sc_search_type").value;
		opt2 = document.getElementById("sc_search_interest").value;
	} else if(formID === "c_submit") {
		opt1 = document.getElementById("c_search_city").value;
		opt2 = document.getElementById("c_search_interest").value;
	} else if(formID ==="su_submit") {
		opt1 = document.getElementById("su_search_state").value;
		opt2 = document.getElementById("su_search_interest").value;
		opt3 = document.getElementById("su_search_length").value;
	}
	
	
	
	console.log(formID, opt1, opt2, opt3);
	search(formID, opt1, opt2, opt3);
	
});


function search(formID, opt1, opt2, opt3) {

	//doc search element based on what search button was clicked in the nav bar
	
	if(opt2 === undefined && opt2 === undefined){
		doc = db.collection(x).get().then(function(doc){
		
		});
	} else if(opt3 === undefined){
		
	} else{
		
	}

	
	//get that collection based on the above and go through the option that they chose (ex. location, interest, length)
	
	
	//choose the ones that match with their search and put those items in a temporary list that resets on every search
	for (var h = 0; h < n.length; h++){
		
	}
	
	//go through a for loop to display each item based on list[i] (index); this is done to put them into the corresponding spaces in the premade template for search results
	
	
}

function getResults() {
	
	for (var j = 0; j < list.length; j++){
		var click = document.getElementById(x.value([i]);
		list[i] = click;
	}
}
