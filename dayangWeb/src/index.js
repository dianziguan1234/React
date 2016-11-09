import React from 'react';
import ReactDOM from 'react-dom';
import Gwc from './App';
import './index.css';
import TransProp from './TransProp';
import LoginPage from './LLogin';
import Home from './HomePage';
import Parent from './ParentComponent';

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;

ReactDOM.render(
    //<App date={new Date()} />,
    //<TransProp/>,
    //<LoginPage/>,
    <Parent/>,
    document.getElementById('root')
    //<Router>
    //    <Route path="/" component={Home}>
    //    </Route>
    //</Router>,
    //document.getElementById('root')
);
