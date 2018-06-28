const destination = document.body;

function printAnswer(answer) {
    let div = document.createElement("div");
    div.textContent = answer;
    destination.appendChild(div);
}

//addition, duh.

const add = (x, y) => x + y;
printAnswer(add(2, 4));

//multiplication

const mult = (x, y) => {
    let answer2 = 0;
    
    // for (let i = 0; i < y; i = add(i, 1)) {
    //     answer2 = add(answer2, x)
    // }

    let i = 0;
    while (i < y) {
        answer2 = add(answer2, x);
        i = add(i, 1);
    }

    return answer2;
}
printAnswer(mult(6,8));

//3 cubed or (3 to the third power)

const powa = (x, n) => {
    let answer3 = 1;
    for (let i = 1; i < n; i = add(i, 1)) {
        answer3 = mult(answer3, x)
    }
    return answer3;
}

printAnswer(powa(2, 8));

//factorial of 4
const factorial = (f) => {
    let answer4 = f
    for (let i = f; i >= 2; i = add(i, -1)) {
        answer4 = mult(answer4, add(i, -1));
    }
    return answer4;
}

printAnswer(factorial(4))

//fucking fibonacci sequence
const fib = (e) => {

    let answer5 = 0;
    let numA = 0;
    let numB = 1;

    for (let i = 2; i < e; i = add(i, 1)) {
        result= add(numA, numB);
        numA = numB;
        numB = result;
    }
    
    return answer5;
}
let Answer5 = fib(8);
printAnswer()

// 5. Fibonacci

// Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)Links to an external site. (click me!).
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

// Display the result of calling fibonacci(8), which should be 13:
// 0 1 1 2 3 5 8 [13] 21
// The number in brackets is the 8th fibonacci number.


function fibonacci(e) {
    let result = 0;
    let numA = 0;
    let numB = 1;
    for (let i = 2; i < e; i = add(i, 1)) {
        result= add(numA, numB);
        numA = numB;
        numB = result;
    }
    return result;
}

var qFive = fibonacci(8);
printAnswer("Fibonacci. " + qFive);