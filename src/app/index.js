import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Content /></BrowserRouter>, document.getElementById('root'));