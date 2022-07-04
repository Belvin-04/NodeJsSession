// Warmup-1 -- stringE
// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str){
    let count = 0;
    for(const element of str){
      if(element == 'e'){
        count++;
      }
    }
    return (count>=1 && count<=3);
    
  }

  console.log(stringE('Hello'));
  console.log(stringE('Heelle'));
  console.log(stringE('Heelele'));