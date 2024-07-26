document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can add code to send the form data to your server or an email service
    console.log("Form submitted:", { name, email, message });

    // Clear the form
    document.getElementById("contactForm").reset();

    alert("Thank you for your message!");
  });
