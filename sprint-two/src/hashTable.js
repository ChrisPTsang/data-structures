var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage.each(function(value, index, collection) {
  //   collection[index] = [];
  // });
};

HashTable.prototype.insert = function(k, v) {

  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this._storage[i]);
  if (this._storage[i] === undefined) {
    this._storage[i] = [];
  }
  this._storage[i].push({});
  this._storage[i][this._storage[i].length - 1][k] = v;
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var match;
  _.each(this._storage[i], function(object, index, collection) {
    if (object !== null) {
      if (k in collection[index]) {
        match = collection[index][k];
      }
    }
  });
  return match;
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  _.each(this._storage[i], function(object, index, collection) {
    if (k in collection[index]) {
      collection[index][k] = null;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */