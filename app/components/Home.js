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
        this.userOneCounts = 0;
        this.userTwoCounts = 0;
        this.userThreeCounts = 0;
        this.userFourCounts = 0;
        this.state = {
            isLoading: true
        };
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

    setUserOneCounts() {
        var self = this;
        this.client.getCounts(7151).then(res => {
            res.json().then(function (data) {
                console.log("userdata = " + data)
                self.chartData.datasets[0].data.push(data);
                self.chartData.labels.push('Reese');
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    setUserTwoCounts() {
        var self = this;
        this.client.getCounts(7144).then(res => {
            res.json().then(function (data) {
                console.log("userdata = " + data)
                self.chartData.datasets[0].data.push(data);
                self.chartData.labels.push('Damien');
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    setUserThreeCounts() {
        var self = this;
        this.client.getCounts(1116).then(res => {
            res.json().then(function (data) {
                console.log("userdata = " + data)
                self.chartData.datasets[0].data.push(data);
                self.chartData.labels.push('Chris');
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    setUserFourCounts() {
        var self = this;
        this.client.getCounts(7158).then(res => {
            res.json().then(function (data) {
                console.log("userdata = " + data)
                self.chartData.datasets[0].data.push(data);
                self.chartData.labels.push('James');
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    setAllCounts() {
        this.userOneCounts = this.setUserOneCounts();
        this.userTwoCounts = this.setUserTwoCounts();
        this.userThreeCounts = this.setUserThreeCounts();
        this.userFourCounts = this.setUserFourCounts();
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