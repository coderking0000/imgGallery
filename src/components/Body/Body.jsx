import React, { useState, useEffect, useCallback } from 'react';
import BookList from '../BookList/BookList';
import Loading from "../Loader/Loader";
import SearchForm from './../SearchForm/SearchForm'
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const Body = (props) => {
    const searchTerm = "the lost world";
    const [defBooks, setDefBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUrl = (query) => `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    const fetchBooks = useCallback(async () => {
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

                setDefBooks(newBooks);
                props.setBooks(newBooks);

            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
    }, []);

    if(loading) return <Loading />

    return (
        <>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find images of your choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm setResultTitle={props.setResultTitle} setBooks={props.setBooks} />
            </div>
            <BookList books={defBooks} resultTitle={"All Time Favourite Images"}/>
        </>
    );
}

export default Body;