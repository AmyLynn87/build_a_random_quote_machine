import { useState } from "react";

import "./App.css";

const dbQuotes = [
  {
    text: "It is our responsibilities, not ourselves, that we should take seriously.",
    author: "-Peter Ustinov",
  },
  {
    text: "Here is my secret. It is very simple: it is only with the heart that one can see rightly. What is essential is invisible to the eye.",
    author: "- Antoine de Saint Exupéry",
  },
  {
    text: "Perfection is finally attained not when there is no longer anything to add, but when there is no longer anything to take away. ",
    author: " - Antoine de Saint-Exupéry",
  },
  {
    text: "Shedding one’s skin. The snake that cannot shed its skin perishes. So do the spirits who are prevented from changing their opinions; they cease to be spirit.",
    author: "- Nietzsche",
  },
  {
    text: "Live as long as you may, the first twenty years are the longest half of your life. They appear so while they are passing; they seem to have been so when we look back on them; and they take up more room in our memory than all the years that succeed them.Shedding one’s skin. The snake that cannot shed its skin perishes. So do the spirits who are prevented from changing their opinions; they cease to be spirit.",
    author: "-Robert Southey",
  },
  {
    text: "Be who you needed when you were younger.",
    author: "- T.S. Elliot",
  },
  {
    text: "You will never change your life until you change something you do daily.",
    author: "- John Maxwell",
  },
  {
    text: "Life is not even close to being as logically consistent as our worries; it has many more unexpected ideas and many more facts than we do. ",
    author: "- Rilke",
  },
  {
    text: "All cruelty springs from weakness.",
    author: "- Seneca",
  },
];

function App() {
  let defaultIndex = Math.floor(Math.random() * dbQuotes.length);
  let defaultQuote = dbQuotes[defaultIndex];

  const [quote, setQuote] = useState(defaultQuote);

  function handleClick() {
    let randomIndex = Math.floor(Math.random() * dbQuotes.length);
    let randomQuote = dbQuotes[randomIndex];
    setQuote(randomQuote);
  }

  return (
    <div>
      <div id="quote-box">
        <div id="text">{quote.text}</div>
        <div id="author">{quote.author}</div>
        <div className="buttons">
          <a
            href={`twitter.com/intent/tweet?text=${quote.text}-${quote.author}`}
            target="_blank"
            id="tweet-quote"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <button onClick={handleClick} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
