//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    if(average < 60){
      return 'F';
    } else if(average < 70){
      return 'D';
    } else if(average < 80){
      return 'C';
    } else if(average < 90){
      return 'B';
    } else if(average <= 100){
      return 'A';
    }
  }

// top best practices 
/* function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  } */