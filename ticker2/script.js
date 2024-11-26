let sentences = []; // Initialize as empty array

// Function to load sentences from file
function loadSentences() {
    return fetch('ticker2/placeholder.txt')
        .then(response => response.text())
        .then(text => {
            sentences = text.split('\n').filter(sentence => sentence.trim() !== '');
            return sentences;
        });
}

// Function to update the placeholder
function updatePlaceholder() {
    const inputElement = document.getElementById('tickerInput');
    inputElement.placeholder = sentences[currentSentenceIndex];
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
}

// When the window loads, we'll load the placeholder
window.onload = function() {
    let currentSentenceIndex = 0; // Place this here so it initializes after placeholder are loaded

    loadSentences().then(() => {
        // Only start the ticker once placeholder are loaded
        updatePlaceholder(); // Start with the first sentence
        setInterval(updatePlaceholder, 3000);
    }).catch(error => console.error('Error loading placeholder:', error));
};

// Optional: Clear the interval when the input gets focus
document.getElementById('tickerInput').addEventListener('focus', function() {
    clearInterval(interval);
});

// Optional: Restart the interval when the input loses focus
document.getElementById('tickerInput').addEventListener('blur', function() {
    interval = setInterval(updatePlaceholder, 3000);
});
