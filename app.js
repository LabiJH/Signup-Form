let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#passwordConfirm");
let submitButton = document.querySelector("#submitBtn")


function passcheck(){
    if (password.value == confirmPassword.value)
    {
        submitButton.disabled = true;
    }
    
}


password.addEventListener("onkeyup", passcheck());
passwordConfirm.addEventListener("onkeyup", passcheck());