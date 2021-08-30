// In this exercise I will practice while /do while / for loops to better recall understanding

// Write a loop that makes seven calls to console.log to output a triangle


// using while loop
console.log('This program is using the while loop')
let a ='x'
let b = 1
let c = 'x'

while (b < 8) {
    console.log(a)
    a = a + c
    b++
}

// using for loop
console.log('This program is using the for loop')
let d = ''
for (let e = 0; e < 7; e++){
    d = d + 'x'
    console.log(d)
}

// Creating a loop that runs as long as 'i' is less than 10

let i = 0

while (i < 10) {
    i++
    console.log('This code is running')
}

/* Write a program that uses console.log to print all the number from 1-100 with two exceptions. 
For numbers divisible by 3 print Fizz instead of a number, and for numbers divisible by 5 (and 
not 3) print Buzz.

When you have that working modify your program to print Fizzbuzz for numbers that are divisible 
by both 3 & 5( and still print Fizz or Buzz for number divisible by only on of those)

This is a interview question

*/

console.log('Print 1 to 100 Challenge')

/*

Break question into parts:

1. create program to print 1-100
2. create 2 exceptions
    a. 1st exception:
    - number divisible by 3 print Fizz
    b. 2nd exception:
    - number divisible by 5 print Buzz
3. create a 3rd exception
    a. in addition also print FizzBuzz if number is divisible by BOTH 3 & 5
*/

// My solution...

for (y = 1; y <= 100; y++){
    if (y % 3 === 0 && y % 5 === 0){
        console.log('FizzBuzz')
    }else if (y % 3 === 0){
        console.log('Fizz')
    }else if (y % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(y)
    }
}

// Alternative solution using !() -----NEED TO REVIEW THIS SYNTAX (altered starting points)

for (i=101; i<=200; i++) {
    if ( !(i%5) && !(i%3) ) {
        console.log('FizzBuzz');
    } else if ( !(i%5) && (i%3)) {
        console.log('Buzz');
    } else if ( !(i%3) ) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}