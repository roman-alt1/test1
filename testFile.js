/**
 * @description Accepts two parameters, `a` and `b`, and returns their sum. It is a
 * basic arithmetic operation that combines two numbers.
 *
 * @param {number} a - Used as one of the numbers to be added together.
 *
 * @param {number} b - Used in the calculation of the sum.
 *
 * @returns {number} The sum of the two input values.
 */

function addNumbers(a, b) {
    return a + b;
}

const num1 = 5;
const num2 = 10;
console.log(`Sum of ${num1} and ${num2} is: `, addNumbers(num1, num2));
