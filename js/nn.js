/*
    nn.js
    Implementations of Nearest Neighbour Search algorithms

    These implementations are intended for educational purposes
    only -- you really shouldn't implement them like this in a
    production setting. In fact, use a well-established library.

*/

// Euclidean distance between a and b
function euc(a, b) {
    if(a.length !== b.length) {
        throw "length of vectors not equal in euclidean comparison";
    }

    let sum = 0;

    for(i = 0; i < a.length; i++) {
        sum += (a[i]  - b[i]) ** 2
    }

    return Math.sqrt(sum);
}

// I'm honestly not sure what this design pattern is called in ES6 any more
function Search(points, comparator, nearest, init) {
    this.points = points;
    this.comparator = comparator;
    this.storage = {};
    this.init = init;
    this.nearest = function(x) {
        return nearest(x, points)
    };
}



function NaiveSearch(points) {

    let nearest = function(k){
        for (i in this.points) {

        }
    };

    let init = function() {};

    let s = new Search(points, euc, nearest, init);
    s.init();
    return s;
}

function euclideanSpace(parent) {

    let margin = {top: 20, right: 10, bottom: 20, left: 10};

    let width = parent.offsetWidth - margin.left - margin.right;
    let height = parent.offsetHeight - margin.top - margin.bottom;
    let svg = d3.select(parent).append("svg")
            .attr("class", "root")
            .attr("width", parent.offsetWidth)
            .attr("height", parent.offsetHeight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let xScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, width]);

    let yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, height]);

    let xAxis = d3.axisBottom(xScale);

    let yAxis = d3.axisRight(yScale);

    let yAxisGrid = yAxis.ticks(20)
        .tickSize(width, 0)
        .tickFormat("");

    let xAxisGrid = xAxis.ticks(20)
        .tickSize(height, 0)
        .tickFormat("");

    svg.append("g")
        .classed('y', true)
        .classed('grid', true)
        .call(yAxisGrid)
        .call(function(l) {
            l.selectAll("line, .domain").classed("gridline", true);
        });

    svg.append("g")
        .classed('x', true)
        .classed('grid', true)
        .call(xAxisGrid)
        .call(function(l) {
            l.selectAll("line, .domain").classed("gridline", true);
        });

    let obj = {
        width: width,
        height: height,
        svg: svg,
        xScale: xScale,
        yScale: yScale
    };

    return obj;

}

function dragPoint() {
    let offsetX = d3.event.dx;
    let offsetY = d3.event.dy;

    let point = d3.select(this);

    let x = Number(point.attr("cx")) + offsetX;
    let y = Number(point.attr("cy")) + offsetY;
    // Horrible hacky margin fudge I don't know how to deal with yet
    maxX = Number(d3.select(".root").attr("width")) - 20;
    maxY = Number(d3.select(".root").attr("height")) - 40;

    x = x <= 0 ? 0 : x;
    x = x > maxX ? maxX : x;
    y = y <= 0 ? 0 : y;
    y = y > maxY ? maxY : y;

    point.attr("cx", x).attr("cy", y);
}
