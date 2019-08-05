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
	var email = document.getElementById("email_inp").value;
	var phone = document.getElementById("phone_inp").value;
    var message = document.getElementById("message_inp").value;
    var link = document.getElementById("link_inp").value;

	saveContactToDatabase(name, email, phone, message, link);

	document.getElementById("name_inp").value = " ";
	document.getElementById("email_inp").value = " "; 
	document.getElementById("phone_inp").value = " ";	
    document.getElementById("message_inp").value = " ";
    document.getElementById("link_inp").value = " ";
});

function saveContactToDatabase(name, email, phone, message, link) {
    doc = db.collection("opp_info").add({
		name: name,
		description: email,
		location: phone,
        requirements: message,
        link: link
    }); 
	console.log("it works");
}
  