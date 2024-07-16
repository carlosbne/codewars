//https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor){
    return numbers.filter(element => element % divisor === 0);
  }

// -------- codewars ----------

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));