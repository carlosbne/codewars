//https://www.codewars.com/kata/55d277882e139d0b6000005d

function findAverage(nums) {
  return nums.reduce((acc, cur) => acc + cur) / nums.length;
}

 // ------- best practices of codewars --------

 const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;