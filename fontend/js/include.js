function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => { // use `el` consistently
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;
                adjustNavbar();
            });
    });
}
function adjustNavbar(){
    const path = window.location.pathname;
    if (path.includes("login")){
        document.getElementById("nav-login").style.display = "none";
    }else if (path.includes("signup")){
        document.getElementById("nav-signup").style.display = "none";
    }
}
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
//password validation
const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("passConfirm");
const errorMessage = document.getElementById("pwwarning");

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (password.value !== confirmPassword.value){
        errorMessage.style.display = "block"; //show error
    }else{
        errorMessage.style.display = "none"; //doesn't show error
        alert("signup Successful");
    }
});
// document.getElementById("signup-form").addEventListener("submit" ,function(event1){
//     const password = document.getElementById("password").value;
//     const error = document.getElementById("PasswordError");

//     const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,12}$/;
//     if (!strongPassword.test(password)){
//         event1.preventDefault(); //stop the form from submitting
//         error.style.display = "block";
//         error.textContent = "Password must be 8-12 chars, include upper, lower, number, and special characters.";
//     }else {
//         error.style.display = "none"; // no error
//     }
// });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const password = document.getElementById("password");
    const error = document.getElementById("passwordError");

    if(!form || !password || !error){
        console.error("Missing element(s):", {
        form: !!form,password: !!password, error: !!error
        });
        return;
    }
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-za-z\d!@#$%&*]{8,12}$/;

    form.addEventListener("submit", (e) => {
        const pwd = password.value;
        if(!strongPassword.test(pwd)){
            e.preventDefault();
            error.style.display = "block";
            error.textContent = "password must be 8-12 chars and include uppercase,lowercase,number & specials chars";
        }else {
            error.style.display = "none";
        }
    });
});

window.addEventListener('DOMContentLoaded', includeHTML);
