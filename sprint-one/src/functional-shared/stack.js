var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  //include properties
  someInstance.storage = {};
  someInstance.length = 0;
  //use _.extend to add methods
  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {};
  //push
  stackMethods.push = function(value) {
  	this.storage[this.length] = value;
  	this.length++;

  };
  //pop
  stackMethods.pop = function() {
  	if (this.length > 0){
  	this.length--;
  	}
  	return this.storage[this.length];
  };

  //size
  stackMethods.size = function() {
  	return this.length;
  };


