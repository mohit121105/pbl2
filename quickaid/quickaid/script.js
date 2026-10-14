document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working! 🚀");

    // 1️⃣ Loading Animation (If there's a loading screen)
    setTimeout(() => {
        let loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            loadingScreen.style.display = "none";
        }
    }, 1500);

    // 2️⃣ Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3️⃣ Handle Account Click (Redirect to Profile)
    let userLoggedIn = localStorage.getItem("loggedInUser");
    let accountLink = document.getElementById("account-link");
    let accountText = document.getElementById("account-text");

    if (userLoggedIn) {
        let user = JSON.parse(userLoggedIn);

        // Update bottom nav account text with username
        if (accountText) {
            accountText.innerText = user.name;
        }
    }

    if (accountLink) {
        accountLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (userLoggedIn) {
                window.location.href = "profile.html";
            } else {
                window.location.href = "login.html";
            }
        });
    }
});
