/***********************
 HERO IMAGE SLIDER
************************/
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides() {
    slides.forEach((img, i) => {
        img.style.opacity = "0";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 4000); // 4 sec
}

if (slides.length > 0) {
    showSlides();
}

/***********************
 PROJECT GALLERY LIGHTBOX
************************/
const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");

        const lightboxImg = document.createElement("img");
        lightboxImg.src = img.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(lightboxImg);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/***********************
 SMOOTH SCROLL (NAV)
************************/
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/***********************
 OPTIONAL: FORM SUBMIT ALERT
************************/
const form = document.querySelector(".hero-content form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! We will contact you shortly on WhatsApp.");
        form.reset();
    });
}