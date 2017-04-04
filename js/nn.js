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
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    const svg = d3.select(parent).append("svg")
        .attr("width", width)
        .attr("height", height);

    const xAxis = d3.scaleLinear().domain([-10, 10]).range(0, width);
    const yAxis = d3.scaleLinear().domain([-10, 10]).range(0, height);

    const populate = function(points) {

        this.svg.selectAll(".point")
            .data(points)
            .enter()
            .append("circle")
            .classed("point", true)
            .attr("cx", function(d) { return this.xAxis(d[0]); })
            .attr("cy", function(d) { return this.yAxis(d[1]); })
            .attr("r", "2px");
    }

    return {
        width: width,
        height: height,
        svg: svg,
        xAxis: xAxis,
        yAxis: yAxis,
        populate: populate
    }
}