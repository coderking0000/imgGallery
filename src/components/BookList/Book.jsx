import React from 'react';
import { Link } from 'react-router-dom';
import showBook  from './showBook';
import "./BookList.css";

const Book = (book) => {
  const bookURL = `https://farm${book.farm}.staticflickr.com/${book.server}/${book.id}_${book.secret}_m.jpg`;
  
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={bookURL} alt="cover" />
      </div>
      <div className='book-item-info text-center' >
         <Link to={`/book/${book.id}`} {...book}> 
          <div className='book-item-info-item title fw-7 fs-18'>
            <span >{book.title}</span>
          </div>
         </Link> 
      </div>
    </div>
  )
}

export default Book;
