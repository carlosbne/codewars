//https://www.codewars.com/kata/55a5bfaa756cfede78000026

function problem(x){
    // x ? string
    if(typeof x === "string"){
      //return "Error"
      return "Error"
    } else {
      // x !string
      //x * 50 + 6
      return (x * 50) + 6;
    }  
}

//

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;