var inorderTraversal_Iterative = function(root) {
    let answer = [];
    if(!root)
       return answer;

    let stack = [];
    let curr =  root;
    while(stack.length || curr){
         while(curr){
            stack.push(curr);
            curr =  curr.left;
         }
         // reached left leaf node , pop out;
         curr =  stack.pop();
         answer.push(curr.val);
         // pop out root of left and add to answer
         curr =  curr.right;
         console.log('answer is' + JSON.stringify(answer));
    }   
    return answer;
};

var inorderTraversal = function(root) {
    let answer = [];
    if(!root)
       return answer;
     
    inOrderTraverse(root, answer);   
    return answer;
    
};

function inOrderTraverse(node, answer){
     if(node == null)
        return;
     inOrderTraverse(node.left, answer);
     answer.push(node.val); 
     inOrderTraverse(node.right, answer);
}


function TreeNode(val, left, right){
    this.val = val;
    this.left = left;
    this.right =  right;
}

let n5 =  new TreeNode(5, undefined, undefined);
let n4 =  new TreeNode(4, undefined, undefined);

let n2 =  new TreeNode(2, n4, n5);


let n6 =  new TreeNode(6, undefined, undefined);
let n7 =  new TreeNode(7, undefined, undefined);

let n3 =  new TreeNode(3, n6, n7);

let n1 =  new TreeNode(1, n2, n3);

inorderTraversal(n1);