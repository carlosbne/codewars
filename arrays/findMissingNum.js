//https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d

function missingNo(nums) {
    let sortedNums = nums.sort((a, b) => a-b);
    let num;
    for(let i = 0; i < sortedNums.length; i++){
      if(sortedNums[i] + 1 != sortedNums [i+1]){
        num = sortedNums[i] + 1;
        break;
      }
    }
    return num;
  }

// --------- codewars ----------
function missingNo(nums) {
    return 5050 - nums.reduce((a, b) => a + b, 0)
  }
  