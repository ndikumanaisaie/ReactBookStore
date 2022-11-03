import React from 'react';
import '../assets/styles/book.css';

const Book = () => (
  <section className="book-card">
    <div className="article">
      <span>genre</span>
      <h2>title</h2>
      <p>Author</p>
      <ul>
        <li className="btn"><button type="button">Comments</button></li>
        <li className="btn"><button type="button">Remove</button></li>
        <li className="btn"><button type="button">Edit</button></li>
      </ul>
    </div>
    <article>
      <div className="pourcentage">
        <div>
          <span>
            64
            %
          </span>
          <p>completed</p>
        </div>
      </div>
      <div className="update">
        <button type="button">update progress</button>
      </div>
    </article>
  </section>
);

export default Book;
