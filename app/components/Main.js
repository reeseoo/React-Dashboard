var React = require('React');
var HiedClient = require('HiedClient')

var Main = React.createClass({
    render: function () {
        return (
            <div>
                Hello from main!
                {this.props.children}
            </div>
        )
    }
})

module.exports = Main;