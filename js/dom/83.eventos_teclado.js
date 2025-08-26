const d = document;
let contadorY = 0;
let contadorX = 0;

export default function eventosTeclado(area, pointer) {


    d.addEventListener("keydown", e => {
        // console.log(e.key);
        // console.log(e);
        const $area = d.querySelector(area),
            $pointer = d.querySelector(pointer),
            limitsArea = $area.getBoundingClientRect(),
            limitsPointer = $pointer.getBoundingClientRect();
            // console.log(limitsPointer, limitsArea);

        let key = e.key;

        switch (e.key) {
            case "ArrowUp":
                if (limitsPointer.top > limitsArea.top) {
                    e.preventDefault();
                    contadorY--};
                break;
            case "ArrowDown":
                if (limitsPointer.bottom < limitsArea.bottom) {
                    e.preventDefault();
                    contadorY++};
                break;
            case "ArrowLeft":
                if (limitsPointer.left > limitsArea.left) {
                    e.preventDefault();
                    contadorX--};
                break;
            case "ArrowRight":
                if (limitsPointer.right < limitsArea.right) {
                    e.preventDefault();
                    contadorX++};
                break;
            default:
                break;
        }

        $pointer.style.transform = `translate(${contadorX * 30}%,${contadorY * 30}%)`;

    })
}

export function shortcut() {
    d.addEventListener("keydown", e => {
        // console.log(e.key);
        // console.log(e);
        if (e.ctrlKey && e.key === "a") {
            alert("Haz oprimido la tecla a");
        }

        if (e.ctrlKey && e.key === "c") {
            confirm("Haz oprimido la tecla c");
        }

        if (e.ctrlKey && e.key === "p") {
            alert("Haz oprimido la tecla p");
        }

    });
}