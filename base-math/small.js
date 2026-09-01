  //https://www.codewars.com/kata/55a2d7ebe362935a210000b2
  
  
  function findSmallestInt(args) {
    let sortted = args.sort((a,b)=> a - b);
    return sortted[0];
  }


  //-----

  class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}