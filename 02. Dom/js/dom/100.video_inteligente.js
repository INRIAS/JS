const d = document,
    w = window;

export default function smartVideo() {
    const $video = d.querySelectorAll("video[data-smart-video]"),
        $title = d.querySelector(".title")

    const titles = [
         "Vuelve1",
         "Vuelve2",
         "Vuelve3",
         "Vuelve4",
         "Vuelve5",
         "Vuelve6",
         "Vuelve7",
         "Vuelve8",
         "Vuelve9",
         "Vuelve10",
         "Vuelve11",
        ];

    let index = Math.floor(Math.random()*titles.length);

    const cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();

            }

            w.addEventListener("visibilitychange", e => {
                if (d.visibilityState === "visible") {
                    $title.textContent = "80.DOM_Ejercicios_Practicos";
                } else {
                    setTimeout(() => {
                        $title.textContent = titles[index % titles.length];
                        index++;
                    }, 100);
                }
            });
        })
    }

    const observer = new IntersectionObserver(cb, {
        threshold: 0.5
    });

    $video.forEach((el) => observer.observe(el))
}