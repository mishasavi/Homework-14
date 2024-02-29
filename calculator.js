let result = 0;

let a = prompt('=====Minimalistic calculator 1.0=====\n' +
    'Welcome to the minimalistic calculator, version 1.0! \n' +
    'Please, input the FIRST number', '42');

let action = prompt('=====Minimalistic calculator 1.0=====\n' +
    '\n' +
    'Press 1 for Addition\n' +
    'Press 2 for Subtraction\n' +
    'Press 3 for Multiplication\n' +
    'Press 4 for Division\n' +
    'Press 5 for Remainder\n' +
    'Press 6 for Exponentiation \n', '1');

let b = prompt('=====Minimalistic calculator 1.0=====\n' +
    'Welcome to the minimalistic calculator, version 1.0! \n' +
    'Please, input the SECOND number', '42');


a = +a;
b = +b;
action = +action;

if ((!isNaN(a)) && (!isNaN(b)) && (!isNaN(action)) && !(action === 4 && b === 0) && (action > 0 && action < 7 && Number.isInteger(action))) {
    result = calculate(a, b, action);
    alert('=====Minimalistic calculator 1.0=====\n' +
        '\n' +
        `The result = ${result}` +
        '\n' +
        'Thank you for using our humble services!')
} else {
    alert('Please check you inputs!')
}


function calculate(x, y, z) {
    switch (z) {
        case 1:
            return (x + y);
        case 2:
            return (x - y);
        case 3:
            return (x * y);
        case 4:
            return (x / y);
        case 5:
            return (x % y);
        case 6:
            return (x ** y);
        default:
            break;
    }
}
