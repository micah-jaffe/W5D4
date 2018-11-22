// Array#uniq
Array.prototype.uniq = function() {
  let arr = [];
  // for (let i = 0; i < this.length; i++) {
  //   if (!arr.includes(this[i])) {
  //     arr.push(this[i]);
  //   }
  // }
  
  this.forEach((element) => {
    if (!arr.includes(element)) {
        arr.push(element);
      }
  });
  return arr;
};


Array.prototype.twoSum = function(target) {
  let answer = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === target) {
        answer.push([i, j]);
      }
    }
  }
  return answer;
};