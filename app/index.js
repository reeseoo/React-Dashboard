var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function(){
        return (
            <div>Testing email for git</div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
)