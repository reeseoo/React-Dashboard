import React from 'react';
import Doughnut from 'react-chartjs-2';
import HiedClient from '../client/hiedClient.js';

class Home extends React.Component {

    //new HiedClient().getCounts(7151)
    //new HiedClient().getCounts(7144)
    //new HiedClient().getCounts(1116)
    //new HiedClient().getCounts(7158)

    constructor() {
        super();
        this.client = new HiedClient();
        console.log("From home " + this.client.getCounts(7151));
    }

    chartData() {
        return new {
            labels: ["Reese", "Damien", "Chris", "James"],
            datasets: [{
                label: '# of Votes',
                data: [5, 10, 7, 15],
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

    chartOptions() {
        return {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    render() {
        return (
            <div>
                <Doughnut data={this.chartData} />
            </div>
        )
    }
};

export default Home;