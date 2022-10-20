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
function sumToOneDigit(num, sum=0) {
    console.log(num);
    if ((num%10) === 0){
      sum = sum + (num/10);
      return sum;
    }
    sum += num%10;
    console.log(sum)
    return sumToOneDigit(num-sum, sum)
}
console.log(sumToOneDigit(num3))
