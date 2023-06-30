function distinctPowers(n)
{
    let arr=[];
    for(let i=2;i<=n;i++)
    {
        for (let j=2;j<=n;j++)
        {
            arr.push(i**j);
        }
    }
    let arr1=[];
    let temp=0;
    for(let o=0;o<arr.length;o++)
    {
        for(let p=o+1;p<arr.length;p++)
        {
            if(arr[o]>arr[p])
            {
                temp=arr[o];
                arr[o]=arr[p];
                arr[p]=temp;
            }
        }
    }
    let s=new Set(arr);
    return s.size;
}
console.log(distinctPowers(15));