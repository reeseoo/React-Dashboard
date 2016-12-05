import React from 'react';
import HiedClient from '../client/hiedClient.js';
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