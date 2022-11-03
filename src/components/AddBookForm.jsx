import React from 'react';

const AddBookForm = () => {
  const addNewBook = () => {
    console.log('submitted');
  };

  return (
    <section className="AddSection">
      <div className="title">
        <h2>ADD NEW BOOK</h2>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Book title"
          value="title"
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value="author"
          className="hide"
        />
        <select name="genre" value="genre">
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
