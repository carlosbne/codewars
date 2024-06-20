//https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
    return num > 0 ? (-num) : num;
  }

// -------- best practice ----------

function makeNegative(num) {
    return -Math.abs(num);
  }