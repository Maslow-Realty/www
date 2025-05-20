document.addEventListener("DOMContentLoaded", function () {
  const siteData = JSON.parse(document.getElementById("site-data").textContent);
  console.log("🔧 Site Configuration Loaded:", siteData);

  // Dynamically load gallery images
  const galleryContainer = document.querySelector(".gallery");
  if (galleryContainer && siteData.galleryImages) {
    siteData.galleryImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Property image";
      img.classList.add("gallery-image");
      galleryContainer.appendChild(img);
    });
  }

  // Scroll-triggered reveal animations
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load in case already in view

  // Highlight nav links based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const setActiveLink = () => {
    let currentId = "";
    sections.forEach(section => {
      const top = section.offsetTop;
      if (pageYOffset >= top - 100) {
        currentId = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentId)) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink);
});
