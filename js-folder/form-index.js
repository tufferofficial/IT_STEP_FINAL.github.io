var firebaseConfig = {
    apiKey: "AIzaSyDO7PndBKsBQgvLIZbbAFACR79duE-9kCs",
    authDomain: "form-22e0f.firebaseapp.com",
    projectId: "form-22e0f",
    storageBucket: "form-22e0f.appspot.com",
    messagingSenderId: "453418360946",
    appId: "1:453418360946:web:cf39b45019ba40e7f622eb",
    measurementId: "G-XMKM2Z0VLG",
  };
  firebase.initializeApp(firebaseConfig);

  function registerUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name.trim() === "") {
      alert("Please enter a name.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;

        user
          .updateProfile({
            displayName: name,
          })
          .then(function () {
            console.log("Registration successful for user: " + user.email);
            alert("Registration successful!");
            window.location.href = "login.html";
          })
          .catch(function (error) {
            console.log(
              "Failed to update user's display name: " + error.message
            );
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Registration failed: " + errorMessage);
        alert("Registration failed: " + errorMessage);
      });
  }