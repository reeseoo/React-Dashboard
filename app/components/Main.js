import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const style = {
    display: 'inline-block',
    margin: '0',
    width: '15%',
    height: '100vh',
    float: 'left'
};

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{ display: 'inline-block', float: 'left', width: '100%', margin: 'auto' }}>   
                <MuiThemeProvider>
                    <Paper style={style}>
                        <Menu>
                            <MenuItem primaryText="Home" href="/#/home" />
                            <MenuItem primaryText="Payments" href="/#/payments" />
                            <MenuItem primaryText="Logs" href="/#/logs" />
                            <MenuItem primaryText="Example Two" href="/#/payments" />
                            <MenuItem primaryText="Payments" href="/#/payments" />
                        </Menu>
                    </Paper>
                </MuiThemeProvider>
                <div style={{ display: 'inline-block', float: 'left', width: '85%', marginLeft: '0' }}>
                    <MuiThemeProvider>
                        <AppBar title="Dashboard" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                    </MuiThemeProvider>
                    <div style={{ display: 'inline-block', width: '80%', margin: 'auto' }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;