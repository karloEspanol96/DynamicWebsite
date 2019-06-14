
const signInBtn = document.getElementById("sign-in-btn");
const signInModal = document.getElementById("sign-in-modal");
const welcomeModal = document.getElementById("welcome");
const signInForm = document.getElementById("sign-in-form");
const signUpBtn = document.getElementById("sign-up-btn");
const signUpForm = document.getElementById('form-control-2');
const signUpModal = document.getElementById("sign-up-modal");
 
//Sign In Modal
signInBtn.addEventListener("click", function signIn(e) {
  if (e.target.id == "sign-in-btn") {
    document.getElementById("sign-in-modal").style.display = "block";
  }
});



//sign Up Modal
signUpBtn.addEventListener("click", function signUpBtn(e) {
  if (e.target.id == "sign-up-btn") {
    document.getElementById("sign-up-modal").style.display = "block";
  }
});

//Close Sign In
signInModal.addEventListener("click", function closeSignIn(e) {
  if (e.target.id == "sign-in-modal") {
    signInModal.style.display = "none";
  }
});

//Close Sign Up
signUpModal.addEventListener("click", function closeSignIn(e) {
  if (e.target.id == "sign-up-modal") {
    signUpModal.style.display = "none";
  }
});

//BackEnd

let reseter = [
  {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    age: "",
    adress: "",
    civilstatus: ""
  }
];

let tempStore = [
  {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    age: "",
    adress: "",
    civilstatus: ""
  }
];

const state = {
  person: [
    {
      firstname: "francis karlo",
      lastname: "Español",
      email: "karlo@gmail.com",
      username: "karlo",
      password: "kaloy",
      age: "22",
      adress: "Davao city, philippines",
      civilstatus: "single"
    }
  ]
};


signInForm.addEventListener("input", getInfo);
function getInfo(e) {
  const { value, name } = e.target;
  const prevState = tempStore[0];
  tempStore = [
    {
      ...prevState,
      [name]: value
    }
  ];
}

signInForm.addEventListener("submit", onSignInSubmit);
function onSignInSubmit(e) {
  e.preventDefault();
  const {username, password} = tempStore[0];
  let con;
 state.person.map(m => {
  if(username == m.username && password == m.password ){
    con = 1;

    if(con = state.person.length){
      document.getElementById('form-warning-1').style.display = 'block'
    }
    if(con = 1){
      
        document.getElementById('form-warning-1').style.display = 'none'
        const nick = `
      <h1>Hi There !</h1>
      <h1>${tempStore[tempStore.length - 1].username}</h1>
      <a href="./index2.html">Continue ---></a>
      `
         document.getElementById('welcome').innerHTML = nick;
         welcomeModal.style.display = "block";
      console.log(state.person);
      console.log(tempStore);
      
      
    }
    
   }
  
   
    
 })
}

//close warning modal
document.getElementById('close-warning-modal-1').addEventListener('click', closeWarning);
function closeWarning(){
  document.getElementById('form-warning-1').style.display = 'none';
}


// signInForm.addEventListener("submit", onSignInSubmit);
// function onSignInSubmit(e) {
//   e.preventDefault();
//   state.person.push(tempStore[0]);
//   const nick = `
//   <h1>Hi There !</h1>
//   <h1>${tempStore[0].firstname}</h1>
//   <a href="./index2.html">Continue ---></a>
//   `
//     return document.getElementById('welcome').innerHTML = nick;
  
//   console.log(state.person);
//   console.log(tempStore);
// }


signUpForm.addEventListener('input', getInfo);
function getInfo(e) {
  const { value, name } = e.target;
  const prevState = tempStore[0];
  tempStore = [
    {
      ...prevState,
      [name]: value
    }
  ];
}

signUpForm.addEventListener('submit', onSignUpSubmit)
function onSignUpSubmit(e) {
  e.preventDefault();
  const{ email, username, password, } = tempStore[0];
  if(email == '' || username == '' || password =="" ){
    document.getElementById('form-warning').style.display = 'block'
  
  }
  else{
    state.person.push(tempStore[0]);
  
  
  console.log(state.person);
  signUpModal.style.display = 'none'
  
  }
}

//close sign up warning

document.getElementById('ok-btn').addEventListener('click', closeWarn2);
function closeWarn2(e){
  document.getElementById('form-warning').style.display = 'none'
}

