/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  const arr2 = [];
  arr.forEach((item, index) => {
    if (item !== -1) {
      arr2.push(item);
    } else {
      indexes.push(index);
    }
  });
  function min (a, b) {
    return a - b;
  }
  arr2.sort(min);

  const finalArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (indexes.indexOf(i) === -1) {
      finalArr.push(arr2[count]);
      count++;
    } else {
      finalArr.push(-1);
    }
  }
  return finalArr;
}

module.exports = sortByHeight;
