/**
 * This functions is able to determine very robustly if a given
 * string is a number, or not
 * For a very detailed explanation and exhausting tests go to 
 * 
 * http://dl.dropbox.com/u/35146/js/tests/isNumber.html (where I found it)
 */
function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
}
