Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(callback(this[i]));
  }
  return mapped;
};

Array.prototype.myReduce = function(callback, initialValue = null) {
  let i = 0;
  let acc = initialValue;
  
  if (initialValue === null) {
    acc = this[0];
    i = 1;
  }
  
  for (i; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  
  return acc;
};