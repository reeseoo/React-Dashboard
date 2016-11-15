var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Home = require('../components/Home');
import Main from '../components/Main.js'
import { hashHistory } from 'react-router'

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='/home' component={Home} />
        </Route>
    </Router>
);

module.exports = routes;