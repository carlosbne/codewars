//https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    
    if(Math.sqrt(sq) % 1 != 0 && !isNaN(Math.sqrt(sq) % 1)){
      return -1;
    }
    else{
      let i = sq + 1;
      while(Math.sqrt(i) % 1 != 0 && !isNaN(Math.sqrt(i) % 1)){
        i++;
      }
      return i;
    }
  }

//---------- Best practices codewars ------------
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }

  