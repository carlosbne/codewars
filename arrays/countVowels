//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  str.split('').forEach( x => vowels.includes(x) ? count++ : '');
  return count;
}

//------- clever for codewars -----------

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }