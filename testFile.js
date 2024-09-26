/**
 * @description Takes two parameters, `a` and `b`, and returns their sum.
 *
 * @param {number} a - Used as one of the operands for addition.
 *
 * @param {number} b - Added to `a` to calculate the result.
 *
 * @returns {number} The sum of two numbers.
 */

function addNumbers(a, b) {
    return a + b;
}

const num1 = 5;
const num2 = 10;
console.log(`Sum of ${num1} and ${num2} is: `, addNumbers(num1, num2));
