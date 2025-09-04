const d = document,
    l = localStorage;

export default function teamDarkLight(btn, classMode) {

    const $btnTeamDark = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    let sun = "☀️",
        moon = "🌙";

    const lightMode = () => {
        d.body.setAttribute("data-dark", "false");
        $btnTeamDark.textContent = sun;
        $selectors.forEach(el => el.classList.remove(classMode));
        l.setItem("theme", "light");
    }

    const darkMode = () => {
        d.body.setAttribute("data-dark", "true");
        $btnTeamDark.textContent = moon;
        $selectors.forEach(el => el.classList.add(classMode));
        l.setItem("theme", "dark");
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if (d.body.getAttribute("data-dark") === "false") {
                darkMode();
            } else {
                lightMode();
            }
        }
    });
    
    //Preferencia thema del usuario
    if (l.getItem("theme") === "dark") {
        darkMode();
    } else {
        lightMode();
    }
}