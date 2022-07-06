// Logic-2 -- blackjack
// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

// Examples

// blackjack(19, 21) → 21
// blackjack(21, 19) → 21
// blackjack(19, 22) → 19

function blackjack(a, b){
    let diffA = 21-a, diffB = 21-b;
    if(diffA < 0 && diffB < 0){
      return 0;
    }
    else if(diffA < diffB){
      if(diffA >= 0){return a}else{return b}
    }
    else if(diffB < diffA){
      if(diffB >= 0){return b}else{return a}
    }
  }



console.log(blackjack(19, 21));
console.log(blackjack(21, 19));
console.log(blackjack(19, 22));