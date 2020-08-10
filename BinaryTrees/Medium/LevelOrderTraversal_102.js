
// recursion
// var levelOrder = function(root) {
//     let answer = [];
//     _helper(root, 0);
//     return answer;
//     function _helper(root, depth){
//         if(!root)
//            return;
//         if(!answer[depth])
//            answer[depth] = [];
//         answer[depth].push(root.val); 
//         if(root.left) _helper(root.left, depth+1);  
//         if(root.right) _helper(root.right, depth+1);  
//     }
// };


var levelOrder = function(root) {
    if(!root)
     return [];
    let queue = [root];
    let answer = [];
    while(queue.length){
        let size =  queue.length;
        let tmp = [];
        for (let index = 0; index < size; index++) {
            const currNode = queue.shift();
            tmp.push(currNode.val);
            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }
        answer.push(tmp);
    }
    return answer;
};
