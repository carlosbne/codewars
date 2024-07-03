//https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2

function sumNoDuplicates(numList) {
    let sum = 0;
    let newList = [];
    numList.forEach(num => {
      if(numList.indexOf(num) === numList.lastIndexOf(num)){
        newList.push(num);
        sum += num;
      }
    })  
    return sum;
  }
  