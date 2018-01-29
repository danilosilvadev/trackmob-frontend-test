import React, { Component } from 'react'
import Header from './header';
import Main from './main';
import css from '../../assets/page.css'
import Footer from './footer'

const Content = () => {
    return <div className='content'>
        <Header />
        <Main />
        <Footer />
        </div>;
}

export default Content