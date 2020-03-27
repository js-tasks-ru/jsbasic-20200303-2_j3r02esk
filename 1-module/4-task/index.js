/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let firstWord   =   /XXX/i.test(str);
    let secondWord  =   /1xBet/i.test(str);
    if(firstWord == true || secondWord == true){
        return true;
    }
    else {return false;}

}
