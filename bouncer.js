function bouncer(arr) {
    let arr1=[]
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]==false)
      {
        continue;
      }
      arr1.push(arr[i]);
    }
    return arr1;
}
  
console.log(bouncer([7, "ate", "", false, 9]));