var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.head = 0;
  // Use extend
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length ++;
};

queueMethods.dequeue = function() {
  this.head ++;
  return this.storage[this.head-1];
};

queueMethods.size = function() {
	if(this.length - this.head > 0){
	  return (this.length - this.head);	
	} else {
    return 0;
  }
};

