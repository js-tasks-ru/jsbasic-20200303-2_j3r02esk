/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    if ('John' in salaries && 'Ann' in salaries && 'Pete' in salaries) {
        return salaries.John+salaries.Ann+salaries.Pete;
    }
    else { return 0; }
}
