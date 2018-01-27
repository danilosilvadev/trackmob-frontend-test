import React, { Component } from 'react'
import Header from './header';
import Main from './main';
import css from '../../assets/page.css'

const Content = () => {
    return <div className='content'>
        <Header />
        <Main />
        </div>;
}

export default Content