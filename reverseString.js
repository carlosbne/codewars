//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
    let strReverse = '';
    for (char of str) {
        strReverse = char + strReverse;
    }
    return strReverse;
}   

//------ best practices ------

function solution(str){
    return str.split('').reverse().join('');  
}