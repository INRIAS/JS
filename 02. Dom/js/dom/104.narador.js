const d = document,
    w = window;

export default function speechRead() {
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextArea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage);

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => {

        console.log(w.speechSynthesis);
        // console.log(w.speechSynthesis.getVoices());

        w.speechSynthesis.addEventListener("voiceschanged", evento => {
            // console.log(evento); 

            voices = w.speechSynthesis.getVoices();
            
            voices.forEach(voice => {
                const $option = d.createElement("option");
                $option.value = voice.name
                $option.textContent = `${voice.name} - ${voice.lang}`
                
                $speechSelect.appendChild($option)
            })
            console.log(voices);
        })
        
        
    })

    d.addEventListener("change", e => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find(
                (voice) => voice.name == e.target.value
            );
            console.log(speechMessage.voice);
            
        }
    })

    d.addEventListener("click", e => {
        if (e.target === $speechBtn) {
            speechMessage.text = $speechTextArea.value;
            speechMessage.rate = 0;
            speechMessage.volume = 0.3;
            // speechMessage.pitch = 0.8;
            w.speechSynthesis.speak(speechMessage);
            console.log(speechMessage);
            
        }
    })




}