// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix && matrix.length > 0) {
    return matrix.map((el, index) => (index % 2 === 1 ? el.reverse() : el)).flat(Infinity)
  } else {
    return []
  }
};
