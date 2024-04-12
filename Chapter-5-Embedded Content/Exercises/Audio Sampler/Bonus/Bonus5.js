// Audio samples data (updated with durations)
const audioSamples = [
    { title: 'Ah-ha!', src: 'audio/bonus/ah-ha.mp3', duration: 2.5 },
    { title: 'Back of the net!', src: 'audio/bonus/back-of-the-net.mp3', duration: 3.2 },
    { title: 'Bang out of order!', src: 'bangoutoforder.mp3', duration: 2.8 },
    { title: 'Dan!', src: 'dan.mp3', duration: 1.9 },
    { title: 'Email of the evening!', src: 'emailoftheevening.mp3', duration: 3.5 },
    { title: 'Hello Partridge!', src: 'hellopartridge.mp3', duration: 2.7 },
    { title: 'I ate a scotch egg!', src: 'iateascotchegg.mp3', duration: 4.1 },
    { title: 'I\'m confused.', src: 'imconfused.mp3', duration: 2.3 }
    
];

// Function to dynamically generate audio sample buttons
function generateAudioSampleButtons(samples) {
    const soundButtonsContainer = document.querySelector('.sound-buttons');

    // Clear existing buttons (in case of re-running the script)
    soundButtonsContainer.innerHTML = '';

    samples.forEach((sample) => {
        const button = document.createElement('button');
        button.textContent = `${sample.title} (${sample.duration.toFixed(1)} sec)`;
        button.className = 'sample-btn';
        button.setAttribute('data-src', sample.src);
        button.addEventListener('click', () => playAudioSample(sample.src));
        soundButtonsContainer.appendChild(button);
    });
}

// Function to play audio sample
function playAudioSample(src) {
    const audio = new Audio(src);
    audio.play()
        .catch((error) => {
            console.error('Failed to play audio:', error.message);
        });
}

// Function to convert text to speech (using browser's SpeechSynthesis API)
function convertTextToSpeech() {
    const inputText = document.getElementById('text-to-speech-input').value;
    const speech = new SpeechSynthesisUtterance(inputText);
    window.speechSynthesis.speak(speech);
}

// Load audio samples and generate buttons when the page is loaded
window.addEventListener('load', () => {
    generateAudioSampleButtons(audioSamples);
});
