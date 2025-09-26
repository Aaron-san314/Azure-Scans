const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("passConfirm");
const errorMessage = document.getElementById("pwwaring");
const successMessage = document.getElementById("pwmatch");

// 🔹 Live validation while typing
confirmPassword.addEventListener("input", function () {
  if (confirmPassword.value === "") {
    errorMessage.style.display = "none";
    successMessage.style.display = "none";
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  } else {
    errorMessage.style.display = "none";
    successMessage.style.display = "block";
  }
});

// 🔹 Final validation on form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    alert("❌ Please fix the errors before submitting.");
  } else {
    alert("✅ Signup Successful!");
    // here you could send data to backend
  }
});
