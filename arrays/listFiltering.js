//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    let newArr = [];
    l.forEach(num => {
        if(typeof(num) === 'number'){
            newArr.push(num);
        }
    });
    return newArr;
}

//-------- best practices-----
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }