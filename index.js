const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const firstNameErr=document.querySelector(".firstNameErr");
  const lastNameErr=document.querySelector(".lastNameErr");
  const emailErr=document.querySelector(".emailErr");
  const passErr=document.querySelector(".passErr");
  

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

 

  if(firstName.value===""){
    firstNameErr.innerHTML="First Name cannot be empty"
    return
  }


  if(!nameRegex.test(firstName.value)){
    firstNameErr.innerHTML="First Name should not contain numbers"
    return
  }


  if(lastName.value===""){
    lastNameErr.innerHTML="Last Name cannot be empty"
    return
  }

  if(!nameRegex.test(lastName.value)){
    lastNameErr.innerHTML="Last Name should not contain numbers"
    return
  }


  if(email.value===""){
    emailErr.innerHTML="Last Name cannot be empty"
    return
  }

  if(!emailRegex.test(email.value)){
    emailErr.innerHTML="Looks like this is not an email"
    return
  }

  if(pass.value=""){
    passErr.innerHTML="Last Name cannot be empty"
    return

  }


 
  firstNameErr.innerHTML="";
  lastNameErr.innerHTML="";
  emailErr.innerHTML="";
  passErr.innerHTML="";
  
});


