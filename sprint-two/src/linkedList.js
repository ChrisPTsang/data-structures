var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!list.tail){
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    //delete list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target){
    // Set head to current
    var checkValue = function(node) {
    // Check if node value matches target
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkValue(node.next);
      }
      // If yes, return true
      // If no, check current.next
    // Base case: if current.next === null return false
    };

    //return boolean
    return checkValue(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
