let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let form = document.querySelector("#form");

const showError = (input, message)=>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    let small = parentElement.querySelector("small");
    small.innerText = message;
    let successIcon = parentElement.querySelectorAll("i")[0];
    let errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility='visible';
    successIcon.style.visibility="hidden";

}

const showSuccess = (input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = "form-control success";
    let successIcon = parentElement.querySelectorAll("i")[0];
    let errorIcon = parentElement.querySelectorAll("i")[1];
    successIcon.style.visibility="visible";
    errorIcon.style.visibility='hidden'; 
}

const checkEmpty = (elements) =>{
    elements.forEach( (element) =>{
        if(element.value === ''){
            showError(element, 'input is required');           
        }
        else{
            showSuccess(element);       
        }
    })
}

const checkEmail = (email) =>  {
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(email.value)){
        showSuccess(email);
    }
    else{
        showError(email, 'Email is not valid');
    }
}

const checkPassword = (password, confirmPassword) => {
    if(confirmPassword.value == '' || confirmPassword.value !== password.value){
        showError(confirmPassword, 'Password does not match');
    } else{
        showSuccess(confirmPassword);
    }
}

const checkPasswordLength = (password, min, max) => {
    if(password.value.length < min){
        showError(password, `Password must be at least ${min} characters`);
    }else if(password.value.length > max){
        showError(password, `Password must be less than ${max} characters`);
    }
    else{
        showSuccess(password);
    }
}
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    checkEmpty([username, email, password, confirmPassword]);
    checkEmail(email)
    checkPassword(password, confirmPassword);
    checkPasswordLength(password, 6, 10);  
})



















