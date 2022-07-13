let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#passwordConfirm");
let submitButton = document.querySelector("#submitBtn");
let lname = document.querySelector("#lname");
let mail = document.querySelector("#emailInput");
let pNumber = document.querySelector("#pNumber");
let pError = document.querySelector("#passwordError");
let fname = document.querySelector("#fname");
let colorValid = "#99CC99";
let colorInvalid = "#ED4337"

password.addEventListener("keyup", ()=>{
    if(password.value == confirmPassword.value){
        submitButton.style.backgroundColor = "#99CC99";
        pError.style.display ="none";
    }else{
        pError.style.display ="block";
        submitButton.style.backgroundColor = "gray";
        submitButton.disabled = "true";
    }
})

confirmPassword.addEventListener("keyup", ()=>{
    if(password.value == confirmPassword.value){
        submitButton.style.backgroundColor = "#99CC99";
        pError.style.display ="none";
    }else{
        pError.style.display ="block";
        submitButton.style.backgroundColor = "gray";
    }
})


fname.addEventListener("keyup", ()=>{
    if(fname.checkValidity() == true && fname.value != "")
    {
        document.querySelector(".validCheck").innerHTML = "valid";
        document.querySelector(".validCheck").style.display = "block";
        document.querySelector(".validCheck").style.backgroundColor = colorValid;
    }
    else if(fname.checkValidity() == false && fname.value != ""){
        document.querySelector(".validCheck").innerHTML = "Invalid";
        document.querySelector(".validCheck").style.display = "block";
        document.querySelector(".validCheck").style.backgroundColor = colorInvalid;
    } else {
        document.querySelector(".validCheck").style.display = "none";
    }
}) 

lname.addEventListener("keyup", ()=>{
    if(lname.checkValidity() == true && lname.value != "")
    {
        document.querySelector(".validCheckTwo").innerHTML = "valid";
        document.querySelector(".validCheckTwo").style.display = "block";
        document.querySelector(".validCheckTwo").style.backgroundColor = colorValid;
    }
    else if(lname.checkValidity() == false && lname.value != ""){
        document.querySelector(".validCheckTwo").innerHTML = "Invalid";
        document.querySelector(".validCheckTwo").style.display = "block";
        document.querySelector(".validCheckTwo").style.backgroundColor = colorInvalid;
    } else{
        document.querySelector(".validCheckTwo").style.display = "none";
    }
}) 


mail.addEventListener("keyup", ()=>{
    if(mail.checkValidity() == true && mail.value != "")
    {
        document.querySelector(".validCheckThree").innerHTML = "valid";
        document.querySelector(".validCheckThree").style.display = "block";
        document.querySelector(".validCheckThree").style.backgroundColor = colorValid;
    }
    else if(mail.checkValidity() == false && mail.value != ""){
        document.querySelector(".validCheckThree").innerHTML = "Invalid";
        document.querySelector(".validCheckThree").style.display = "block";
        document.querySelector(".validCheckThree").style.backgroundColor = colorInvalid;
    } else{
        document.querySelector(".validCheckThree").style.display = "none";
    }
}) 

pNumber.addEventListener("keyup", ()=>{
    if(pNumber.checkValidity() == true && pNumber.value != "")
    {
        document.querySelector(".validCheckFour").innerHTML = "valid";
        document.querySelector(".validCheckFour").style.display = "block";
        document.querySelector(".validCheckFour").style.backgroundColor = colorValid;
    }
    else if(pNumber.checkValidity() == false && pNumber.value != ""){
        document.querySelector(".validCheckFour").innerHTML = "Invalid";
        document.querySelector(".validCheckFour").style.display = "block";
        document.querySelector(".validCheckFour").style.backgroundColor = colorInvalid;
    } else{
        document.querySelector(".validCheckFour").style.display = "none";
    }
}) 

password.addEventListener("keyup", ()=>{
    if(password.checkValidity() == true && password.value != "")
    {
        document.querySelector(".validCheckFive").innerHTML = "valid";
        document.querySelector(".validCheckFive").style.display = "block";
        document.querySelector(".validCheckFive").style.backgroundColor = colorValid;
    }
    else if(password.checkValidity() == false && password.value != ""){
        document.querySelector(".validCheckFive").innerHTML = "Invalid";
        document.querySelector(".validCheckFive").style.display = "block";
        document.querySelector(".validCheckFive").style.backgroundColor = colorInvalid;
    }else{
        document.querySelector(".validCheckFive").style.display = "none";
    }
}) 

confirmPassword.addEventListener("keyup", ()=>{
    if(confirmPassword.checkValidity() == true && confirmPassword.value != "")
    {
        document.querySelector(".validCheckSix").innerHTML = "valid";
        document.querySelector(".validCheckSix").style.display = "block";
        document.querySelector(".validCheckSix").style.backgroundColor = colorValid;
    }
    else if(confirmPassword.checkValidity() == true && confirmPassword.value != ""){
        document.querySelector(".validCheckSix").innerHTML = "Invalid";
        document.querySelector(".validCheckSix").style.display = "block";
        document.querySelector(".validCheckSix").style.backgroundColor = colorInvalid;
    }else{
        document.querySelector(".validCheckSix").style.display = "none";
    }
}) 