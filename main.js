let navToggle = document.getElementById('nav-toggle')

navToggle.addEventListener('click', function () {
    let navLink = document.getElementById('nav-link')

    navLink.classList.toggle('active')

})

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message Successful");
    contactForm.reset();
  });
});

