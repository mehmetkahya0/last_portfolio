// auth js for authentication
// auth.js

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  loginButton.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple validation (for demonstration purposes only, not secure)
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    // Example: Validate against a hardcoded username and password
    // In a real application, you should send a request to the server to check credentials
    if (username === "admin" && password === "admin") {
      alert("Login successful");
      // Redirect to another page or dashboard
      window.location.href = "admin.html";
    } else {
      alert("Invalid username or password");
    }
  });
});
