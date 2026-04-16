//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  let arrResult = [0, 0]
  if(input == null || input.length == 0){
    return [];
  } else {
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        arrResult[0] += 1;
      } 
      if(input[i] < 0){
        arrResult[1] += input[i];
      }
    }
  }
  return arrResult;
}
  

// --------------- best prectices 

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

// ---------- clever----- using 
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}