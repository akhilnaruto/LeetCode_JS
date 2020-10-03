/*
Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"


*/

// version 1
var largestNumber = function(nums) {
    var compare =  function(a, b){
        console.log(`a+b is ${(a+b)} and b+a is ${b+a}`);
        return Number(a+b) > Number(b+a) ? -1 : 1;
    }
    nums = nums.map(x => x+'');
    nums.sort(compare);
    let answer = '';
    nums.forEach(element => {
        answer = answer + element;
        console.log('answer is '+answer);
    });

    return answer.charAt(0) === '0' ? '0' : answer;

};


// version 2, i think i can reduce one loop, can convert to string in compare funciton itself

var largestNumber = function(nums) {
    var compare =  function(a, b){
        a = a +'';
        b = b+ '';
        console.log(`a+b is ${(a+b)} and b+a is ${b+a}`);
        return Number(a+b) > Number(b+a) ? -1 : 1;
    }
    nums.sort(compare);
    let answer = '';
    nums.forEach(element => {
        answer = answer + element;
        console.log('answer is '+answer);
    });

    return answer.charAt(0) === '0' ? '0' : answer;

};

largestNumber([3,30,34,5,9]);

// most voted answer

var largestNumber =  function(nums){
    var ans  = nums.sort(function(a, b){
        return (b+''+a) - (a + ''+ b);
    })
    ans =  ans.join('');
    ans =  ans.replace(/)
}
