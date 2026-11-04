import React from "react";

const quotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
]

const Quotes = () => (
  <section className="quote-section">
    <div className="page-container">
      <div className="quote-heading">
        <span className="section-kicker">A NOTE TO SELF</span>
        <h2>Good work starts with good questions.</h2>
      </div>
      <div className="quote-grid">
        {quotes.map((quote) => (
          <figure className="quote-card" key={quote.author}>
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{quote.text}</blockquote>
            <figcaption>— {quote.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)

export default Quotes
