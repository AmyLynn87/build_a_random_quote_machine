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
];

function App() {
  function randomIndex(max) {
    Math.floor(Math.random() * max);
  }

  let randomQuote = dbQuotes[randomIndex(dbQuotes.length)];
  const [quote, setQuote] = useState({
    text: "Live as long as you may, the first twenty years are the longest half of your life. They appear so while they are passing; they seem to have been so when we look back on them; and they take up more room in our memory than all the years that succeed them.Shedding one’s skin. The snake that cannot shed its skin perishes. So do the spirits who are prevented from changing their opinions; they cease to be spirit.",
    author: "-Robert Southey",
  });

  function handleClick() {
    setQuote(randomQuote);
  }

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">{quote.author}</div>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
          <i className="fab fa-twitter-square"></i>
        </a>
        <button onClick={handleClick} id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
