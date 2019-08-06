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

  var db = firebase.firestore();

$("#inpform").submit( function(e){
	e.preventDefault();	
	
	var name = document.getElementById("name_inp").value;
	var desc = document.getElementById("email_inp").value;
	var state = document.getElementById("state_inp").value;
    var req = document.getElementById("message_inp").value;
    var link = document.getElementById("link_inp").value;
	var photo = document.getElementById("photo_inp").value;
	var length = document.getElementById("length_inp").value;
	var interest = document.getElementById("interest_inp").value;	

	saveContactToDatabase(name, desc, state, req, link, photo, length, interest);

document.getElementById("name_inp").value = " ";
document.getElementById("email_inp").value = " ";
	document.getElementById("state_inp").value = " ";
    document.getElementById("message_inp").value = " ";
    document.getElementById("link_inp").value = " ";
	 document.getElementById("photo_inp").value = " ";
 document.getElementById("length_inp").value = " ";
 document.getElementById("interest_inp").value = " ";
});

function saveContactToDatabase(name, desc, state, req, link, photo, length, interest) {
    doc = db.collection("collegeClasses_info").add({
		name: name,
		description: desc,
		state: state,
        requirements: req,
        link: link,
		photo: photo,
		length: length,
		interest: interest
    }); 
	console.log("it works");
}
