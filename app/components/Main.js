import React from 'react';

class Main extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <div style={{display: 'inline-block', float: 'left'}}>
                    <input type="button" value="Assigned Counts" />
                </div>
                {this.props.children}
            </div>
        )
    }
};

export default Main;