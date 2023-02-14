import React from "react";
import { Link } from 'react-router-dom';
import "./BookList.css";
const showBook = (show) =>{
    return (
        <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={show.bookURL} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
       
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{show.book.title}</span>
          </div>
        
      </div>
    </div>
    )
}

export default showBook;