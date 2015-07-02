var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create object w/prototype of queueMethods
  var someInstance = Object.create(queueMethods);
  //add storage object
  someInstance.storage = {};
  //add length
  someInstance.length = 0;
  //add head
  someInstance.head = 0;

  //return instance
  return someInstance;
};

var queueMethods = {};

// enqueue
queueMethods.enqueue = function(value){
	this.storage[this.length] = value;
	this.length++;
};
// dequeue
queueMethods.dequeue = function(){
	this.head++;
	return this.storage[this.head - 1];
};
// size
queueMethods.size = function(){
	if (this.length - this.head > 0) {
		return this.length - this.head;
	} else {
		return 0;
	}
};


