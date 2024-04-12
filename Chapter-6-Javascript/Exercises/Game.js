document.addEventListener('DOMContentLoaded', function() {
    const colors = generateRandomColors(6); // Generate array of random RGB colors
    const squares = document.getElementById('optionsContainer'); // Get container for color options
    const colorDisplay = document.getElementById('colorDisplay');
    const messageDisplay = document.getElementById('message');
    const scoreDisplay = document.getElementById('scoreValue');
    const timerDisplay = document.getElementById('timeValue');
    const resetButton = document.getElementById('resetButton'); // Get reset button element

    let pickedColor; // Color to be guessed
    let score = 0;
    let timeLeft = 30;
    let timer;

    // Initialize game
    setupGame();

    // Set up the game
    function setupGame() {
        pickedColor = pickColor(); // Pick a random color from colors array
        colorDisplay.style.backgroundColor = pickedColor; // Display the RGB value to guess
        messageDisplay.textContent = ''; // Clear previous message
        scoreDisplay.textContent = score; // Display current score
        setupColorOptions(); // Set up color options
        startTimer(); // Start countdown timer
    }

    // Set up color options
    function setupColorOptions() {
        squares.innerHTML = ''; // Clear existing color options
        colors.forEach(color => {
            const option = document.createElement('div');
            option.classList.add('option');
            option.style.backgroundColor = color;
            option.addEventListener('click', () => checkGuess(color));
            squares.appendChild(option);
        });
    }

    // Check user's guess
    function checkGuess(clickedColor) {
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'; // Display correct message
            score++;
            scoreDisplay.textContent = score; // Update score
            resetGame(); // Reset the game for next round
        } else {
            messageDisplay.textContent = 'Try Again'; // Display try again message
        }
    }

    // Pick a random color from colors array
    function pickColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Generate array of random RGB colors
    function generateRandomColors(num) {
        const colorArray = [];
        for (let i = 0; i < num; i++) {
            const color = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
            colorArray.push(color);
        }
        return colorArray;
    }

    // Generate random value between 0 and 255
    function getRandomValue() {
        return Math.floor(Math.random() * 256);
    }

    // Start countdown timer
    function startTimer() {
        timer = setInterval(function() {
            timeLeft--;
            timerDisplay.textContent = timeLeft; // Update timer display
            if (timeLeft === 0) {
                gameOver(); // End game when time runs out
            }
        }, 1000);
    }

    // Game over function
    function gameOver() {
        clearInterval(timer); // Stop the timer
        messageDisplay.textContent = `Time's up! Final Score: ${score}`; // Display final message with score
        disableOptions(); // Disable color options after game ends
    }

    // Reset the game
    function resetGame() {
        clearInterval(timer); // Stop the timer
        timeLeft = 30; // Reset time left
        setupGame(); // Set up the game for next round
    }

    // Disable color options
    function disableOptions() {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.removeEventListener('click', () => checkGuess);
            option.style.cursor = 'default'; // Set cursor to default
        });
    }

    // Reset button click event
    resetButton.addEventListener('click', function() {
        score = 0; // Reset score to zero
        scoreDisplay.textContent = score; // Update score display
        messageDisplay.textContent = ''; // Clear message display
        resetGame(); // Reset the game
    });
});
