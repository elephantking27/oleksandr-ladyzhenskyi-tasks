/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */

function haveSameItems(arr1, arr2) {
  return arr1.length === arr2.length && [...arr1].every(i => arr2.includes(i));
}
/*
function haveSameItems(arr1, arr2) {
  const summaries = [...arguments].map(arr => arr.reduce((previous, current) => previous += current, 0)); // проходит тесты, хоть и неправильный
  if (summaries[0] === summaries[1]) {
    return true;
  }
  return false;
}
*/

export default haveSameItems;
