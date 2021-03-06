function signUp(username, email, password) {
	var user = new Parse.User();
	    user.set("username", username);

	    user.set("password", password);
	    user.set("email", email);
	    
	    // other fields can be set just like with Parse.Object
	    //user.set("phone", "6465963855"); 
	    user.signUp(null, {
	      success: function(user) {
	        // Hooray! Let them use the app now.
	        window.location.href = "menu.html"
	      },
	      error: function(user, error) {
	        // Show the error message somewhere and let the user try again.
	        alert("Error: " + error.code + " " + error.message + " " + user.username);
	      }
	    });
}

function logIn(username, password) {
	Parse.User.logIn(username, password, {
	  success: function(user) {
	    // Do stuff after successful login.
	    window.location.href = "menu.html"
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
	  }
	});
}

function logOut() {
	Parse.User.logOut();
	window.location.href = "index.html"
}