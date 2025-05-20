document.addEventListener("DOMContentLoaded", function () {
  const siteData = JSON.parse(document.getElementById("site-data").textContent);

  // Log site info
  console.log("🔧 Site Configuration Loaded:", siteData);

  // Dynamically insert gallery images
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

  // Scroll-based reveal animation
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;
      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
