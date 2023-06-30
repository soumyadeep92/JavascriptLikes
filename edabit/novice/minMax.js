function minMax(arr)
{
    let min=arr[0];
    let max=arr[0];
    let arrRes=[];
    for(let i=0;i<arr.length;i++)
    {
        if(min>arr[i])
        {
            min=arr[i];
        }
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    arrRes.push(min)
    arrRes.push(max);
    return arrRes;
}
console.log(minMax([12,3,34,2,1,348,24,-43]));
console.log(minMax([1]));