import  React from 'react';
import { HiedClient } from '../client/hiedClient.js';

export class Main extends React.Component {
    constructor(){
        super();
    }

    componentDidMount() {
        this.getCounts();
    }

    getCounts() {
        console.log(HiedClient.getCounts());
        return HiedClient.getCounts();
    }

    render() {
        return (
            <div>
                Hello from main!
                {this.getCounts}
                {this.props.children}
            </div>
        )
    }
};