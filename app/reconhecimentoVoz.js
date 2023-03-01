const elementoChute = document.querySelector('#chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
window.SpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    exibeChuteTela(chute);
    verificaChute(chute);
}

function exibeChuteTela(chute) {
    elementoChute.innerHTML = `
    <div>Voce disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());