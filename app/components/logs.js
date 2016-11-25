import React from 'react';
import Doughnut from 'react-chartjs-2';
import LogClient from '../client/logClient.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const style = {
    marginLeft: '10px',
    marginRight: '10px'
};


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
        this.logView = [];
    }

    start() {
        if (this.state.isLoading) {
            this.getLogs("Information");
            return (
                <div>
                    <MuiThemeProvider>
                        <div style={{ width: '11%', marginLeft: 'auto', marginRight: 'auto', marginTop: '150px' }}>
                            <CircularProgress size={80} thickness={5} />
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        } else {
            return (
                <div style={style}>
                    <MuiThemeProvider>
                        <SelectField floatingLabelText="Frequency" value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value="Information" primaryText="Information" />
                            <MenuItem value="Warning" primaryText="Warning" />
                            <MenuItem value="Error" primaryText="Error" />
                            <MenuItem value="Verbose" primaryText="Verbose" />
                            <MenuItem value="Fatal" primaryText="Fatal" />
                        </SelectField>
                        <Table>
                            {this.logView}
                        </Table>
                    </MuiThemeProvider>
                </div>
            )
        }
    }

    getLogs(logLevel) {
        var self = this;
        self.logView.push(<TableHeader><TableRow><TableHeaderColumn>Log Level</TableHeaderColumn><TableHeaderColumn>Message</TableHeaderColumn></TableRow></TableHeader>)
        this.client.getLogs(logLevel).then(res => {
            res.json().then(function (data) {
                var i = 0;
                var tempViewData = [];
                data.forEach(function (entry) {
                    console.log("LogData = " + entry.LogLevel)
                    self.logData.push(data);

                    if (entry.LogLevel == 0) {
                        entry.LogLevel = "Information"
                    }
                    else if (entry.LogLevel == 1) {
                        entry.LogLevel = "Warning"
                    }
                    else if (entry.LogLevel = 2) {
                        entry.LogLevel == "Error"
                    }
                    else if (entry.LogLevel = 3) {
                        entry.LogLevel == "Verbose"
                    }
                    else if (entry.LogLevel = 4) {
                        entry.LogLevel == "Fatal"
                    }

                    if (i <= 9) {
                        tempViewData.push(<TableRow> <TableRowColumn>{entry.LogLevel}</TableRowColumn> <TableRowColumn>{entry.Message}</TableRowColumn> </TableRow>)
                    }
                    i++;
                });
                self.logView.push(<TableBody>{tempViewData}</TableBody>);
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