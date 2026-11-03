// CloudSphere IT Solutions - shared JavaScript

// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
}

// Contact form: front-end validation demo only (does not send/store messages)
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();
    const feedback = document.querySelector("#formMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    feedback.className = "form-message";

    if (!name || !email || !subject || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.classList.add("error");
      return;
    }

    if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.classList.add("error");
      return;
    }

    feedback.textContent = `Thanks, ${name}! Your form was validated successfully. This demo does not send the message.`;
    feedback.classList.add("success");
    contactForm.reset();
  });
}

console.log("CloudSphere IT Solutions website loaded.");
