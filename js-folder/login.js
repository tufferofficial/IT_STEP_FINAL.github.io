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
  function loginUser() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;
        console.log("Login successful for user: " + user.email);

        window.location.href = "account.html";
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Login failed: " + errorMessage);
        alert("Login failed: " + errorMessage);
      });
  }