var pic = document.getElementById("vimage");
var b = document.getElementById("b");
var c = document.getElementById("c");

var clear = function() {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
}

c.addEventListener("click", clear);

var mkCircle = function(x,y,r,fill,dirX,dirY) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute("dirX", dirX);
	c.setAttribute("dirY", dirY);
    c.setAttribute("fill", fill);
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    c.addEventListener("click", function(event){
        event.stopPropagation();
        if (c.getAttribute("fill") == "green"){
            pic.removeChild(c);
            newX = Math.random() * 460 + 20;
            newY = Math.random() * 460 + 20;
            mkCircle(newX, newY, r, "purple", 1, 1);
        }
        if (c.getAttribute("fill") == "purple"){
            c.setAttribute("fill", "green");
        }
    });
};

var drawCircle = function() {
    var x = event.clientX - 10;
    var y = event.clientY - 10;
    mkCircle(x,y,20,"purple",1,1);
};

pic.addEventListener("click", drawCircle);

var intervalID

var move = function() {
    window.clearInterval(intervalID);
    for (var i = 0; i < pic.children.length; i++) {
        var c = pic.children[i];
		var x = parseInt(c.getAttribute("cx"));
		var y = parseInt(c.getAttribute("cy"));
		var r = parseInt(c.getAttribute("r"));
		// check radius
		if (r <= 2) {
			pic.removeChild(c);
		}
		// check if on the line
		if (y == 250) {
			r = r/2;
			c.setAttribute("r", r);
			fill = c.getAttribute("fill");
			dirX = -1 * c.getAttribute("dirX");
			dirY = -1 * c.getAttribute("dirY");
			mkCircle((x + dirX), (y + dirY), r, fill, dirX, dirY);
		}
		// check xcor
		if (x <= r) {
            c.setAttribute("dirX", 1);
        }
		if (x >= (500 - r)) {
            c.setAttribute("dirX", -1);
        }
		newX = x + parseInt(c.getAttribute("dirX"));
		c.setAttribute("cx", newX);
		// check ycor
		if (y <= r) {
            c.setAttribute("dirY", 1);
        }
        if (y >= (500 - r)) {
            c.setAttribute("dirY", -1);
        }
		newY = parseInt(c.getAttribute("dirY")) + y;
		c.setAttribute("cy", newY);
    }
    intervalID = window.setInterval(move, 16);
};

b.addEventListener("click", move);

// //=============================================

// var intervalID

// var animate = function() {
    // stop();
    // clear();
    // var c = mkCircle();
    // pic.appendChild(c);
    // var enlarge = true;
    // var radius = 0;
    // var drawDot = function() {
        // c.setAttribute("r", radius.toString());
        // pic.appendChild(c);
        // if (radius == 0) {
            // enlarge = true;
        // }
        // if (radius == 250) {
            // enlarge = false;
        // }
        // if (enlarge) {
            // radius += 1;
        // }
        // else {
            // radius -= 1;
        // }
    // };
    // intervalID = window.setInterval(drawDot, 16);
// };

// //pic.addEventListener("click", animate);

// var stop = function() {
    // window.clearInterval(intervalID);
// }

// //b.addEventListener("click", stop);


// //=============================================
// firstDot = true;
// prevX = "0";
// prevY = "0";
// var connectDots = function() {
    // // get x, y cor
    // var x = (event.clientX - 10).toString();
    // var y = (event.clientY - 10).toString();
    // // draw line
    // if (!firstDot) {
        // var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
        // l.setAttribute("x1", prevX);
        // l.setAttribute("y1", prevY);
        // l.setAttribute("x2", x);
        // l.setAttribute("y2", y);
        // l.setAttribute("stroke", "black");
        // pic.appendChild(l);
    // // redraw prev circle
        // var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        // c2.setAttribute("cx", prevX);
        // c2.setAttribute("cy", prevY);
        // c2.setAttribute("r", "10");
        // c2.setAttribute("fill", "red");
        // c2.setAttribute("stroke", "black");
        // pic.appendChild(c2);
    // }
    // // draw circle
    // var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // c.setAttribute("cx", x);
    // c.setAttribute("cy", y);
    // c.setAttribute("r", "10");
    // c.setAttribute("fill", "red");
    // c.setAttribute("stroke", "black");
    // pic.appendChild(c);
    // // update vars
    // firstDot = false;
    // prevX = x;
    // prevY = y;
// }
// //pic.addEventListener("click", draw);
