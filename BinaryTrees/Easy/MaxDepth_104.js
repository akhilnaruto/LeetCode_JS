// recursion

var maxDepth = function(root) {
    if(root == null)
       return 0;
    let leftSum =  maxDepth(root.left);
    let rightSum =  maxDepth(root.right);
    return Math.max(leftSum + rightSum) +1;
};
 

// iterative
var maxDepth = function(root) {
    let queue = [];
    if(!root)
      return 0;
    queue.push(root); 
    let depth = 0; 
    while(queue.length){
       let size =  queue.length;
       for (let i = 0; i < size; i++) {
           const currNode = queue.shift();
           if(currNode.left) queue.push(currNode.left);
           if(currNode.right) queue.push(currNode.right);         
       }
       depth++;
    }  
    return depth;
};
