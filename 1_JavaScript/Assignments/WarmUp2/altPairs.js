// Warmup-2 -- altPairs
// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// Examples

// altPairs('kitten') → kien
// altPairs('Chocolate') → Chole
// altPairs('CodingHorror') → Congrr

function altPairs(str){
    let str1 = "";
    let count = 0;
    for(const element of str){
      if(count < 0){
        count++;
      }
      else if(count == 0 || count == 1){
        str1 += element;
        count++;
        if(count == 2){
          count *= -1;
        }
      }
    }
    return str1;
  }



console.log(altPairs('kitten'));
console.log(altPairs('Chocolate'));
console.log(altPairs('CodingHorror'));