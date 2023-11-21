/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const arr = s.split(" ");
    const difference = arr.length -  k;
    if(difference >= 0){
        arr.splice(k, difference);
        return arr.join(" ");
    }else{
        return s;
    }
};