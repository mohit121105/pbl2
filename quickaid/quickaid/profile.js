document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem("loggedInUser");

    if (!user) {
        // Redirect to login if no user is logged in
        window.location.href = "login.html";
        return;
    }

    user = JSON.parse(user);

    // Display user details
    document.getElementById("profile-name").innerText = user.name;
    document.getElementById("profile-email").innerText = user.email;
    document.getElementById("profile-pic").src = user.profilePic || "default.jpg";

    // Logout button
    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html"; // Redirect to login page after logout
    });
});
