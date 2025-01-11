const form = document.querySelector('form');
const fname = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

function sendEmail() {
  const bodyMsg = `
    <br><strong>Fullname:</strong> ${fname.value}
    <br><strong>Phone:</strong> ${number.value}
    <br><strong>Email:</strong> ${email.value}
    <br><strong>Message:</strong> ${msg.value}`;

  // Use SmtpJS with a secure token
  Email.send({
    SecureToken: "a94c8c75-308f-4b91-9699-1d664e343d1b", // Replace with your generated token
    To: "recipient@example.com", // Replace with the recipient's email address
    From: email.value, // Use the sender's email address (from the form)
    Subject: "Portfolio Contact Form Submission",
    Body: bodyMsg,
  })
    .then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Successful",
          text: "Your message has been sent",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to send your message. Please try again later.",
          icon: "error",
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: `An error occurred: ${error.message}`,
        icon: "error",
      });
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendEmail();
});
