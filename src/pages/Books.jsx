import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';
import { getBooks } from '../redux/books/bookSlice';

const Home = () => {
  const { books, status } = useSelector((state) => ({ ...state.books }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);

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
