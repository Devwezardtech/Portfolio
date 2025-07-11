// Initialize EmailJS with your public key
(function () {
  emailjs.init("IywHRxkGM0L6E8AnH"); // Your public key (safe to commit)
})();

// Select the form element
const form = document.querySelector("form");

// If form exists, add submit listener
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default browser submission

    // Send form using EmailJS
    emailjs.sendForm("service_a06aop6", "template_xbpadef", this)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent.",
          icon: "success",
        });
        form.reset(); // Clear form fields
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
        console.error("EmailJS error:", error);
      });
  });
}
