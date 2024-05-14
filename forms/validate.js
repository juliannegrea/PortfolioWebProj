document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      showError("Por favor, completa todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      showError("Por favor, introduce un email válido.");
      return;
    }

    showLoading();

    // Simulación de envío de formulario
    setTimeout(function() {
      showSuccess();
      form.reset();
    }, 2000);
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showError(message) {
    const errorDiv = document.querySelector(".error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";

    setTimeout(function() {
      errorDiv.style.display = "none";
    }, 3000);
  }

  function showLoading() {
    document.querySelector(".loading").style.display = "block";
  }

  function showSuccess() {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".sent-message").style.display = "block";

    setTimeout(function() {
      document.querySelector(".sent-message").style.display = "none";
    }, 3000);
  }
});