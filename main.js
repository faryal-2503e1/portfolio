let navToggle = document.getElementById('nav-toggle')

navToggle.addEventListener('click', function () {
  let navLink = document.getElementById('nav-link')

  navLink.classList.toggle('active')

})

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // 🔒 stop default redirect

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      } else {
        alert("❌ Error: Please try again.");
      }
    } catch (error) {
      alert("⚠️ Network error. Please check your internet.");
    }
  });
});
