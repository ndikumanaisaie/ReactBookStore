import React from 'react';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';

const Home = () => (
  <div style={{
    backgroundColor: '#fafafa',
    padding: '0 5%',
  }}
  >
    <Book />
    <AddBookForm />
  </div>
);

export default Home;
