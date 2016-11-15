import React from 'react';

class Main extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                Hello from main!
                {this.props.children}
            </div>
        )
    }
};

export default Main;