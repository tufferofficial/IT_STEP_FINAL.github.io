// Initialize Firebase
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

var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var passwordField = document.getElementById("password"); 

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var name = user.displayName;
    var email = user.email;

    nameField.textContent = name;
    emailField.textContent = email;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  } else {
    console.log("User is not signed in.");
    window.location.href = "index.html";
  }
});

function editName() {
  var newName = prompt("Enter a new name:");
  if (newName !== null) {
    nameField.textContent = newName;
    updateUserProfile({ displayName: newName });


    localStorage.setItem("name", newName);
  }
}

function editEmail() {
  var newEmail = prompt("Enter a new email:");
  if (newEmail !== null) {
    emailField.textContent = newEmail;
    updateUserEmail(newEmail);
  }
}

function editPassword() {
  var newPassword = prompt("Enter a new password:");
  if (newPassword !== null) {
    updateUserPassword(newPassword);
  }
}

function updateUserProfile(profile) {
  firebase
    .auth()
    .currentUser.updateProfile(profile)
    .then(function () {
      console.log("User profile updated successfully.");
    })
    .catch(function (error) {
      console.log("Error updating user profile:", error);
    });
}

function updateUserEmail(newEmail) {
  firebase
    .auth()
    .currentUser.updateEmail(newEmail)
    .then(function () {
      console.log("User email updated successfully.");
    })
    .catch(function (error) {
      console.log("Error updating user email:", error);
    });
}

function updateUserPassword(newPassword) {
  firebase
    .auth()
    .currentUser.updatePassword(newPassword)
    .then(function () {
      console.log("User password updated successfully.");
    })
    .catch(function (error) {
      console.log("Error updating user password:", error);
    });
}