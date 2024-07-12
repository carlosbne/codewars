//https://www.codewars.com/kata/558f9f51e85b46e9fa000025

function differenceOfSquares(n) {
    let diference = 0;
    let sqrOfSum = (n *(n + 1))/2;
    let sumOfSqr = 0;
    
    for(let i = 1; i <= n; i++){
      sumOfSqr = sumOfSqr + Math.pow(i, 2);
    }
    
    diference = Math.pow(sqrOfSum, 2) - sumOfSqr;
    
    return diference;
}

//--------- Code wars ---------------

function differenceOfSquares(x){
    var sum = 0, squareSum = 0, i;
    for (i =1 ; i <= x; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }