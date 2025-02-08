/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/scripts/carousel.js ***!
  \*********************************/
// Updated Carousel Script with Correct Slide Visibility and Navigation Button Styling

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        let index = 0;
        const container = document.querySelector(".carousel-container");
        const slides = Array.from(carousel.querySelectorAll(".carousel-item"));
        const totalSlides = slides.length;
        const nextBtn = document.querySelector(".carousel-next");
        const prevBtn = document.querySelector(".carousel-prev");
        let autoSlideInterval;

        function updateSlideVisibility() {
            const isMobile = window.innerWidth <= 768;
            const isDesktop = window.innerWidth > 1024;
            slides.forEach((slide, i) => {
                if (isMobile) {
                    slide.style.display = (i === index) ? "block" : "none";
                } else if (isDesktop) {
                    slide.style.display = (i >= index && i < index + 2) ? "block" : "none";
                } else {
                    slide.style.display = (i >= index && i < index + 2) ? "block" : "none";
                }
            });
        }

        function showSlide(i) {
            index = (i + totalSlides) % totalSlides;
            updateSlideVisibility();
        }

        function nextSlide() {
            showSlide(index + 1);
        }

        function prevSlide() {
            showSlide(index - 1);
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        nextBtn.addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener("click", () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        // Swipe functionality for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        container.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
            stopAutoSlide();
        });

        container.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            if (touchStartX > touchEndX + 50) nextSlide();
            if (touchStartX < touchEndX - 50) prevSlide();
            startAutoSlide();
        });

        window.addEventListener("resize", updateSlideVisibility);

        startAutoSlide();
        showSlide(0);
    }
});

// Improved Hamburger Menu Toggle
console.log("JavaScript Loaded!");

// Check if navToggle exists before attaching event listener
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav-overlay");
    const closeNav = document.querySelector(".close-nav");

    console.log("Checking navToggle:", navToggle);

    if (!navToggle) {
        console.error("Error: .nav-toggle not found in DOM!");
        return;
    }

    navToggle.addEventListener("click", function () {
        console.log("Hamburger menu clicked!");
        mobileNav.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });

    if (closeNav) {
        closeNav.addEventListener("click", function () {
            console.log("Close button clicked!");
            mobileNav.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    }
});

/******/ })()
;
//# sourceMappingURL=carousel.js.map