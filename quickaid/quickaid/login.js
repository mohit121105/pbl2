document.addEventListener("DOMContentLoaded", function () {
    console.log("Login.js Loaded! 🚀");

    // Check if the user is already logged in and redirect to homepage
    let userLoggedIn = localStorage.getItem("loggedInUser");
    let loginForm = document.getElementById("login-form");

    if (userLoggedIn) {
        window.location.href = "index.html"; // Redirect if already logged in
        return;
    }

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            // Retrieve stored user from localStorage
            let storedUser = localStorage.getItem("registeredUser");

            if (storedUser) {
                let user = JSON.parse(storedUser);

                // Validate Credentials
                if (user.email === email && user.password === password) {
                    localStorage.setItem("loggedInUser", JSON.stringify(user));

                    console.log("Login successful! Redirecting to homepage...");

                    setTimeout(() => {
                        window.location.href = "index.html"; // Redirect after login
                    }, 500);
                } else {
                    alert("Invalid email or password. Please try again.");
                }
            } else {
                alert("No user found. Please sign up first.");
            }
        });
    }
});
