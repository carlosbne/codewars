//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr){
    return arr.filter(( _, index) => index % 2 === 0)
}

//----------- best practices from codewars -----------

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }