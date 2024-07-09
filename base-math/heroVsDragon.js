//https://www.codewars.com/kata/59ca8246d751df55cc00014c

function hero(bullets, dragons){
    return bullets / 2 >= dragons; 
  }
  

//--------- best practices of code wars -----------
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }
  