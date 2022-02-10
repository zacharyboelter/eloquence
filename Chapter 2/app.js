// “Write a loop that makes seven calls to console.log to output the following triangle:”

// for (var result = '#'; result.length<=7; result += '#'){
//     console.log(result);
// }


// fizzbuzz

// for (let answer = 1; answer <= 100; answer++) {
//     if (answer % 3 === 0 && answer % 5 === 0) {
//         console.log('FizzBuzz');
//     }
//    else if (answer % 3 === 0) {
//         console.log('Fizz');
//     } 
//     else if (answer % 5 === 0) {
//         console.log('Buzz');
//     } 
//     else {
//         console.log(answer);
//     }
// }

// var size = 8; //this is the variable setting

// var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

// for (let y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
//     for (let x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
//         if ((x + y) % 2 == 0)
//             board += " ";
//         else
//             board += "#";
//     }
//     board += "\n";
// }

// console.log(board);


// RECURSIVE FUNCTIONS

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

// Math.min

// function min(x, y) {
//     if (x < y){
//       return x;
//     } else{
//       return y;
//     }
//   }


// RECURSIVE ODDS AND EVENS

// function odd_evenNum(num) {
//     if (num === 0) {
//         return (`${num} is even`);
//     } else if (num === 1) {
//         return (`${num} is odd`);
//     } else {
//         num = num - 2;
//         return odd_evenNum(num);
//     }
// }

// const even_oddNum = num => num % 2 === 0 ? "even" : "odd";

function isEven(n) {
    if (n === 0) {
        return 'True';
    } else if (n === 1) {
        return 'False'
    } else {
        n = (n - 2);
        return isEven(n);
    }
}