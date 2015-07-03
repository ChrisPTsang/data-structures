

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  this[node] = {}
  this[node].edges = [];
};

Graph.prototype.contains = function(node){
  for(var key in this){
    if (key === node) {
      return true;
    } else {
      return false;
    } 
  }
};

Graph.prototype.removeNode = function(node){
  for(var key in this) {
    if(key === node) {
      delete this[key];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(_.contains(this[fromNode].edges, toNode)){
     return true;
   } else {
     return false;
   }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



