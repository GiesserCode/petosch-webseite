document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".carousel-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.classList.contains("next") ? 1 : -1;
            const slides = document.querySelectorAll(".slide");
            const activeSlide = document.querySelector(".slide[data-active]");
            let newIndex = Array.from(slides).indexOf(activeSlide) + offset;

            if (newIndex < 0) newIndex = slides.length - 1;
            if (newIndex >= slides.length) newIndex = 0;

            activeSlide.removeAttribute("data-active");
            slides[newIndex].setAttribute("data-active", "");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let touchStartX = null;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (deltaX > 30) {
            // Swipe left, go to the next slide
            showSlide(currentIndex + 1);
        } else if (deltaX < -30) {
            // Swipe right, go to the previous slide
            showSlide(currentIndex - 1);
        }

        touchStartX = null;
    });

    function showSlide(index) {
        slides[currentIndex].removeAttribute("data-active");
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].setAttribute("data-active", "");
    }
});