const adminUsername = "admin";
const adminPassword = "admin";

function login() {
    const username = document.getElementById('username-entry').value;
    const password = document.getElementById('password-entry').value;
    

    if (username === adminUsername && password === adminPassword) {
        alert("Login successful!");
        window.location.href = "google.com"; 
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}