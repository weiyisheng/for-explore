/**
 * Created by germini on 8/7/15.
 */
var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    RaisedButton = mui.RaisedButton;

var MyAwesomeReactComponent = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function () {
        return (
            <RaisedButton label="Default"/>
        );
    }

});

var MaterialUis = React.createClass({

    render: function () {

        return (
            <div>
                <MyAwesomeReactComponent />
            </div>
        )
    }
});

React.render(<MaterialUis />,
    document.body);