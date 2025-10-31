// Typed.js animation
var typed = new Typed("#element", {
  strings: ["Web Developer", "Graphics Designer", "Web Designer"],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
});

// Contact Form submission (Formspree + popup)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // Modern popup message
      const successBox = document.createElement("div");
      successBox.innerText = "✅ Message sent successfully!";
      successBox.style.position = "fixed";
      successBox.style.bottom = "30px";
      successBox.style.right = "30px";
      successBox.style.background = "rgb(162, 63, 255)";
      successBox.style.color = "white";
      successBox.style.padding = "15px 25px";
      successBox.style.borderRadius = "10px";
      successBox.style.fontWeight = "500";
      successBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
      document.body.appendChild(successBox);
      form.reset();
      setTimeout(() => successBox.remove(), 3000);
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  }).catch(() => {
    alert("⚠️ Network error. Try again later.");
  });
});
