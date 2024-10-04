//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    //var of increment i, j
    let i, j
    //new arr = []
    let result = []
    //loop i < data.len
    for(i = 0; i < data.length; i++){
      //if [i][0] >= 55 and[i][1] > 7
        if(data[i][0] >= 55 && data[i][1] > 7){
          //result = 'Senior'
          result.push('Senior')
        }else{
          //retult = 'Open'
          result.push('Open')
        }
    }
    return result;
  }