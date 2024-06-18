//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
    let newArr = [];
    
    for (const item of array) {
        newArr.push(item * -1);
    }

    return newArr;
  }


//------best practices-----------
const invert = array => array.map(num => -num);