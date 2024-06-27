function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let newStr = str.filter(char => char !== vowels);
    console.log(newStr)
  }