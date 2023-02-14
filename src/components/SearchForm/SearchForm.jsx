import React, { useRef, useState, useCallback } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import { useGlobalContext } from '../../context';
import "./SearchForm.css";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const SearchForm = (props) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const searchText = useRef('');
  const getUrl = (query) => `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

  const fetchBooks = useCallback(async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(getUrl(searchTerm));
      const data = await response.json();
      //console.log(data);
      const { photos: docs } = data;
      // console.log(docs);
      const photo = docs.photo;
      if (docs) {
        const newBooks = photo.map((bookSingle) => {
          const { id, server, title, secret, farm } = bookSingle;

          return {
            id: id,
            server: server,
            title: title,
            secret: secret,
            farm: farm
          }
        });
        if(newBooks.length > 1){
            props.setResultTitle("Your Search Result");
        } else {
            props.setResultTitle("No Search Result Found!!!!!!")
        }
        return newBooks;
      } else {
          props.setResultTitle("No Search Result Found!");
          return null;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    const books = await fetchBooks(tempSearchTerm);
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length !== 0) {
      props.setBooks(books);
      navigate("/book");
    }
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='Please Enter something ...' ref={searchText} />
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm