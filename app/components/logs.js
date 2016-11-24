import React from 'react';
import Doughnut from 'react-chartjs-2';
import LogClient from '../client/logClient.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class Log extends React.Component {
    constructor() {
        super();
        this.client = new LogClient();
        this.state = {
            isLoading: true
        };
        this.logLevels =
            [{
                level: 'Information',
            },
            {
                level: 'Fatal',
            }];
            this.logData = [{}];
    }

    start() {
        this.getLogs("Information");
        if (this.state.isLoading) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div style={{ width: '11%', marginLeft: 'auto', marginRight: 'auto', marginTop: '150px' }}>
                            <CircularProgress size={80} thickness={5} />
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        } else  {
            return (
                <div>
                    Done loading
                </div>
            )
        }
    }

    getLogs(logLevel) {
        var self = this;
        this.client.getLogs(logLevel).then(res => {
            res.json().then(function (data) {
                console.log("LogData = " + data)
                data.forEach(function (entry) {
                    self.logData.push(data);
                });
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                {this.start()}
            </div>
        )
    }
};

export default Log;