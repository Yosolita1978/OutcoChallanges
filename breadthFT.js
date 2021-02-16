// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
  if (arr.length === 0) { return null; }
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for(let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}


/**
 *
 * Deserialize operates by building out the tree in a breadth-first
 * manner. One only needs to build down to the lowest row where there
 * exists nodes. For example, in this tree,
 *
 *          1
 *            \
 *              3
 *   				  /
 *   				 2
 *
 * The array that you would pass in to the deserialize function would
 * be [1,null,3,2,null]. The first null represents the left child of
 * the 1 node, and the second null represents the right child of the 3 node.
 *
 *  1. Here, we have built out the following tree using deserialize:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */


 // DO NOT EDIT
const arr = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];

const sampleRoot = deserialize(arr);


function breadthFirstTraversal(root) {
  const queue = [];
  queue.push(root);
  let curr;
  const result = [];

  while (queue.length > 0) {
    curr = queue.shift();

    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }

    result.push(curr.value);
  }

  return result;
}


console.log(breadthFirstTraversal(sampleRoot));
