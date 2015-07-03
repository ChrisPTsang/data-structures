var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var searchTree = function(node) {
    if (node.value === target) {
      result = true;
    } else {
      for(var i = 0; i < node.children.length; i++) {
        searchTree(node.children[i]);
      }
      // _.each(node.children, function(child){ 
      //   console.log(searchTree(child));
      //   return searchTree(child);
      // });
    }
    return result;
  };
return searchTree.call(this, this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
