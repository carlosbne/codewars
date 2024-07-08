//https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
    let countDivs = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        countDivs++;
        if (i !== n / i) {
          countDivs++;
        }
      }
    }
    return countDivs;
  }