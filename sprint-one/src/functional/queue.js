var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length ++;
  };

  someInstance.dequeue = function(){
    var result = storage[head];
    delete storage[head];
    head ++;
    return result;
  };

  someInstance.size = function(){
    if (length-head >= 0){
      return length-head;
    } else {
      return 0;
    }
  };
  return someInstance;
};
