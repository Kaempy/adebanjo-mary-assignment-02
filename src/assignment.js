// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {

    let totalSum = 0;
    for (const index of arrayOfNumbers) {
        totalSum += index
    }
    return totalSum

    // let initialValue  = 0 
    // const sum = arrayOfNumbers.reduce(
    //     (prevValue, currentValue) => prevValue + currentValue,
    //     initialValue
    // );
    // return sum;
}
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 *
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

function countEvenNumbers(arrayOfNumbers) {

    // let newArrayOfNumbers = [];
    // for (let index = 0; index <= arrayOfNumbers.length; index++) {
    //     if (arrayOfNumbers[index] % 2 === 0) {
    //         newArrayOfNumbers.push(arrayOfNumbers[index]);
    //     }
    // }
    // console.log(newArrayOfNumbers);
    // return newArrayOfNumbers.length;
    
    let newArrayOfNumbers = arrayOfNumbers.filter((number) => {
        let counter = 0;
        if (number % 2 === 0) {
            counter++;
            return counter;
        }
    });
    console.log(newArrayOfNumbers);
    return newArrayOfNumbers.length;
}
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {

    // let temperatureInFarenheit = []
    // arrayOfNumbers.forEach((temperatureInCelsius) => {
    //     let toFarenheit = temperatureInCelsius * (9 / 5) + 32;
    //      array.push(Math.trunc(toFarenheit));
    // });
    // return temperatureInFarenheit;

    let temperatureInFarenheit = arrayOfNumbers.map((temperatureInCelsius) => {
        let toFarenheit = temperatureInCelsius * (9 / 5) + 32;
        return Math.trunc(toFarenheit);
    });
    return temperatureInFarenheit;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
