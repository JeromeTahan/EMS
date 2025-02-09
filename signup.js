document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default behavior
    alert("Form submitted successfully!");
    window.location.href = "login.html"; // Redirect to login page
});
