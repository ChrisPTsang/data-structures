var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //extra credit
  list.addToHead = function(value) {
    var temp = list.head;

    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.head.previous = Node(value);
      list.head = list.head.previous;
      list.head.previous = null;
      list.head.next = temp;
    }
  };

  list.addToTail = function(value) {
    var temp = list.tail;

    if (!list.tail) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      list.head.previous = null;
      list.tail.previous = temp;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    //delete list.head;
    list.head = list.head.next;
    return temp.value;
  };

  //extra credit
  list.removeTail = function() {
    console.log(list.tail);
    var temp = list.tail;
    //delete list.head;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return temp.value;
  };

  list.contains = function(target) {
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

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;  //added previous pointer for extra credit

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */