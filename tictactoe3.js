
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
var arrBoard = [3, 6, 2, 7, 5, 1, 9, 4, 8];
var num = 21;

function boardState (arr, num) {
    let arrBoard = [1, 2];
    while (num >= 1) {
        arrBoard.push([...arr]);
        console.log("arrBoard is", arrBoard);
    }
    return arrBoard;
}
  
console.log("2 arrBoard is", arrBoard);  


// create function to bring in string of game play, 9 piece array
// function importBoard(string[9]) {
//     return string;
// }

// change gameRow to importBoard
a[0][0] = arrBoard[0];
a[0][2] = arrBoard[1];
a[0][4] = arrBoard[2];

a[2][0] = arrBoard[3];
a[2][2] = arrBoard[4];
a[2][4] = arrBoard[5];

a[4][0] = arrBoard[6];
a[4][2] = arrBoard[7];
a[4][4] = arrBoard[8];


console.log("reading the while board array a \n");
// drawing the board 
for (var i in a) 
{
  console.log(a[i].join(""));
}



// copy an array with the spread operator

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line

//       newArr.push([...arr]);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }
