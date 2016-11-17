import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
    display: 'inline-block',
    margin: '16px 8px 16px 0',
    maxWidth: '224px',
    width: '20%',
    float: 'left'
};

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
                <MuiThemeProvider>
                    <Paper style={style}> 
                        <Menu>
                            <MenuItem primaryText="Home" href="/#/home" />
                            <MenuItem primaryText="Payments" href="/#/payments" />
                        </Menu>
                    </Paper>
                </MuiThemeProvider>
                <div style={{ display: 'inline-block', float: 'right', width:'80%', margin: 'auto' }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
};

export default Main;