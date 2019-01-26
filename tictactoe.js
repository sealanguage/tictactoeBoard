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
var A = new Array(30);
var B = new Array(10);
var one = space + space + space + vbar
var two = dash + dash + dash + plus

process.stdout.write(vbar + space + plus + space + dash +"\n");
process.stdout.write(A +"\n");
   
for(k = 0; k < 3; k++) {   
    for(i = 0; i < 3; i++) {
            process.stdout.write(one);
            
        }
        process.stdout.write("\n");
    
    for (j = 0; j < 3; j++) {
            process.stdout.write(two);
        }
         process.stdout.write("\n");
        
}
