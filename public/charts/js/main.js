/**
 * Created by germini on 8/7/15.
 */
var React = require('react');

var Chart = React.createClass({

    render: function () {


        return (
            <canvas className='absolute myCanvas'></canvas>
        )
    }
});

React.render(<Chart />, document.body);


