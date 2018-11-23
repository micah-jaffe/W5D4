function range (start, end) {
  if (start === end) {
    return [start];
  }
  
  return range(start, end - 1).concat([end]);
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  }
  
  return sumRec(arr.slice(0, arr.length - 1)) + arr.slice(-1)[0];  
}

function exponent1(base, power) {
  if (power === 0) {
    return 1;
  }
  
  return base * exponent1(base, power - 1);
}

function exponent2(base, power) {
  if (power === 0) {
    return 1;
  } 
  
  if (power % 2 === 0) {
    return Math.pow(exponent2(base, power / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (power - 1) / 2), 2);
  }
}

function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }
  
  let preFib = fibonacci(n - 1);
  let nextFib = preFib.slice(-2)[0] + preFib.slice(-2)[1];
  preFib.push(nextFib);
  return preFib;
}

function deepDup(array) {
  let answer = [];
  array.forEach(el => {
    if (el instanceof Array) {
      answer.push(deepDup(el));
    } else {
      answer.push(el);
    }
  }); 
  
  return answer;
}

function bsearch(arr, target) {
  if (array.length === 1 && array[0] !== target) {
    return -1;
  }
  
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1, array.length);
  
  if (array[mid] === target) {
    return mid;
  } else if (target > array[mid]) {
    return bsearch(left, target);
  } else if (target < array[mid]) {
    r = bsearch(right, target);
    return r === -1 ? -1 : r + 1 + mid;
  }
}