//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
      arr.push(i);
    }
    return arr;
  }

//------ code wars -----------
function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
  }
  