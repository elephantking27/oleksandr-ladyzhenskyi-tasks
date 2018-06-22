/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [...Array(n)].map(i => [...Array(n).fill(0)]);
  result[0][0] = 1;

  for (let i = 2, x = 0, y = 0; i <= Math.pow(n, 2);) {
    while (y + 1 < n && result[x][y + 1] == 0) result[x][++y] = i++;
    while (x + 1 < n && result[x + 1][y] == 0) result[++x][y] = i++;
    while (y - 1 > -1 && result[x][y - 1] == 0) result[x][--y] = i++;
    while (x - 1 > -1 && result[x - 1][y] == 0) result[--x][y] = i++;
  }

  return result;
}

export default fillSpiralMatrix;
