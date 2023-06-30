function largestOfFour(arr) {
    let max=0;
    let ind=[];
    for(let i=0;i<arr.length;i++)
    {
      max=arr[i][0];
      for(let j=1;j<arr[i].length;j++)
      {
        if(arr[i][j]>max)
        {
          max=arr[i][j];
        }
        if(arr[i][j]<0)
        {
          if(max<arr[i][j])
          {
            max=arr[i][j];
          }
        }
      }
      ind.push(max);
    }
    return ind;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
