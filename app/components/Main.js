import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{ display: 'inline-block', float: 'left', width: '100%', maxWidth: '1187px', margin: 'auto' }}>
                <MuiThemeProvider>
                    <AppBar title="Dashboard" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                </MuiThemeProvider>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/payments">Payments</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};

export default Main;