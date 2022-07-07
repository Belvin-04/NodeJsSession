function countCode(str){
    let str1 = str,count = 0;
    let i = str1.indexOf("co");
    while(i != -1){
      console.log(str1[i],str1[i+1],str1[i+2],str1[i+3]);
      if(str1[i+3] == "e"){
        count++;
      }
      str1 = str1.substring(i+3);
      i = str1.indexOf("co");
    }
    return count;
  }