//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n){
    let result = [];

    for(let i = 0; i < n; i++){
        result[i] = `${' '.repeat(i)}I`;
    }

    return result.join('\n');
}

