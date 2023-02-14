import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Header from './components/Header/Header';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const App = () => {
    const [books, setBooks] = useState([]);
    const [resultTitle, setResultTitle] = useState([]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home setBooks={setBooks} setResultTitle={setResultTitle}/>} />
                <Route path="/about" element={<About abt={true}/>} />
                <Route path="/book" element={<><Header bk={true}/><BookList books={books} resultTitle={resultTitle}/></>} />
                <Route path="/book/:id" element={<BookDetails books={books} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;