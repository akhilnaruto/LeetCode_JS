// O(n2) solution
var findPairs = function(nums, k) {
    nums = nums.sort();
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1])
            continue;

        const firstNum = nums[i];
        let j = i+1;
        for (; j < nums.length; j++) {
            if(nums[j] === nums[j+1])
               continue;
            const secondNum = nums[j];
            if((Math.abs(secondNum - firstNum)) === k) result++;
        } 
    }
    return result;
};



// two pointer solution
var findPairs = function(nums, k) {
    nums = nums.sort();
    
    return result;
};

findPairs([0,0,0], 0);


