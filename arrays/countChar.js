//https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    let count = {};
    
    string.split('').forEach(function(s) {
          count[s] ? count[s]++ : count[s] = 1;
        });
    
    return count;
  }

// from codewars:
const count = require('lodash').countBy;
