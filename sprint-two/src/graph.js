

var Graph = function(){

};

Graph.prototype.addNode = function(node){
  this.node = node;
};

Graph.prototype.contains = function(node){
  for(key in this){
    if(this[key] === node){
      return true;
    } else {
      return false;
    }
  }
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



