import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import Home from './components/home.js'
import Main from './components/main.js'
import Payments from './components/payments.js'
import Log from './components/logs.js'

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='/home' component={Home} />
            <Route path='/payments' component={Payments} />
            <Route path='/logs' component={Log} />
        </Route>
    </Router>
);

module.exports = routes;