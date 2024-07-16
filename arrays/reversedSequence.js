//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = n => {
    let arr = [];
     for(let i = n; 0 < i; i--){
      arr.push(i);
     }
    return arr;
  };


//------ Clever of codewars -------

const reverseSeq1 = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };


const reverseSeq2 = n => Array.from({ length: n }, (_, i) => n - i);