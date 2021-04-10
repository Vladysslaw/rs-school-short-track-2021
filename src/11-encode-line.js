/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let sym = arr[0];
  let count = 0;
  let finalArr = [];
  arr.forEach((item) => {
    if (sym === item) {
      count++;
    } else {
      if (count > 1) {
        finalArr.push(count);
      }
      finalArr.push(sym);
      count = 1;
      sym = item;
    }
  });
  if (count > 1) {
    finalArr.push(count);
  }
  finalArr.push(sym);
  finalArr = finalArr.join('');
  return finalArr;
}

module.exports = encodeLine;
