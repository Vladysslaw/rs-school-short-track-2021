/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum (matrix) {
  let zeros = [];
  let sum = 0;
  matrix.forEach((arr, indexArr) => {
    arr.forEach((int, indexInt) => {
      if (int === 0) {
        zeros.push(indexInt);
      }
    });
    if (indexArr + 1 < matrix.length) {
      matrix[indexArr + 1].forEach((item, indexItem) => {
        if (zeros.indexOf(indexItem) === -1) {
          sum += item;
        }
      });
    }
    zeros = [];
  });
  matrix[0].forEach((int) => {
    sum += int;
  });
  return sum;
}

module.exports = getMatrixElementsSum;
