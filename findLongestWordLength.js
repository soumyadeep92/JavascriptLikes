function findLongestWordLength(str) {
  let s1=str.split(" ");
  let count=0;
  let j=0
  for(let i=1;i<s1.length;i++){
    if(s1[j].length>s1[i].length){
      count=s1[j].length;
    }
    else
    {
        j=i;
        count=s1[j].length;
    }
  }
  return count;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));