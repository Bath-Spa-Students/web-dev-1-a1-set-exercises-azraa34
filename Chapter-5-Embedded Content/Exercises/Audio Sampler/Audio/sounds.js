document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sample-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const audioSrc = button.getAttribute('data-src');
            const audio = new Audio(audioSrc);

            // Play the audio
            audio.play();
        });

        // Change background and text color on hover
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#ffcc00'; // Yellow background on hover
            button.style.color = '#333'; // Dark text color on hover
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = ''; // Revert to default background
            button.style.color = ''; // Revert to default text color
        });
    });
});
