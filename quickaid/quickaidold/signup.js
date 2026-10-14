document.addEventListener("DOMContentLoaded", function () {
    console.log("Signup Page Loaded 🚀");

    let signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            // Store full user data including password
            let user = { 
                name: name, 
                email: email, 
                password: password, // ✅ include password
                profilePic: "profile.jpg" 
            };

            localStorage.setItem("registeredUser", JSON.stringify(user)); // ✅ Save to registeredUser
            localStorage.setItem("loggedInUser", JSON.stringify(user)); // Optional: also log in directly

            // Redirect to home page after signup
            window.location.href = "index.html";
        });
    }
});
