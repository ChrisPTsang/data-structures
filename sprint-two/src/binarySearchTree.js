var BinarySearchTree = function(value){

  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    if (value < tree.value) {
      if (!tree.left) {
        tree.left = BinarySearchTree(value);
      } else {
        tree.left.insert(value);
      }
    } else {
      if (!tree.right) {
        tree.right = BinarySearchTree(value);
      } else {
        tree.right.insert(value);
      }
    }

  };

  tree.contains = function(target) {
    var found = false;
    if (tree.value === target) {
      found = true;
    } else if (target < tree.value) {
      if (tree.left) {
        return tree.left.contains(target);
      } 
    } else if (target > tree.value) {
      if (tree.right) {
        return tree.right.contains(target);
      }
    }
    console.log('' + target + found);
    return found;
  };

  tree.depthFirstLog = function(iterator) {
    var iterateTree = function(node) {
      iterator(node.value);
      if (node.left) {
        iterateTree(node.left);
      } 
      if (node.right) {
        iterateTree(node.right);
      } 
    };
  iterateTree(tree);

  };

  return tree;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
