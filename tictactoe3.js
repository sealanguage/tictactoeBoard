// console.log(String.fromCharCode(8212));
// console.log(String.fromCharCode(43));
// console.log(String.fromCharCode(124));


// var space = (String.fromCharCode(32));
var i = i;
var j = j;
var k = k;
var space = " ";
var vbar = "|";
var plus = "+";
var dash = "-";

console.log("hard coded tictactoe board");
process.stdout.write("\n" + "\n" + space + vbar + space + vbar + space + "\n");
process.stdout.write(dash + plus + dash + plus + dash + "\n");
process.stdout.write(space + vbar + space + vbar + space + "\n");
process.stdout.write(dash + plus + dash + plus + dash + "\n");
process.stdout.write(space + vbar + space + vbar + space + "\n" + "\n" + "\n");



var a = [["X", vbar, "X", vbar, "X"], 
    [dash, plus, dash, plus, dash], 
    ["X", vbar, "X", vbar, "X"], 
    [dash, plus, dash, plus, dash], 
    ["X", vbar, "X", vbar, "X"]];
    
var gameRaw = [9];
    

console.log("reading array a \n");
 
for (var i in a) 
{
  console.log(a[i].join(""));
}


