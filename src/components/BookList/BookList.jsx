import React from 'react';
import Book from './Book'
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = (props) => {
  
   return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{props.resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            props.books.map((book) => {
              return (
                <Book key={book.id} id={book.id} server={book.server} farm={book.farm} title={book.title} secret={book.secret} setBook={props.setBook}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList
