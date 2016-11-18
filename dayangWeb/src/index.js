import React from 'react';
import ReactDOM from 'react-dom';
import Gwc from './App';
import './index.css';
import TransProp from './TransProp';
import LoginPage from './LLogin';
import Home from './components/HomePage';
import Parent from './ParentComponent';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import AppContainer from './containers/AppContainer'
import { render } from 'react-dom'
import Main from './components/Main'

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;

// ReactDOM.render(
//     //<App date={new Date()} />,
//     //<TransProp/>,
//     //<LoginPage/>,
//     //<Parent/>,
//     //TransProp />
//     <Home />,
//     document.getElementById('root')
//     //<Router>
//     //    <Route path="/" component={Home}>
//     //    </Route>
//     //</Router>,
//     //document.getElementById('root')
// );
const store = createStore(reducer)

render(
    <Provider store={store}>
         <Main />
    </Provider>,
    document.getElementById('root')
) 
