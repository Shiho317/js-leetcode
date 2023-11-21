/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i = 0; i < sentences.length; i++){
      const currLength = sentences[i].split(" ").length;
        if(currLength > max) max = currLength;
    }
    return max;
};