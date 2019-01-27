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
var board = new Array(30);

var one = space + space + space + vbar
var two = dash + dash + dash + plus

process.stdout.write(two + "\n");

process.stdout.write(vbar + space + plus + space + dash + "\n" + "\n");

process.stdout.write(space + vbar);
process.stdout.write(space + vbar);
process.stdout.write(space + "\n");

process.stdout.write(dash + plus);
process.stdout.write(dash + plus);
process.stdout.write(dash + "\n");

process.stdout.write(space + vbar);
process.stdout.write(space + vbar);
process.stdout.write(space + "\n");

process.stdout.write(dash + plus);
process.stdout.write(dash + plus);
process.stdout.write(dash + "\n");

process.stdout.write(space + vbar);
process.stdout.write("X" + vbar);
process.stdout.write(space + "\n");



process.stdout.write("\n" + "\n" + space + vbar + space + vbar + space + "\n");
process.stdout.write(dash + plus + dash + plus + dash + "\n");
process.stdout.write(space + vbar + space + vbar + space + "\n");
process.stdout.write(dash + plus + dash + plus + dash + "\n");
process.stdout.write(space + vbar + space + vbar + space + "\n" + "\n" + "\n");



   
// var B = [" ", "|", " ", "|", " ", "\n"];
board[1] = vbar;
board[3] = vbar;
board[2] = plus;

// console.log(B);
// process.stdout.write(board);
// B.toString();
// process.stdout.write(B);


var a = [[space, vbar, space, vbar, space], [dash, plus, dash, plus, dash], [space, vbar, space, vbar, space], [dash, plus, dash, plus, dash], [space, vbar, space, vbar, space]];

// process.stdout.write(a);

 
for (var i in a) 
{
  console.log(a[i].join(""));
};

a.forEach(function(item, index, array) {
  console.log(item, index);
});









