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
window.addEventListener('DOMContentLoaded', includeHTML);
