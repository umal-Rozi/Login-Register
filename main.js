//all elemnts 

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

const showError = (input,message) => {

    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;

}

const showSuccess = (input) => {

    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';  
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
    

}


const checkEmpty = (elements) => {

    elements.forEach( (element) => {
        if(element.value === ''){
           showError(element,'Input required');
        }else{
            showSuccess(element);
        }
    });

}

const checkEmail = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(reg.test(email.value)){
        showSuccess(email);
    }else{
        showError(email,'Invalid Email');
    }

}

const checkPasswordLength = (input,min,max) => {
    
    if(input.value.length < min){
        showError(input,`Password atleast ${min} Character`);
    }else if (input.value.length > max){
        showError(input, `Password maximum character is ${max}`);
    }else{
        showSuccess(input);
    }

}

const checkConfirmPassword = (password,confirmPassword) => {

        if(password.value !== confirmPassword.value){
            showError(confirmPassword,'Password is Not Match');
        }

}

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    checkEmpty( [username,email,password,confirmPassword]);
    checkEmail(email);

    checkPasswordLength(password,6,10);
    checkPasswordLength(confirmPassword,6,10);

    checkConfirmPassword(password,confirmPassword);
   
   
});