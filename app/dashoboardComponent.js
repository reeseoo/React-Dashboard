import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tickets: new Object() };
    }

    componentDidMount() {
        fetch('http://hi/apps/HiTicketsApi/api/ticket/7151', {
            method: 'get'
        }).then(function (response) {
            this.setState({tickets: response});
        }).catch(function (err) { });
    }

    render() {
        return (
            <div>Hello es6</div>
        );
    }
}

export default Dashboard;