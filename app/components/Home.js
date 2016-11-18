import React from 'react';
import Doughnut from 'react-chartjs-2';
import HiedClient from '../client/hiedClient.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Ticket from './ticket.js'

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                    <Ticket></Ticket>
                </div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                    <Ticket></Ticket>
                </div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                    <Ticket></Ticket>
                </div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                    <Ticket></Ticket>
                </div>
            </div>
        )
    }
};

export default Home;