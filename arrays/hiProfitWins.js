//https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
    let ordenedArr = arr.sort((a,b) => a - b);
    return [ordenedArr[0], ordenedArr[ordenedArr.length - 1]]; 
}

//---------- Best Practices of Codewars ------------

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}