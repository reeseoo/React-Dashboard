import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import Home from './components/home.js'
import Main from './components/main.js'

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='/home' component={Home} />
        </Route>
    </Router>
);

module.exports = routes;