/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const list = [];
    //char to num
    const col1 = s.charCodeAt(0);
    const col2 = s.charCodeAt(3);
    
    const row1 = s[1];
    const row2 = s[4];
    
    for(let i = col1; i <= col2; i++){
        for(let j = row1; j <= row2; j++){
            //num to char and add cells to a list
            const cell = String.fromCharCode(i) + j;
            list.push(cell);
        }
    }
    return list;
};