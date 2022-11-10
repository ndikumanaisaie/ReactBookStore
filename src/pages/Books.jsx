import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Audio } from 'react-loader-spinner';
import AddBookForm from '../components/AddBookForm';
// import Spinner from '../components/Spinner';
import Book from '../components/Book';
import { getBooks } from '../redux/books/bookSlice';

const Home = () => {
  const { books, status } = useSelector((state) => ({ ...state.books }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }

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
