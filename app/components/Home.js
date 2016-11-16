import React from 'react';
import Doughnut from 'react-chartjs-2';
import HiedClient from '../client/hiedClient.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class Home extends React.Component {
    constructor() {
        super();
        this.client = new HiedClient();
        this.apiReposnse = 0;
        this.chartData;
        this.state = {
            isLoading: true,
            numberOfCounts: 4
        };
        this.users =
            [{
                id: '7151',
                name: 'Reese'
            },
            {
                id: '7144',
                name: 'Damien'
            },
            {
                id: '1116',
                name: 'Chris'
            },
            {
                id: '7158',
                name: 'James'
            }];

    }

    start() {
        if (this.state.isLoading) {
            this.getChartData();
            this.setAllCounts();
            return (
                <MuiThemeProvider>
                    <CircularProgress size={80} thickness={5} />
                </MuiThemeProvider>
            )
        } else {
            return (
                <Doughnut data={this.chartData} />
            )
        }
    }

    setUserCounts(id, name) {
        var self = this;
        this.client.getCounts(id).then(res => {
            res.json().then(function (data) {
                console.log("userdata = " + data)
                self.chartData.datasets[0].data.push(data);
                self.chartData.labels.push(name);
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    setAllCounts() {
        var self = this;
        this.users.forEach(function (entry) {
            console.log(entry);
            self.setUserCounts(entry.id, entry.name)
        });
    }

    getChartData() {
        this.chartData = {
            labels: [],
            datasets: [{
                label: 'Active Tickets',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    }

    render() {
        return (
            <div style={{ width: '1200px' }}>
                {this.start()}
            </div>
        )
    }
};

export default Home;