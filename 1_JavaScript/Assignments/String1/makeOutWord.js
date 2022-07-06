function makeOutWord(out, word){
    let opening = out.substring(0,2);
    let closing = out.substring(2);
    return `${opening}${word}${closing}`;
  }

  console.log(makeOutWord('<<>>', 'Yay'));