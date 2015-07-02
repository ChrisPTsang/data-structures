var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length ++;
};

Queue.prototype.dequeue = function() {
	this.head ++;
	return this.storage[this.head - 1];
};

Queue.prototype.size = function() {
	if (this.length - this.head > 0) {
		return this.length - this.head;
	} else {
    return 0;
  }
};


