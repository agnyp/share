/**
 * This functions is able to determine very robustly if a given
 * string is a number, or not
 */
function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
}
