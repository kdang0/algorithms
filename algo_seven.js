const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    console.log(num);
    if ((num%10) === 0 && (num/10 < 10)){
      return num/10;
    } else if((num%10) === 0){
        num = num/10;
    }
    sum = num%10;
    sum += sumToOneDigit(num-sum);
    return sum;
}
console.log(sumToOneDigit(12345678910))
