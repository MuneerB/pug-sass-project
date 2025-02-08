// Improved Carousel Script

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        let index = 0;
        const container = document.querySelector(".carousel-container");
        const slides = carousel.querySelectorAll(".carousel-item");
        const totalSlides = slides.length;
        let autoSlideInterval;

        function showSlide(i) {
            const offset = -i * 100;
            container.style.transition = "transform 0.5s ease-in-out";
            container.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            index = (index + 1) % totalSlides;
            showSlide(index);
        }

        function prevSlide() {
            index = (index - 1 + totalSlides) % totalSlides;
            showSlide(index);
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        document.querySelector(".carousel-next").addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
        
        document.querySelector(".carousel-prev").addEventListener("click", () => {
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

        startAutoSlide();
        showSlide(index);
    }
});

// Improved Hamburger Menu Toggle

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        navToggle.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("active");
            navToggle.classList.remove("open");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            navToggle.classList.remove("open");
        });
    });
});
