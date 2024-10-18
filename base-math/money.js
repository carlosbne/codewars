//https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
      let amount = principal * (1 + interest);
      let accrued = (amount) - principal;
      let totalTax = accrued * tax;
      principal = amount - totalTax;
      years++;
    }
  return years
}
