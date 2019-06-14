
document.getElementById('register-modal').style.height = window.innerHeight;

let tempStore = [
  {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    age: "",
    adress: "",
    civilstatus: "",
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
      civilstatus: "single",
      area:'',
      city:'',
      country:'',
    }
  ]
};




const reg = document.getElementById('showRegisterWindow');
reg.addEventListener('click', showRegisterWin);
function showRegisterWin(){
  document.getElementById('register-modal').style.display = 'block'
}

document.getElementById('exit-submit').addEventListener('click', closeForm1);
function closeForm1(e){
  e.preventDefault();
  document.getElementById('register-modal').style.display = 'none'
  
}



const regForm = document.getElementById('register-form');
regForm.addEventListener('input', getInfo);
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

regForm.addEventListener('submit', onSignInSubmit)
function onSignInSubmit(e) {
  e.preventDefault();
  const{firstname, lastname, email, username, password, age, address, civilstatus, area, city, country} = tempStore[0];
  if(firstname == '' || lastname == '' || email == '' || username == '' || password == '' || age == ''|| address == '' || civilstatus == "" || area == '' || city == '' || country == ""){
    document.getElementById('form-warning').style.display = 'block'
  }
  else{
    state.person.push(tempStore[0]);
  
  
  console.log(state.person);
  
  document.getElementById('register-modal').style.display = 'none'
  }
}

//form is incomplete warning appears, to close , mehtod is here
const closeWarn = document.getElementById('ok-btn');
closeWarn.addEventListener('click', closeWarnWindow);
function closeWarnWindow(){
  document.getElementById('form-warning').style.display = 'none'
}






const showdata = document.getElementById('showData');
showdata.addEventListener('click', displayItems);
function displayItems(){
  let disOnRoot = ''
   state.person.forEach(m => {
    
    disOnRoot += `
    <ul id="member-list">
    <div id="display-photo"></div>
      <li>First Name : <span> ${m.firstname}</span></li>
      <li>Last Name :  <span> ${m.lastname} </span></li>
      <li>Email : <span> ${m.email} </span></li>
      <li>User Name : <span> ${m.username} </span></li>
      <li>Password : <span> ${m.password} </span></li>
      <li>Age : <span> ${m.age} </span></li>
      <li>Address : <span> ${m.address} </span></li>
      <li>Civil Status :  <span>${m.civilstatus} </span></li>
      <h2>Address</h2>
      <li>Area : <span> ${m.area}</span></li>
      <li>City : <span> ${m.city}</span></li>
      <li>Country : <span> ${m.country}</span></li>
   </ul>
   <br />
   
    `;
    
  });
  document.getElementById("post-home").innerHTML = disOnRoot;
}

// const input = document.querySelector('input[type="file"]');
// input.addEventListener('change', function (e){
//   console.log(input.files)

//   const reader = new FileReader();
//   reader.onload = function(){

//     const img = new Image()
//     img.src = reader.result
//     document.getElementById('row-pics').appendChild(img)
    
    
//   }
//   reader.readAsDataURL(input.files[0])
// }, false)
