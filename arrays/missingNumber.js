//https://www.codewars.com/kata/650e9701a5de2b5d75408d98

function findMissingNumber(arr) {
    for(let i = 1; i < arr.length; i++){
          let numExpected = arr[i - 1] + 1;
          if(arr[i] != numExpected){
              return numExpected;
          }
    }
    return -1;
  }
  