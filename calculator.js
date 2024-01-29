let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a,b) => {
    if(b == 0) {
        clearCalculator();
        return 'Nice Try!';
    }
    return a/b;
}

let numberOne = '';
let numberTwo = '';
let operator = '';
let result = '';

let operate = (a, b, operator) => {
    switch(operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case 'x': 
            result = multiply(a,b);
            break
        case '/': 
            result = divide(a,b);
            break;
        default:
            return;
    }
}

let clearCalculator = () =>{
    numberOne = numberTwo = operator = '';
}

let display = document.querySelector('.display');

let numbers = document.querySelector('.digits');
numbers.addEventListener('click', e => {
    if(!operator && result){
        numberOne = e.target.innerText;
        result = '';
        display.innerHTML = numberOne;
    } else if(!operator){
        numberOne += e.target.innerText;
        display.innerHTML = numberOne;
    } else {
        numberTwo += e.target.innerText;
        display.innerHTML = numberTwo;
    }
});

let operators = document.querySelector('.operators');
operators.addEventListener('click', e => {
    if(numberOne && numberTwo) {
        operate(Number(numberOne), Number(numberTwo), operator);
        display.innerHTML = numberOne = result;
        numberTwo = '';
    }
    if (numberOne) {
        operator = e.target.innerText;
    }
});
let functions = document.querySelector('.functions');
functions.addEventListener('click', e => {
    if(e.target.innerText == "=" && operator && numberOne && numberTwo) {
        operate(Number(numberOne), Number(numberTwo), operator);
        display.innerHTML = result;
        clearCalculator();
        numberOne = result;
    } else if (e.target.innerText == 'clear') {
        display.innerHTML = result = '';
        clearCalculator();
    }
});