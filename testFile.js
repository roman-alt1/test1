/**
 * @description Takes two arguments, `a` and `b`, and returns the sum of these two numbers.
 *
 * @param {number} a - A required input value to be added to `b`.
 *
 * @param {number} b - Added to the `a` parameter.
 *
 * @returns {number} The sum of two numbers.
 */

function addNumbers(a, b) {
    return a + b;
}

const num1 = 5;
const num2 = 10;
console.log(`Sum of ${num1} and ${num2} is: `, addNumbers(num1, num2));
