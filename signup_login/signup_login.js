var auth = firebase.auth();
var db = firebase.firestore();

//turns input type:password from html back to text when the button is clicked
function showPassword() {
	var x = document.getElementById("password_inp");
	var img = document.getElementById("check1");
  	if (x.type === "password") {
    	x.type = "text";
		img.src = "open_eye.png";
  	} else {
		x.type = "password";
		img.src = "closed_eye.png";
  	}
}

//has a second button so the user can view their password input independently
function showPassword2() {
  var x = document.getElementById("password2_inp");
	var img = document.getElementById("check2");
  	if (x.type === "password") {
    	x.type = "text";
		img.src = "open_eye.png";
  	} else {
		x.type = "password";
		img.src = "closed_eye.png";
  	}
}

//another button so the user can view their password when they login vs signup
function showPassword3() {
  var x = document.getElementById("logpassword_inp");
	var img = document.getElementById("check3");
  	if (x.type === "password") {
    	x.type = "text";
		img.src = "open_eye.png";
  	} else {
		x.type = "password";
		img.src = "closed_eye.png";
  	}
}

//populates values in age dropdown and sets the ID
for(var i=13; i<=50; i++){
	var select = document.getElementById("age_drop");
	var option = document.createElement("OPTION");
	select.options.add(option);
	option.text = i;
	option.value = i;
}


$("#sign_up").submit( function(e){
	e.preventDefault();	
	
	var name = document.getElementById("name_inp").value;
	var phone = document.getElementById("phone_inp").value;
	var email = document.getElementById("email_inp").value;
	var age = document.getElementById("age_drop").value;
	var password = document.getElementById("password_inp").value;
	var repassword = document.getElementById("password2_inp").value;

	//calls the funtion to save the user's info
	saveUserToDatabase(name, email, phone, age);
	/*if(password.length < 6){
		passTooShort();
	}*/
	//creates a new user with their password and email
	if(password !== repassword){
		passDontMatch();
	} else if(password.length < 6){
		passTooShort();
	} else{
		auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
		
	document.getElementById("name_inp").value = "";
	document.getElementById("phone_inp").value = "";
	document.getElementById("email_inp").value = "";
	document.getElementById("age_drop").value = "13";
	document.getElementById("password_inp").value = "";
	document.getElementById("password2_inp").value = "";
	}
	
	
	});


function passDontMatch() {
  var x = document.getElementById("try_again");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function passTooShort() {
  var x = document.getElementById("too_short");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//saves info like name, email, phone number, and age to database
function saveUserToDatabase(name, email, phone, age) {
    db.collection("users").add({
		name: name,
		email: email,
		phone: phone,
		age: age
    });
}
 
$("#log_in").submit( function(e){
	e.preventDefault();	
	var email = document.getElementById("logemail_inp").value;
	var password = document.getElementById("logpassword_inp").value;
	//signs a user in if they had already created a password with their email
	auth.signInWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorCode, errorMessage);
  		// ...
	});
	
	document.getElementById("logemail_inp").value = "";
	document.getElementById("logpassword_inp").value = "";
});

function logOut(){
	//signs the user out when they click the logout button
	auth.signOut().then(function() {
  		console.log("Sign-out successful.");
		}).catch(function(error) {
  		console.log("An error happened.");
		// ...
	});
}

auth.onAuthStateChanged(firebaseUser => { 
	if(firebaseUser){
		console.log(firebaseUser);
	} else{
		console.log("not logged in");
	}
});


