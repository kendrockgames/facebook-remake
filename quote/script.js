const quotes = [
    "The darkest nights produce the brightest stars - guy from transformers",
    "Do not let the thoughts of people stop you - Kendrock",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
];

const quoteElement = document.getElementById('quote');
const changeButton = document.getElementById('changeButton');
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.innerText = randomQuote;
}

changeButton.addEventListener('click', updateQuote);

// Initial quote update
updateQuote();
