var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var b = document.getElementById("b");

ctx.fillStyle = "#ff0000";
//ctx.fillRect(50,50,100,200);

var draw = function() {
    var x = event.clientX - 9;
    var y = event.clientY - 9 - 73;
    ctx.fillRect(x,y,100,200);
};

c.addEventListener("click", draw);

var clear = function() {
    ctx.clearRect(0,0,500,500);
};

b.addEventListener("click", clear);