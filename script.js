let currentQuestion = {};
let correctAnswer = 0;

// Function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to generate a new random question
function generateQuestion() {
    const operation = getRandomInt(5) + 1; // Random number between 1 and 5
    let a = getRandomInt(100) + 1; // Random number between 1 and 100
    let b = getRandomInt(100) + 1;
    let questionText = '';
    
    switch (operation) {
        case 1: // Multiplication
            correctAnswer = a * b;
            questionText = `${a} × ${b}`;
            break;
        case 2: // Addition
            correctAnswer = a + b;
            questionText = `${a} + ${b}`;
            break;
        case 3: // Square
            correctAnswer = a * a;
            questionText = `${a} × ${a}`;
            break;
        case 4: // Cube
            correctAnswer = a * a * a;
            questionText = `${a} × ${a} × ${a}`;
            break;
        case 5: // Factorial (only up to 10!)
            a = getRandomInt(10) + 1;
            correctAnswer = factorial(a);
            questionText = `${a}!`;
            break;
    }

    currentQuestion = { text: questionText, answer: correctAnswer };
    document.getElementById('question').textContent = currentQuestion.text;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

// Helper function to calculate factorial
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to handle answer submission
function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');
    
    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = 'Correct!';
        resultElement.classList.remove('incorrect');
        resultElement.classList.add('correct');
    } else {
        resultElement.textContent = `Incorrect! The correct answer is ${currentQuestion.answer}.`;
        resultElement.classList.remove('correct');
        resultElement.classList.add('incorrect');
    }
    
    // Generate next question after 2 seconds
    setTimeout(generateQuestion, 2000);
}

// Initialize first question on page load
window.onload = generateQuestion;
