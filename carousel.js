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
