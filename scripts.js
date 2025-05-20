document.addEventListener("DOMContentLoaded", function () {
  const siteData = JSON.parse(document.getElementById("site-data").textContent);

  console.log("📊 Loaded site configuration:", siteData);

  // Example: Highlight active navigation based on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

