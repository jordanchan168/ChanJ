var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var a = document.getElementById("a");
var b = document.getElementById("b");
var d = document.getElementById("a");

ctx.fillStyle = "lightblue";

var requestID;

var animate = function() {
    window.cancelAnimationFrame(requestID);
    var radius = 0;
    var enlarge = true;
    var drawDot = function() {
	console.log(requestID);
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(250, 250, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	if (radius >= 250) {
	    enlarge = false;
	}
	if (radius <= 0) {
	    enlarge = true;
	}
	if (enlarge) {
	    radius += 1;
	}
	else {
	    radius -= 1;
	}
	requestID = window.requestAnimationFrame(drawDot);
    };
    drawDot();
};

a.addEventListener("click", animate);

var dvd = function() {
    window.cancelAnimationFrame(requestID);
    var myImg = new Image();
    myImg.src = "dvd.jpg";

    var drawImg = function() {
	console.log(requestID);
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.drawImage(myImg, 0, 0);

	requestID = window.requestAnimationFrame(drawImg);
    };
    drawImg();
};

d.addEventListener("click", dvd);

var clear = function() {
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

b.addEventListener("click", clear);

//========================================
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
    ctx.strokeStyle = "black"
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


