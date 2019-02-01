
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


// this is the board in a multidimensional array
var a = [["X", vbar, "X", vbar, "X"], 
    [dash, plus, dash, plus, dash], 
    ["X", vbar, "X", vbar, "X"], 
    [dash, plus, dash, plus, dash], 
    ["X", vbar, "X", vbar, "X"]];

// this array is data that the code below loads into the board
var gameRaw = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
// // this puts the values from gameRow array into the board
// a[0][0] = gameRaw[0];
// a[0][2] = gameRaw[1];
// a[0][4] = gameRaw[2];

// a[2][0] = gameRaw[3];
// a[2][2] = gameRaw[4];
// a[2][4] = gameRaw[5];

// a[4][0] = gameRaw[6];
// a[4][2] = gameRaw[7];
// a[4][4] = gameRaw[8];
// var string = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function importBoard(string[9]) {
    return string;
}

// change gameRow to importBoard
a[0][0] = string[0];
a[0][2] = string[1];
a[0][4] = string[2];

a[2][0] = string[3];
a[2][2] = string[4];
a[2][4] = string[5];

a[4][0] = string[6];
a[4][2] = string[7];
a[4][4] = string[8];


console.log("reading array a \n");
// drawing the board 
for (var i in a) 
{
  console.log(a[i].join(""));
}


