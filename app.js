let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#passwordConfirm");
let submitButton = document.querySelector("#submitBtn")


function passcheck(){
    if (password.value == confirmPassword.value)
    {
        submitButton.disabled = true;
    }
    else{
        submitButton.disabled = false;
    }
}


password.addEventListener("onkeyup", passcheck());
passwordConfirm.addEventListener("onkeyup", passcheck());
/*
let fname = document.querySelector("#fname");

fname.addEventListener("keyup", ()=>{
    if(fname.checkValidity() == true)
    {
        document.querySelector(".validCheck").innerHTML = "valid";
        document.querySelector(".validCheck").style.display = "block";
        document.querySelector(".validCheck").backgroundColor = "lime";
    }
    else{
        document.querySelector(".validCheck").innerHTML = "Invalid";
        ocument.querySelector(".validCheck").backgroundColor = "red";
    }
}) */