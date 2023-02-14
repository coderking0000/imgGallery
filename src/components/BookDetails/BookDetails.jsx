import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa";

const BookDetails = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [book, setBook] = useState({
    id:"",
    server:"",
    title:"",
    secret:"",
    farm:""
  });

  useEffect(()=>{
    props.books.map((bk)=>{
      console.log(bk.id, id);
      if(bk.id===id) {
        setBook(bk);
      }
    })
  }, []);

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => { navigate("/book"); }}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={`https://farm${book.farm}.staticflickr.com/${book.server}/${book.id}_${book.secret}_m.jpg`} alt="cover img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails