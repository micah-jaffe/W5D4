//Array#bubbleSort

Array.prototype.bubbleSort = function () {
  let sorted = false;
  
  while (!sorted) {
    sorted = true;
    
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        let el = this[i];
        let nextEl = this[i + 1];
        this[i + 1] = el;
        this[i] = nextEl;
        sorted = false;
      }
    }
  }
  
  return this;
};

String.prototype.subStrings = function() {
  const answer = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length + 1; j++) {
      answer.push(this.slice(i, j));
    }
  }

  return answer;
};