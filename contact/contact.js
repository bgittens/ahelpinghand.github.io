var auth = firebase.auth();
var db = firebase.firestore();

$("#contactform").submit( function(e){
	e.preventDefault();	
	
	var name = document.getElementById("name_inp").value;
	var email = document.getElementById("email_inp").value;
	var phone = document.getElementById("phone_inp").value;
	var message = document.getElementById("message_inp").value;

	saveContactToDatabase(name, email, phone, message);

	document.getElementById("name_inp").value = " ";
	document.getElementById("email_inp").value = " "; 
	document.getElementById("phone_inp").value = " ";	
	document.getElementById("message_inp").value = " ";
});

function saveContactToDatabase(name, email, phone, message) {
    doc = db.collection("contact").add({
		name: name,
		email: email,
		phone: phone,
		message: message
    }); 
	console.log("it works");
}
  
var user = auth.currentUser;

if (user) {
  console.log(user);
} else {
	console.log("nope");
}