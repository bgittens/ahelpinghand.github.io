
var db = firebase.firestore();
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
  if (slideIndex > x.length) {
	  slideIndex = 1;
  } 
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
  if (n > slides.length) {
	  slideIndex = 1;
  } 
    if (n < 1) {
		slideIndex = slides.length;
	}
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

	console.log(formID);
	var opt1;
	var opt2;
	var opt3;
	var doc;
	var doc2;
	var doc3;
	var opp = db.collection(formID);

	if(formID === "opp_info") {
		opt1 = document.getElementById("v_search_city").value;
		doc = opp.where("location", "==", opt1);
		
		console.log(doc);
	} 
	
	else if(formID === "internships_info") {
		opt1 = document.getElementById("i_search_state").value;
		opt2 = document.getElementById("i_search_interest").value;
		doc = opp.where("state", "==", opt1);
		doc2 = opp.where("interest", "==", opt2);
		
		console.log(doc, doc2);
		//getResults(doc, opt1, doc2, opt2);
	} 
	
	else if(formID === "a_submit") {
		opt1 = document.getElementById("a_search_state").value;
		opt2 = document.getElementById("a_search_interest").value;
		opt3 = document.getElementById("a_search_length").value;
		doc = opp.where("state", "==", opt1);
		doc2 = opp.where("interest", "==", opt2);
		doc3 = opp.where("length", "==", opt3);
		
		console.log(doc, doc2, doc3);
		//getResults(doc, opt1, doc2, opt2, doc3, opt3);
	} 
	
	else if(formID === "sc_submit") {
		opt1 = document.getElementById("sc_search_type").value;
		opt2 = document.getElementById("sc_search_interest").value;
		doc = opp.where("type", "==", opt1);
		doc2 = opp.where("interest", "==", opt2);
		
		console.log(doc, doc2);
		//getResults(doc, opt1, doc2, opt2);
	} 
	
	else if(formID === "collegeClass_info") {
		opt1 = document.getElementById("c_search_state").value;
		opt2 = document.getElementById("c_search_interest").value;
		doc = opp.where("state", "==", opt1);
		doc2 = opp.where("interest", "==", opt2);
		
		console.log(doc, doc2);
		//getResults(doc, opt1, doc2, opt2);
	} 
	
	else if(formID ==="summerProgram_info") {
		opt1 = document.getElementById("su_search_state").value;
		opt2 = document.getElementById("su_search_interest").value;
		opt3 = document.getElementById("su_search_length").value;
		doc = opp.where("state", "==", opt1);
		doc2 = opp.where("interest", "==", opt2);
		doc3 = opp.where("length", "==", opt3);
		
		console.log(doc, doc2, doc3);
		//getResults(doc, opt1, doc2, opt2, doc3, opt3);
	}
	
});

/*
//var citiesRef = db.collection("cities");

//function search(doc) {

	//doc search element based on what search button was clicked in the nav bar
	

		
		//getResults(opt1, opt2, opt3);
	
	
	//get that collection based on the above and go through the option that they chose (ex. location, interest, length)
	
	
	//choose the ones that match with their search and put those items in a temporary list that resets on every search
	//for (var h = 0; h < list.length; h++){
		
	//}
	
	//go through a for loop to display each item based on list[i] (index); this is done to put them into the corresponding spaces in the premade template for search results
//}
//make alert if not all inputs are put in, search for top input first then look for more specifications

//function inputAll() {
//}

function getResults(doc, opt1, doc2, opt2, doc3, opt3) {
	
	if(doc2 === undefined && doc3 === undefined){
		console.log(doc.data().name);
		
	} 
	
	else if(doc3 === undefined){
		console.log(doc.data().opt1, doc2.data().opt2);
		
	} 
	
	else{
		console.log(doc.data().opt1, doc2.data().opt2, doc3.data().opt3);
	}
}

if(opt2 === undefined && opt3 === undefined){
		console.log(formID, opt1);
		//getResults(opt1);
		
	} else if(opt3 === undefined){
		console.log(formID, opt1, opt2);
		//getResults(opt1, opt2);
	} else{
	*/