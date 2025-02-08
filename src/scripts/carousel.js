document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        let index = 0;
        const container = document.querySelector(".carousel-container");
        const slides = carousel.querySelectorAll(".carousel-item");
        const totalSlides = slides.length;

        function showSlide(i) {
            const offset = -i * 100; // Move by 100% per slide
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

        document.querySelector(".carousel-next").addEventListener("click", nextSlide);
        document.querySelector(".carousel-prev").addEventListener("click", prevSlide);

        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Swipe event for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        container.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        container.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            if (touchStartX > touchEndX + 50) nextSlide();
            if (touchStartX < touchEndX - 50) prevSlide();
        });

        showSlide(index);
    }
});
