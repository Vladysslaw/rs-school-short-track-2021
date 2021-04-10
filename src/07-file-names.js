/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = names;
  let count = 0;
  arr.forEach((name, index) => {
    for (let i = index; i < arr.length; i++) {
      if (name === arr[i + 1]) {
        count++;
        arr[i + 1] = `${names[i + 1]}(${count})`;
      }
    }
    count = 0;
  });
  return arr;
}

module.exports = renameFiles;
