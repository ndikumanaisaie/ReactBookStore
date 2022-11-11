/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { createBook, updatedBook } from '../redux/books/bookSlice';
import '../assets/styles/addNewBook.css';

const AddBookForm = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const { title, author, category } = inputText;
  const { id } = useParams();

  const { books } = useSelector((state) => ({ ...state.books }));

  useEffect(() => {
    if (id) {
      const bookToEdit = books.find((book) => book.id === id);
      setInputText({ ...bookToEdit });
    }
  }, [id, books]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const addNewBook = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim()) {
      if (title && author && category) {
        if (!id) {
          dispatch(createBook({
            ...inputText,
            item_id: nanoid(),
          }));
        } else {
          dispatch(updatedBook(inputText));
        }
        setInputText({
          title: '',
          author: '',
        });
      }
      // dispatch(createBook({
      //   ...inputText,
      //   item_id: nanoid(),
      // }));
      // setInputText({
      //   title: '',
      //   author: '',
      // });
    } else {
      alert('Please add book, author and select category');
    }
  };

  return (
    <section className="add-book-section">
      <div className="title">
        <h2>ADD NEW BOOK</h2>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Book title"
          value={inputText.title}
          name="title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Book author"
          value={inputText.author}
          name="author"
          onChange={handleChange}
          required
        />
        <select className="hide" name="category" value={inputText.category} onChange={handleChange}>
          <option hidden value="category">Category </option>
          <option value="history">History</option>
          <option value="science">Science</option>
          <option value="Economy">Economy</option>
          <option value="Comedy">Comedy</option>
          <option value="Technology">Technology</option>
        </select>
        <button type="button" value="ADD BOOK" onClick={addNewBook}>
          Add Book
        </button>
      </div>
    </section>
  );
};

export default AddBookForm;
