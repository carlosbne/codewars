//https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    if(name[0] === 'R' || name[0] === 'r'){
      return `${name} plays banjo`;
    }
    return`${name} does not play banjo`;
  }

//from codewars
  function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}