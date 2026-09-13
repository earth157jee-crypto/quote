const quoteText = document.querySelector('#quote-text');
const author = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote');
function getQuote() {
  quoteText.textContent = 'Doubts kill more dreams than failure ever will.';
  author.textContent = '— Suzy Kassem';
}

newQuoteButton.addEventListener('click', getQuote);
