function sumOfnonAbundantNumbers(n)
{
    let arr=[];
    let sum=0;
    let j=0;
    for(let i=1;i<=n;i++)
    {
        j=1;
        while(j<i)
        {
            if(i%j==0)
            {
                sum+=j;
            }
            j+=1;
        }
        if(sum==i)
        {
            arr.push(i);
        }
        sum=0;
    }
    let sum_arr=[];
    for(let p=0;p<arr.length;p++)
    {
        for(let q=p;q<arr.length;q++)
        {
            if(arr[p]+arr[q]<=n)
            {
                sum_arr.push(arr[p]+arr[q]);
            }
        }
    }
    let sum_fin=0;
    for(let o=1;o<=n;o++)
    {
        if(arr.indexOf(o)==-1)
        {
            sum_fin+=o;
        }
    }
    return arr;
}
console.log(sumOfnonAbundantNumbers(10000));