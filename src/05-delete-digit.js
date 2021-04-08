/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const n1 = n.toString().split('');
  let digits = [];
  n1.forEach((item) => {
    digits.push(+item);
  });
  const copy = [];
  digits.forEach((item) => {
    copy.push(item);
  });
  const finalArr = [];
  digits.forEach((item, index) => {
    digits = [];
    copy.forEach((item1) => {
      digits.push(item1);
    });
    digits.splice(index, 1);
    const int = +digits.join('');
    finalArr.push(int);
  });
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  return getMaxOfArray(finalArr);
}

module.exports = deleteDigit;
