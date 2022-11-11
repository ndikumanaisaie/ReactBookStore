/* esdivnt-disable no-alert */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/styles/book.css';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import { deleteBook, removeBook } from '../redux/books/bookSlice';
import Spinner from './Spinner';

const Book = ({ books }) => {
  const { status } = useSelector((state) => ({ ...state.books }));

  console.log(books);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deleteBook({ id, navigate }));
      dispatch(removeBook({ id }));
    }
  };

  if (status === 'loading') {
    return <Spinner />;
  }

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
                <div className="control-btn">
                  <div className="btn"><button type="button">Comments</button></div>
                  <div className="btn"><button type="button" onClick={() => handleRemove(book.id)}>Remove</button></div>
                  <div className="btn"><button type="button">Edit</button></div>
                </div>
              </div>
              <article>
                <div className="pourcentage">
                  <CircularProgressbar
                    value={book.percentage}
                    styles={buildStyles({
                      pathColor: '#0290ff',
                      trailColor: '#c4c4c4',
                    })}
                    className="loading"
                  />
                  <div>
                    <span>
                      {
                        `${book.percentage} %`
                      }
                    </span>
                    <p>completed</p>
                  </div>
                </div>
                <div className="update">
                  <span>CURRENT CHAPTER</span>
                  <h2>{book.chapter}</h2>
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
