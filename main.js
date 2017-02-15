var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var b = document.getElementById("b");

ctx.fillStyle = "#ff0000";
//ctx.fillRect(50, 50, 100, 200);

var drawRect = function() {
    var x = event.clientX - 9;
    var y = event.clientY - 9 - 73;
    ctx.fillRect(x, y, 100, 200);
};


firstDot = true;

var drawDots = function() {
    var x = event.clientX - 9;
    var y = event.clientY - 9 - 73;
    if (firstDot) {
        prevX = x;
	prevY = y;
        firstDot = false;
    };

    //draw lines
    ctx.beginPath();
    ctx.strokeStyle = "#000000"
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();

    //draw current dot
    //redraw prev dot to cover up the line
    ctx.beginPath();
    ctx.arc(prevX, prevY, 10, 0, 2*Math.PI);
    ctx.arc(x, y, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();

    prevX = x;
    prevY = y;

};

c.addEventListener("click", drawDots);

var clear = function() {
    ctx.clearRect(0, 0, 500, 500);
    firstDot = true;
};

b.addEventListener("click", clear);
