// Select elements
const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");
const form = document.querySelector("form");

// Show and Hide Password
togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-regular fa-eye"></i>';
    }

});

// Login Validation
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = passwordInput.value;

    // Correct Login Details
    const correctUsername = "admin";
    const correctPassword = "library123";

    if (email === correctUsername && password === correctPassword) {

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }

});