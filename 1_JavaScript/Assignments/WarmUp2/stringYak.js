// Warmup-2 -- stringYak
// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

// Examples

// stringYak('yakpak') → pak
// stringYak('pakyak') → pak
// stringYak('yak123ya') → 123ya


function stringYak(str){
    let str1 = str;
    let yak = str.indexOf("yak");
    while(yak != -1){
      str1 = str.substring(0,yak)+str.substring(yak+3);
      yak = str1.indexOf("yak");
      str = str1;
    }
    return str1;
  }

  console.log(stringYak('yakpak'));
  console.log(stringYak('pakyak'));
  console.log(stringYak('yak123ya'));