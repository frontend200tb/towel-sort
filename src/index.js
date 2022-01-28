
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined || matrix === '') {
    return [];
  }

  console.log('входная матрица', matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      result.push(matrix[i][columnIdx]);
    }
  }

  console.log('результат', result);

  return result;
}
