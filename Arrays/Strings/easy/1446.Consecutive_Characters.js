var maxPower = function(s) {
    let prev;
    let curr;
    let max = 0;
    let localMax = 1;
    if(s.length == 1)
       return 1;
    for(let i=1; i< s.length; i++){
        prev = s.charAt(i-1);
        curr = s.charAt(i);
        if(curr === prev){
            console.log(`curr: ${curr} prev: ${prev}`);
            localMax = localMax + 1
             max = Math.max(max, localMax);
             
        }else{
            localMax = 1;
        }
        
    }
    return Math.max(localMax, max);
};
