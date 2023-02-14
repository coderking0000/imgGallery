import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import { Outlet } from 'react-router-dom';

const Home = (props) => {
  
  return (
    <>
        <Header />
        <Body setBooks={props.setBooks} setResultTitle={props.setResultTitle}/>
        <Outlet />
    </>
  )
}

export default Home