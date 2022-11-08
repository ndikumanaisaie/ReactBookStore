import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';

const Home = () => {
  const { books } = useSelector((state) => ({ ...state.books }));
  return (
    <div style={{
      backgroundColor: '#fafafa',
      padding: '0 5%',
    }}
    >
      <Book books={books} />
      <AddBookForm />
    </div>
  );
};

export default Home;
