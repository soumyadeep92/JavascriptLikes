function frankenSplice(arr1, arr2, n) {
    let arr=[];
    for(let i=0;i<arr1.length+arr2.length;i++)
    {
      if(i>=0 && i<n)
      {
        arr.push(arr2[i]);
      }
      else if(i>=n && i<n+arr1.length)
      {
        arr.push(arr1[i-n]);
      }
      else
      {
        arr.push(arr2[i-arr1.length]);
      }
    }
    return arr;
}
  
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));