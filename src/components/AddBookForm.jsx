/* eslint-disable no-alert */
import React, { useState } from 'react';
import '../assets/styles/addNewBook.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../features/books/bookSlice';

const AddBookForm = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(inputText);

  const addNewBook = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim()) {
      dispatch(addBook({
        ...inputText,
        id: nanoid(),
      }));
      setInputText({
        title: '',
        author: '',
      });
    } else {
      alert('Please add book and author');
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
        <select className="hide" onChange={handleChange} name="genre" value="genre">
          <option hidden value="category"> Category </option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="button" value="ADD BOOK" onClick={addNewBook}>
          Add Book
        </button>
      </div>
    </section>
  );
};

export default AddBookForm;
