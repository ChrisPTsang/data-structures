var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  _.each(this._storage, function(value, index, collection) {
    if (value === item) {
      collection[index] = null;
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */