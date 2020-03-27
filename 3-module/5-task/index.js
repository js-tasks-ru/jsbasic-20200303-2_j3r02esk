/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
    const elem = arr.filter(el => a <= el && el <= b)
    return elem;
}