function highAndLow(numbers){
    let num = numbers.split(' ').map(Number);
    return `${Math.max(...num)} ${Math.min(...num)}`;
  }