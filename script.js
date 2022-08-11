
function loginEyeToggle() {
    let x = document.querySelector(".hidden");
    let y = document.querySelector(".togglePass").firstElementChild

    if (x.type === "password") {
      x.type = "text";
      y.className = "fa-solid fa-eye-slash";
    } else {
      x.type = "password";
      y.className = "fa-solid fa-eye";

    }
  }


  function signEyeToggle() {
    let x = document.querySelector(".hidden2");
    let y = document.querySelector("#toggleEye2").firstElementChild

    if (x.type === "password") {
      x.type = "text";
      y.className = "fa-solid fa-eye-slash";
    } else {
      x.type = "password";
      y.className = "fa-solid fa-eye";

    }
  }

  function toggleLogIn() {
    let login = document.querySelector(".login-form")
    let signIn = document.querySelector("#sign-in")

    login.children[2].value="";
    login.children[3].value="";

    login.style.transform= "translateX(100%) translateY(-110%)";
    signIn.style.transform= "translateX(0) translateY(-95%)";
  }


function toggleSignIn() {
  let login = document.querySelector(".login-form")
  let signIn = document.querySelector("#sign-in")

  signIn.children[2].value="";
  signIn.children[3].value="";
  signIn.children[4].value="";

  login.style.transform= "translateX(0) translateY(0%)";
  signIn.style.transform= "translateX(-100%) translateY(0)";

}


// user data collection 
let existUser= [];
fetch("./user.json")
.then(function(resp){
return resp.json()
})
.then(function(data){
  existUser.push(data)
  })




// login data collection 
// let login = document.querySelector(".login-submit");

// login.addEventListener("click", function(event) {
//   event.preventDefault();
//   let childrens = login.parentElement.children
//   let userData ={
//     email: login.parentElement.children[2].value,
//     password: login.parentElement.children[3].value
//   }
//   let authenticated
//   for (let i = 0; i < existUser[0].length; i++) {
//     const element = existUser[0][i].email;
//     if (existUser[0][i].email === userData.email && 
//       existUser[0][i].password === userData.password
//       ) {
      
//       authenticated = true
//     }
//   }

//   if (authenticated === true) {
//     alert(`you are authenticated ${userData.email}`)
//   }else{
    
//     alert("you are not authenticated")
//   }

  
// });
// login data collection 



// sign in data collection 
// let signin = document.querySelector(".signin-submit");

// console.log(signin)

// signin.addEventListener("click", function(event) {
//   event.preventDefault();
//   let childrens = signin.parentElement.children
//   let userData ={
//     name: signin.parentElement.children[2].value,
//     email: signin.parentElement.children[3].value,
//     password: signin.parentElement.children[4].value
//   }
//   // console.log(userData)

//   let notAuthenticated
//   for (let i = 0; i < existUser[0].length; i++) {
//     const element = existUser[0][i].email;
//     if (existUser[0][i].email === userData.email) {
      
//       notAuthenticated = false
//     }
//   }

//   if (notAuthenticated === false) {
//     alert("Existing user detected")
//   }else{
    
//     alert(`you are authenticated ${userData.email}`)
//   }

  
// });






// authentication 
// get user data 

// function auth(users) {
  // fetch("./user.json")
  // .then(function(resp){
  // return resp.json()
  // })
  // .then(function(data){
  // console.log(data)
  // })
// }
