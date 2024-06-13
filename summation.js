//https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

// --- Clever with Gauss sum formula

const summation = n => n * (n + 1) / 2;