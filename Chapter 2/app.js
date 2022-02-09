// “Write a loop that makes seven calls to console.log to output the following triangle:”

// for (var result = '#'; result.length<=7; result += '#'){
//     console.log(result);
// }


// fizzbuzz

for (let answer = 1; answer <= 100; answer++) {
    if (answer % 3 === 0 && answer % 5 === 0) {
        console.log('FizzBuzz');
    }
   else if (answer % 3 === 0) {
        console.log('Fizz');
    } 
    else if (answer % 5 === 0) {
        console.log('Buzz');
    } 
    else {
        console.log(answer);
    }
}