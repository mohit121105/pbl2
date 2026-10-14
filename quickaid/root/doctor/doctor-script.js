document.addEventListener("DOMContentLoaded", function () {
    const doctor = JSON.parse(localStorage.getItem("loggedInDoctor"));
    if (doctor) {
        document.getElementById("doctor-name").innerText = "Dr. " + doctor.name;
        document.getElementById("doctor-specialty").innerText = doctor.specialty;
    }

    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("loggedInDoctor");
        window.location.href = "login.html";
    
    });
    document.addEventListener("DOMContentLoaded", function () {
        const doctorInfo = localStorage.getItem("loggedInDoctor");
      
        const profilePic = document.getElementById("profile-pic");
        const authButtons = document.getElementById("auth-buttons");
        const doctorInfoDiv = document.getElementById("doctor-info");
        const doctorName = document.getElementById("doctor-name");
        const doctorSpecialty = document.getElementById("doctor-specialty");
      
        if (doctorInfo) {
          const doctor = JSON.parse(doctorInfo);
          profilePic.src = doctor.profilePic || "default-profile.png";
          doctorName.innerText = doctor.name;
          doctorSpecialty.innerText = doctor.specialty;
      
          authButtons.style.display = "none";
          doctorInfoDiv.style.display = "block";
        } else {
          profilePic.src = "default-profile.png";
          authButtons.style.display = "block";
          doctorInfoDiv.style.display = "none";
        }
      });
      
});
