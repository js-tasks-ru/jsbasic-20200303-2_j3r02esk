/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(schedule) {
    for (let prop in schedule) {return false;}
    return true;
}
