//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array = 0) {
    if(array.length === 0){
      return 0;
    }else{
      return array.reduce((acc , c) => acc + c, 0) / array.length;
    }
  }

  // ------- best practices of codewars --------
  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }