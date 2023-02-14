import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = (props) => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar abt={props.abt} bk={props.bk}/>
        </header>
    </div>
  )
}

export default Header