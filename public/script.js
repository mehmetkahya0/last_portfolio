function submitFeedback() {
    // get textarea contents and send mail using mailto:
    const feedback = document.getElementById("feedback").value;
    const subject = "Feedback for Portfolio!";
    const mailto_link = `mailto:mehmetkahyakas5@gmail.com?subject=${subject}&body=${feedback}`;
    window.open(mailto_link, "emailWindow");
    // redirect to index.html
    alert("Thank you for your feedback!");
  }