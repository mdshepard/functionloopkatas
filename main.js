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
    for (let i = 0; i < y; i++) {
        answer2 = add(answer2, x)
    }
    return answer2;
}
printAnswer(mult(6,8));

//3 cubed or (3 to the third power)

const powa = (x, n) => {
    let answer3 = 1;
    for (let i =1; i < n; i++) {
        answer3 = mult(answer3, x)
    }
    return answer3;
}

printAnswer(powa(2, 8));

//factorial of 4
const factorial = (f) => {
    let answer4 = f
    for (i = f; i >= 2; i--) {
        answer4 = mult(answer4, i - 1);
    }
    return answer4;
}

printAnswer(factorial(4))

//fucking fibonacci sequence
//const fib