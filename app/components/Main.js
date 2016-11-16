import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{ display: 'inline-block', float: 'left', width: '100%' }}>
                <MuiThemeProvider>
                    <AppBar title="Dashboard" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
};

export default Main;