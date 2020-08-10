var postorderTraversal = function(root) {
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
         // reached end of left leaf, pop and add it
         curr =  stack[stack.length-1];
         if(curr.right)
           stack.push(curr.right);
         else{
            curr =  stack.pop();
            answer.push(curr.val);  
            curr = null;
         }
          

     }   
};

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

postorderTraversal(n1);