import React from 'React'
import HiedClient from '../client/hiedClient.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class Payments extends React.Component {
    constructor() {
        super();
        this.client = new HiedClient();
        this.state = {
            isLoading: true,
            numberOfCounts: 4
        };
        this.paymentValue = 0.00;
        this.paymentCount = 0;
    }

    start() {
        var self = this;
        if (this.state.isLoading) {
            self.getPaymentValue();
            return (
                <MuiThemeProvider>
                    <div style={{ width: '11%', marginLeft: 'auto', marginRight: 'auto', marginTop: '150px' }}>
                        <CircularProgress style={{ margin: '15px', display: 'inline-block' }} size={80} thickness={5} />
                    </div>
                </MuiThemeProvider>
            )
        } else {
            this.paymentValue = parseFloat(this.paymentValue);
            return (
                <div style={{ margin: '15px', display: 'inline-block' }}>
                    <div style={{ marginBottom: '15px', display: 'inline-block' }}>Amount Processed: {this.paymentCount} </div> <br />
                    <div style={{ marginBottom: '15px', display: 'inline-block' }}>Value Processed: {this.paymentValue} </div>
                </div>
            )
        }
    }

    getPaymentValue() {
        var self = this;
        this.client.getPayments().then(res => {
            res.json().then(function (data) {
                console.log("paymentData = " + data)
                data.forEach(function (entry) {
                    var result = entry.AdditionalFields.filter(function (obj) {
                        return obj.Name == "Amount to be paid";
                    });
                    self.paymentCount++;
                    if (result[0] != undefined && result[0].Value != undefined) {
                        console.log(self.paymentValue + " + " + result[0].Value);
                        if (!isNaN(result[0].Value)) {
                            self.paymentValue += parseFloat(result[0].Value);
                        }
                    }
                });
                self.setState({
                    isLoading: false
                });
            });
        });
    }

    render() {
        return (
            <div style={{ width: '987px' }}>{this.start()}</div>
        )
    }
};

export default Payments;