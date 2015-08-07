/**
 * Created by germini on 8/7/15.
 */
var React = require('react');
var Chart = require('chart.js');

var LineCom = React.createClass({

    componentDidMount: function () {
        var canvasCtx = React.findDOMNode(this).getContext('2d');

        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        var options = {
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\">" +
            "<% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\">" +
            "</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };

        var chart = new Chart(canvasCtx).Line(data, options)

    },

    render: function () {


        return (
            <canvas className='myCanvas'></canvas>
        )
    }
});

var BarCom = React.createClass({

    componentDidMount: function () {
        var canvasCtx = React.findDOMNode(this).getContext('2d');

        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        var options = {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero: true,

            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - If there is a stroke on each bar
            barShowStroke: true,

            //Number - Pixel width of the bar stroke
            barStrokeWidth: 2,

            //Number - Spacing between each of the X value sets
            barValueSpacing: 5,

            //Number - Spacing between data sets within X values
            barDatasetSpacing: 1,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\">" +
            "<% for (var i=0; i<datasets.length; i++){%><li>" +
            "<span style=\"background-color:<%=datasets[i].fillColor%>\">" +
            "</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };

        var chart = new Chart(canvasCtx).Bar(data, options)

    },

    render: function () {


        return (
            <canvas className='myCanvas'></canvas>
        )
    }
});

var RadarCom = React.createClass({

    componentDidMount: function () {
        var canvasCtx = React.findDOMNode(this).getContext('2d');

        var data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        var options = {
            scaleShowLine: true,

            //Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut: true,

            //Boolean - Whether to show labels on the scale
            scaleShowLabels: false,

            // Boolean - Whether the scale should begin at zero
            scaleBeginAtZero: true,

            //String - Colour of the angle line
            angleLineColor: "rgba(0,0,0,.1)",

            //Number - Pixel width of the angle line
            angleLineWidth: 1,

            //String - Point label font declaration
            pointLabelFontFamily: "'Arial'",

            //String - Point label font weight
            pointLabelFontStyle: "normal",

            //Number - Point label font size in pixels
            pointLabelFontSize: 10,

            //String - Point label font colour
            pointLabelFontColor: "#666",

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 3,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\">" +
            "<% for (var i=0; i<datasets.length; i++){%><li>" +
            "<span style=\"background-color:<%=datasets[i].strokeColor%>\">" +
            "</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };

        var chart = new Chart(canvasCtx).Radar(data, options)

    },

    render: function () {


        return (
            <canvas className='myCanvas'></canvas>
        )
    }
});

var PolarCom = React.createClass({

    componentDidMount: function () {
        var canvasCtx = React.findDOMNode(this).getContext('2d');

        var data = [
            {
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            },
            {
                value: 40,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Grey"
            },
            {
                value: 120,
                color: "#4D5360",
                highlight: "#616774",
                label: "Dark Grey"
            }

        ];

        var options = {
            //Boolean - Show a backdrop to the scale label
            scaleShowLabelBackdrop: true,

            //String - The colour of the label backdrop
            scaleBackdropColor: "rgba(255,255,255,0.75)",

            // Boolean - Whether the scale should begin at zero
            scaleBeginAtZero: true,

            //Number - The backdrop padding above & below the label in pixels
            scaleBackdropPaddingY: 2,

            //Number - The backdrop padding to the side of the label in pixels
            scaleBackdropPaddingX: 2,

            //Boolean - Show line for each value in the scale
            scaleShowLine: true,

            //Boolean - Stroke a line around each segment in the chart
            segmentShowStroke: true,

            //String - The colour of the stroke on each segement.
            segmentStrokeColor: "#fff",

            //Number - The width of the stroke value in pixels
            segmentStrokeWidth: 2,

            //Number - Amount of animation steps
            animationSteps: 100,

            //String - Animation easing effect.
            animationEasing: "easeOutBounce",

            //Boolean - Whether to animate the rotation of the chart
            animateRotate: true,

            //Boolean - Whether to animate scaling the chart from the centre
            animateScale: false,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\">" +
            "<% for (var i=0; i<segments.length; i++){%><li>" +
            "<span style=\"background-color:<%=segments[i].fillColor%>\">" +
            "</span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        };

        var chart = new Chart(canvasCtx).PolarArea(data, options)

    },

    render: function () {


        return (
            <canvas className='myCanvas'></canvas>
        )
    }
});


var PieCom = React.createClass({

    componentDidMount: function () {
        var canvasCtx = React.findDOMNode(this).getContext('2d');

        var data = [
            {
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ]

        var options = {
            segmentShowStroke: true,

            //String - The colour of each segment stroke
            segmentStrokeColor: "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth: 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout: 50, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps: 100,

            //String - Animation easing effect
            animationEasing: "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\">" +
            "<% for (var i=0; i<segments.length; i++){%><li>" +
            "<span style=\"background-color:<%=segments[i].fillColor%>\">" +
            "</span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        };

        var chart = new Chart(canvasCtx).Pie(data, options)

    },

    render: function () {


        return (
            <canvas className='myCanvas'></canvas>
        )
    }
});


var ChartsCom = React.createClass({

    render: function () {


        return (
            <div className='full-width full-height'>
                <LineCom />
                <BarCom />
                <RadarCom />
                <PolarCom />
                <PieCom />
            </div>
        )
    }
});

React.render(<ChartsCom />, document.body);


