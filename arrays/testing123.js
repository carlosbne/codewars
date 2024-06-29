//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number=function(array){
    //your awesome code here
    let newArr = [];
      array.forEach((x, i) => newArr.push(`${[i + 1]} : ${x}`));
    return newArr;
  }

// ------- best practices from codewars -------

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }