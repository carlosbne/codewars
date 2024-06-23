function fakeBin(x){
    let toNumber = [];

    for (const num of x) {
        toNumber.push(Number(num));
    }
    console.log(toNumber);

    let newStr = toNumber.forEach(num => {num < 5 ? newStr += '0': newStr += '1'}); 
    
}