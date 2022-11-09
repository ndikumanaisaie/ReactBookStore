/* eslint-disable no-alert */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/book.css';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import { removeBook } from '../redux/books/bookSlice';

// {
//   "2wEokULJ9t76goGgjhPZn": [
//       {
//           "author": "Ndikumana Isaie",
//           "title": "Head First React",
//           "category": "Technology"
//       }
//   ],
//   "RzHpj25qxIDhkklKSI6Qd": [
//       {
//           "title": "History of burundi",
//           "author": "Jean baptiste",
//           "category": ""
//       }
//   ],
//   "CK93KoxfRzFAUw0N0mOVI": [
//       {
//           "title": "biography eliane",
//           "author": "eliane",
//           "category": ""
//       }
//   ]
// }

const Book = ({ books }) => {
  const dispatch = useDispatch();
  console.log(books);
  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(removeBook({ id }));
    }
  };

  return (
    <section key={books.id} className="book-card">
      <div className="article">
        <span>genre</span>
        <h2>{books.title}</h2>
        <p>{books.author}</p>
        <ul>
          <li className="btn"><button type="button">Comments</button></li>
          <li className="btn"><button type="button" onClick={() => handleRemove(books.id)}>Remove</button></li>
          <li className="btn"><button type="button">Edit</button></li>
        </ul>
      </div>
      <article>
        <div className="pourcentage">
          <Loading className="loading" />
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
};

Book.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
