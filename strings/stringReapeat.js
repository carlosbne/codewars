//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
    let ik = '';
    for(let i = 0; i < n ;i++){
       ik += s; 
    }
    return ik;
  }

//-----------------

function repeatStr (n, s) {
    return s.repeat(n);
  }
  