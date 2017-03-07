var pic = document.getElementById("vimage");
var b = document.getElementById("b");

var clear = function() {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
}

var mkCircle = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", "0");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    return c;
};

var intervalID

var animate = function() {
    stop();
    clear();
    var c = mkCircle();
    pic.appendChild(c);
    var enlarge = true;
    var radius = 0;
    var drawDot = function() {
        c.setAttribute("r", radius.toString());
        pic.appendChild(c);
        if (radius == 0) {
            enlarge = true;
        }
        if (radius == 250) {
            enlarge = false;
        }
        if (enlarge) {
            radius += 1;
        }
        else {
            radius -= 1;
        }
    };
    intervalID = window.setInterval(drawDot, 16);
};

pic.addEventListener("click", animate);

var stop = function() {
    window.clearInterval(intervalID);
}

b.addEventListener("click", stop);


//=============================================
firstDot = true;
prevX = "0";
prevY = "0";
var draw = function() {
    // get x, y cor
    var x = (event.clientX - 10).toString();
    var y = (event.clientY - 10).toString();
    // draw line
    if (!firstDot) {
        var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
        l.setAttribute("x1", prevX);
        l.setAttribute("y1", prevY);
        l.setAttribute("x2", x);
        l.setAttribute("y2", y);
        l.setAttribute("stroke", "black");
        pic.appendChild(l);
    // redraw prev circle
        var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c2.setAttribute("cx", prevX);
        c2.setAttribute("cy", prevY);
        c2.setAttribute("r", "10");
        c2.setAttribute("fill", "red");
        c2.setAttribute("stroke", "black");
        pic.appendChild(c2);
    }
    // draw circle
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    // update vars
    firstDot = false;
    prevX = x;
    prevY = y;
}
//pic.addEventListener("click", draw);
