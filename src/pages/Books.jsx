import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';
import { getBooks } from '../redux/books/bookSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { books, status } = useSelector((state) => ({ ...state.books }));

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div style={{
      padding: '0 5%',
    }}
    >
      <Book books={books} />
      <AddBookForm />
    </div>
  );
};

export default Home;
