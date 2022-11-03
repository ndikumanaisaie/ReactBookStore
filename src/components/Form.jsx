import React from 'react';

const Form = () => {
  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add New Book..."
        value="book"
        name="book"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add Author..."
        value="author"
        name="author"
      />
      <button type="submit" className="input-submit">
        Add New Book
      </button>
    </form>
  );
};

export default Form;
