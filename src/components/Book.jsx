/* eslint-disable no-alert */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/book.css';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import { removeBook } from '../features/books/bookSlice';

const Book = () => {
  const { books } = useSelector((state) => ({ ...state.books }));
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(removeBook({ id }));
    }
  };

  return (
    <>
      {
      books && books.map((book) => (
        <section key={book.id} className="book-card">
          <div className="article">
            <span>genre</span>
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
    }
    </>
  );
};

export default Book;
