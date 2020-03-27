/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */


function factorial(n) {
    if(n == 0 || n == 1) {
        var f = 1;
    } else {
        var f = parseInt(n);
        for(var i = 1; i < n; i++) {
            f *= i;
        }
    }
    return f;
}

