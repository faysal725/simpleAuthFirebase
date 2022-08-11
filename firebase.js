
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";    
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCvKszyBijXfRmJyA6Jty2Hitb6Ojxgkl0",  
  authDomain: "userauth1-eb63c.firebaseapp.com",  
  projectId: "userauth1-eb63c",  
  storageBucket: "userauth1-eb63c.appspot.com",  
  messagingSenderId: "511267641011",  
  appId: "1:511267641011:web:02238a027f162e094782c6"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth()



let signin = document.querySelector(".signin-submit");

// user creation 
signin.addEventListener("click", function(event) {
event.preventDefault();

let childrens = signin.parentElement.children
let userData ={
    name: signin.parentElement.children[2].value,
    email: signin.parentElement.children[3].value,
    password: signin.parentElement.children[4].value
}

createUserWithEmailAndPassword(auth, userData.email, userData.password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
// ...
alert("user created")
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
if (errorMessage) {
        alert("Existing user detected")
    }
});



});
// user creation 



// login data collection 
let login = document.querySelector(".login-submit");

login.addEventListener("click", function(event) {
  event.preventDefault();
  let childrens = login.parentElement.children
  let userData ={
    email: login.parentElement.children[2].value,
    password: login.parentElement.children[3].value
  }
  
    signInWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert(`Welcome ${userData.email}`)
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorMessage) {
        alert("wrong username or password")
    }
    });

});
// login data collection 
