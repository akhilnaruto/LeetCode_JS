/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal_iterative = function(root) {
    let answer = [];
    let stack =  [];
    if(!root)
       return answer;
    stack.push(root);
    while(stack.length){
        let node =  stack.pop();
        answer.push(node.val);
        if(node.right)  
          stack.push(node.right);  
        // push the left node last so that it will be picked up first
        if(node.left)
          stack.push(node.left);
      
    }
    return answer;

};

var preorderTraversal =  function(root){
    let answer = [];
    if(!root)
       return answer;
    
    preOrderTraverse(root, answer);
    return answer;   
}

var preOrderTraverse =  function(node, answer){
    if(!node)
       return;
    
    answer.push(node.val);
    preOrderTraverse(node.left, answer);
    preOrderTraverse(node.right, answer);   
}