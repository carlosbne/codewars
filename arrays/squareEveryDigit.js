//https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  let digits = String(num).split('').map(Number);
  let squaredDigits =  digits.map((i) => i ** 2).join("");
  
  return Number(squaredDigits);
}

//// ------------- best
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
