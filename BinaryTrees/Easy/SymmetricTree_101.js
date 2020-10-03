
// resursion
var isSymmetric = function(root) {
    if(!root)
      return true;
    var helper =  function(leftNode, rightNode){
        if(!leftNode && !rightNode) return true;
        
        if(leftNode == null || rightNode == null) return false; 
        if(leftNode.val !== rightNode.val)  return false;

        return helper(leftNode.left, rightNode.right) && helper(leftNode.right, rightNode.left);
        
    }

    return helper(root.left, root.right);

};

// iterative
var isSymmetric = function(root) {
     if(!root)
        return true;
     let leftNodes = [];
     let rightNodes = [];
     leftNodes.push(root.left);
     rightNodes.push(root.right);
     while(leftNodes.length != 0 || rightNodes.length !=0){
         let leftNode = leftNodes.pop();
         let rightNode =  rightNodes.pop();
         
         if(!leftNode && !rightNode) continue;

         if(leftNode == null || rightNode == null || leftNode.val != rightNode.val)
            return false;

        leftNodes.push(leftNode.left);
        leftNodes.push(leftNode.right);
        
        rightNodes.push(rightNode.right);
        rightNodes.push(rightNode.left);
     }
     return true;

};

// iterative BFS
var isSymmetric = function(root) {
    if(!root)
       return true;
    let leftNodes = [];
    let rightNodes = [];
    leftNodes.push(root.left);
    rightNodes.push(root.right);
    while(leftNodes.length != 0 || rightNodes.length !=0){
        let leftNode = leftNodes.pop();
        let rightNode =  rightNodes.pop();
        
        if(!leftNode && !rightNode) continue;

        if(leftNode == null || rightNode == null || leftNode.val != rightNode.val)
           return false;

       leftNodes.push(leftNode.left);
       leftNodes.push(leftNode.right);
       
       rightNodes.push(rightNode.right);
       rightNodes.push(rightNode.left);
    }
    return true;

};