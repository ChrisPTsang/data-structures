var BinarySearchTree = function(value){

  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(node) {

    if (node > tree.value) {
        if(!tree.right){
          tree.right = BinarySearchTree(node);
        } else {
          tree.right.insert(node);
        }
    } else if (node < tree.value) {
        if(!tree.left){
          tree.left = BinarySearchTree(node);
        } else {
          tree.left.insert(node);
        }
    }
  };

  tree.contains = function(node) {
    var found = false;

    if(tree.value === node){
      found = true;
    }
    if (node > tree.value) {
      if(tree.right){
        return tree.right.contains(node);
      }
    } else if (node < tree.value) {
      if(tree.left){
        return tree.left.contains(node);
      }
    }
    return found;
  };

  tree.depthFirstLog = function(func) {

    var traverseTree = function(node) {
      if(node){
        func(node.value);
        if(node.left) {
          traverseTree(node.left);
        }
        if(node.right) {
          traverseTree(node.right);
        }
      }
    };

    traverseTree(tree);
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
