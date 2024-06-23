function getMiddle(s){
    let x = s.length / 2;
    if(s.length % 2 === 0){
        return s.slice(x - 1, x + 1);
    }else{
        return s.charAt(x);
    }
}


// ------- best practices ---------

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}