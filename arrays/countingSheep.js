//https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
    let acc = 0;
    sheep.forEach((item)=> item === true ? acc++ : '');
    return acc;
  }

//--------best practices----------------

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }