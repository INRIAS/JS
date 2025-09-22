const d = document;

export default function slider() {
    const $slides = d.querySelectorAll(".slider-slide"),
        $btnext = d.querySelector(".slider-btn .next"),
        $btnPrev = d.querySelector(".slider-btn .prev");

    let currentSlide = 0;

    d.addEventListener("click", e => {
        if (e.target === $btnPrev) {
            e.preventDefault();
            $slides[currentSlide].classList.remove("active");
            currentSlide--;

            if (currentSlide < 0) currentSlide = $slides.length - 1;
            $slides[currentSlide].classList.add("active");
        }

        if (e.target === $btnext) {
            e.preventDefault();
            $slides[currentSlide].classList.remove("active");
            currentSlide++;

            if (currentSlide == $slides.length) currentSlide = 0;
            $slides[currentSlide].classList.add("active");
        }
    })
}