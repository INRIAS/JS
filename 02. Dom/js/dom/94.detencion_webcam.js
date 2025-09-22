const d = document,
    n = navigator,
    w = window;

export default function webcam(id, btnFun) {
    const $video = d.getElementById(id),
        $btnfun = d.querySelector(btnFun);
    let stream;

    $btnfun.addEventListener("click", (e) => {
        if (!stream) {
            // Iniciar cámara
            stream = n.mediaDevices.getUserMedia({ video: true, audio: false });
            stream.then(s => {
                $video.srcObject = s;
                $video.play();
                // Cambia el texto del botón a "Apagar cámara"
                $btnfun.textContent = "Encender cámara";
                
            })
            console.log(e.target);
        } 
    });
}
