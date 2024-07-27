//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
    let arr = n.toString().split('').sort((a, b) => a - b).reverse().join('');
    return +arr;
}

//---------- codewars ----------
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }