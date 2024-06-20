//https://www.codewars.com/kata/53dc54212259ed3d4f00071c
// Sum Numbers
function sum (numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, c) => acc + c, 0);
     
};
// ------------- best
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }