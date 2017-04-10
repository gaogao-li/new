var countBits = function(num) {
  var result = new Array(num + 1)

  result[0] = 0

  for (var i = 1; i <= num; i++) {
    if (is2Mi(i)) {
      result[i] = 1
    } else {
      result[i] = result[i - Math.pow(2, parseInt(Math.log2(i)))] + 1
    }
  }

  return result
};


function is2Mi(n) {
  while (n > 1) {
    n = n / 2
  }
  if (n == 1) {
    return true
  }
  return false
}



// ===================================================================


/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  return new Array(num + 1).fill(0).map((it, index) => index).map(bit1InNumber)
};

function bit1InNumber(n) {
  if (n == 0) {
    return 0
  }

  return 1 + bit1InNumber(n - Math.pow(2, parseInt(Math.log2(n))))
}


// ===================================================================


/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  return new Array(num + 1).fill(0).map((it, index) => index).map(it => it.toString(2).split('').filter(it => it == 1).length)
};



// ===================================================================

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var i
  var result = new Array(num + 1)
  var next2 = 1
  for (i = 0; i <= num; i++) {
    if (i == 0) {
      result[i] = 0
      continue
    } else if (i == next2) {
      result[i] = 1
      next2 *= 2
      continue
    }
    result[i] = result[i - next2 / 2] + 1
  }
  return result
};
