/* eslint-disable no-alert */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/book.css';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import { deleteBook } from '../redux/books/bookSlice';

const Book = ({ books }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deleteBook({ id }));
    }
  };

  return (
    <>
      {
        books ? (
          books?.map((book) => (
            <section key={book.id} className="book-card">
              <div className="article">
                <span>{book.category}</span>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <ul>
                  <li className="btn"><button type="button">Comments</button></li>
                  <li className="btn"><button type="button" onClick={() => handleRemove(book.id)}>Remove</button></li>
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
          ))
        ) : (
          <div className="empty">There is no books yet. Please Add book</div>
        )
      }
      {
    }
    </>
  );
};

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

export default Book;
