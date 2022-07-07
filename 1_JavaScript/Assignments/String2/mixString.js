function mixString(a, b){
  let str1 = "";
  let smallSize = (a.length < b.length)?a.length:b.length;
  for(let i = 0; i<smallSize;i++){
    str1 += a[i]+b[i];
  }
  str1 += (a.length < b.length)?b.substring(i):a.substring(i);
  return str1;
}