function answerCell(isMorning, isMom, isAsleep){
    let answer = true;
    if(isMorning && !isMom){answer = false}
    if(isAsleep){answer = false;}
    
    return answer;
  }