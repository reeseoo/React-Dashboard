var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({

    fetchStuff: function () {
        fetch('http://hi/apps/HiTicketsApi/api/ticket/7151', {
            method: 'get'
        }).then(function (response) {

        }).catch(function (err) { });
    },

    render: function () {
        return (
            <div>


                <select>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
                One last test {this.props.name}
            </div>
        )
    }
});

ReactDOM.render(
    <HelloWorld name="Reese" />,
    document.getElementById('app')
)