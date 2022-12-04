const form = document.getElementById('form');
const email = document.getElementById('email');
const errorInfo = document.querySelector('.error-info')


form.addEventListener('submit', (e) =>{
   e.preventDefault();

   checkInput();
});


function checkInput(){
   // get the values from the inputs
   const emailValue = email.value.trim()

   if(emailValue === ""){
      setErrorFor(email, 'Please provide a valid email')
   }else if(!isEmail(emailValue)){
     setErrorFor(email, 'Email is not valid')
   }else{
      setSuccessFor(email, 'Thank you for subscribing !')
   }
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  //add error class
  formControl.className = 'form-control error';
  errorInfo.textContent = message;
}

function setSuccessFor(input, message){
   const formControl = input.parentElement;
   formControl.className = 'form-control success'
   errorInfo.textContent = message;
  
}

function isEmail(email) {

   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}