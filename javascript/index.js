
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

var opt1;
var opt2;
var opt3;
var doc;
var doc2;
var doc3;
var x = [];

if(formID === "opp_info") {
	window.open("searchResults/volunteer.html", "_self");
	/*opt1 = document.getElementById("v_search_city").value;
	doc = db.collection(formID).where("location", "==", opt1);
	search(doc);*/
} 
	
else if(formID === "internships_info") {
	window.open("searchResults/internship.html", "_self");
	/*opt1 = document.getElementById("i_search_state").value;
	opt2 = document.getElementById("i_search_interest").value;
	doc = db.collection(formID).where("state", "==", opt1);
	doc2 = db.collection(formID).where("interest", "==", opt2);
	search2(doc, doc2);
	window.open("searchResults/internship.html");*/
} 
	
else if(formID === "academicOpp_info") {
	window.open("searchResults/academic.html", "_self");
	/*opt1 = document.getElementById("a_search_state").value;
	opt2 = document.getElementById("a_search_interest").value;
	opt3 = document.getElementById("a_search_length").value;
	doc = db.collection(formID).where("state", "==", opt1);
	doc2 = db.collection(formID).where("interest", "==", opt2);
	doc3 = db.collection(formID).where("length", "==", opt3);
	search3(doc, doc2, doc3);
	window.open("searchResults/academic.html");*/
} 
	
else if(formID === "schoolarshipsComp_info") {
	window.open("searchResults/scholarships.html", "_self");
	/*opt1 = document.getElementById("sc_search_interest").value;
	doc = db.collection(formID).where("interest", "==", opt1);
	search(doc);
	window.open("searchResults/scholarships.html");*/
} 
	
else if(formID === "collegeClass_info") {
	window.open("searchResults/college.html", "_self");
	/*opt1 = document.getElementById("c_search_state").value;
	doc = db.collection(formID).where("state", "==", opt1);
	search(doc);
	window.open("searchResults/college.html");*/
} 
	
else if(formID ==="summerProgram_info") {
	window.open("searchResults/summer.html", "_self");
	/*opt1 = document.getElementById("su_search_state").value;
	opt2 = document.getElementById("su_search_interest").value;
	opt3 = document.getElementById("su_search_length").value;
	doc = db.collection(formID).where("state", "==", opt1);
	doc2 = db.collection(formID).where("interest", "==", opt2);
	doc3 = db.collection(formID).where("length", "==", opt3);
	search3(doc, doc2, doc3);
	window.open("searchResults/summer.html");*/
}

});

/*function search (doc){
doc.get().then(function(result){
// returns all matching documents
result.forEach(function (doc) {
 	console.log(doc.data());	
});
}).catch(function (err){
console.log(err);
// error handling
});
}

function search2(doc, doc2){
doc.get().then(function(result){
// returns all matching documents
result.forEach(function (doc) {
 	console.log(doc.data());	
});
}).catch(function (err){
console.log(err);
// error handling
});

doc2.get().then(function(result){
// returns all matching documents
result.forEach(function (doc) {
console.log(doc.data());
});
}).catch(function (err){
console.log(err);
// error handling
});
} 

function search3(doc, doc2, doc3){
doc.get().then(function(result){
// returns all matching documents
result.forEach(function (doc) {
 	console.log(doc.data());	
});
}).catch(function (err){
console.log(err);
// error handling
});

doc2.get().then(function(result){
// returns all matching documents
result.forEach(function (doc) {
console.log(doc.data());
});
}).catch(function (err){
console.log(err);
// error handling
});

doc3.get().then(function(result){
// returns all matching documents
result.forEach(function (doc) {
console.log(doc.data());
});
}).catch(function (err){
console.log(err);
// error handling
});




function setItem (doc){
	var para = document.CreateElement("p");
	para.innerHTML = doc.data();
}*/