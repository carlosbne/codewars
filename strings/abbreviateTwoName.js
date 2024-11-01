//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
    const words = name.split(' ');
    
    return `${words[0].charAt(0).toUpperCase()}.${words[1].charAt(0).toUpperCase()}`
}



//--------best practices---------

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }