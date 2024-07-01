//https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum(a, b)
{
  let max = Math.max(a, b), min = Math.min(a, b), sum = 0;
   if(a === b)
     return a;
   else {
      for(let i = min; i <= max; i++){
       sum += i;
      }
    }
  return sum;
}

// ----------- best practices ----------
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }