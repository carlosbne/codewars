//https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
    return x.reduce((acc, c) => acc + +c, 0);
}


// -------- best practices --------

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }