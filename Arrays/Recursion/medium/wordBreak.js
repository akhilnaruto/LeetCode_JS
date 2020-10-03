/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var createMap = function(wordDict){
    var map = new Map();
    [...wordDict].forEach(word => map.set(word, word));
    return map;
}

var wordBreak = function(s, wordDict) {
    var map = createMap(wordDict);
    return word_break(s, map, 0);

};

var word_break = function(s, map, start){
    if(start === s.length)
       return true;
    for (let end = start; end <= s.length; end++) {
        const wordTillNow = s.substring(start, end);
        console.log('word till now is '+ wordTillNow);
        const wordTillNowExistsInMap = map.has(wordTillNow);  
        if(!wordTillNowExistsInMap)
           continue;
        console.log('found the word '+ wordTillNow);   
        const result = word_break(s, map, end);   
        return result;
     }  
    return false;
}
console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']));

//console.log(wordBreak('leetcode', ['leet', 'code']));


// for (let end = start; end <= s.length; end++) {
//     const wordTillNow = s.substring(start, end);
//     console.log('word till now is '+ wordTillNow);
//     if (map.has(s.substring(start, end)) && word_break(s, map, end)) {
//        return true;
//     }
//  }   

 for (let end = start; end <= s.length; end++) {
    const wordTillNow = s.substring(start, end);
    console.log('word till now is '+ wordTillNow);
    const wordTillNowExistsInMap = map.has(wordTillNow);  
    if(!wordTillNowExistsInMap)
       continue;
    console.log('found the word '+ wordTillNow);   
    const result = word_break(s, map, end);   
    return result;
 }   