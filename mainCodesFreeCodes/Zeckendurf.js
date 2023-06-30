function Zeckendorf(n) {
    let arr=fibonacci(n);
    let arr_fin=[];
    let sum=0;
    if(n==arr[0])
    {
        return 1;
    }
    else
    {
        sum=arr[1];
        let j=0;
        for(let i=2;i<arr.length;i++)
        {
            if(sum<n)
            {
                sum+=arr[i];
                arr_fin[j]=1;
            }
            if(sum>n)
            {
                sum-=arr[i-1];
                j--;
                arr_fin[j]=0;
                sum+=arr[i];
                j++;
                arr_fin[j]=1;
            }
            if(sum==n)
            {
                return arr_fin;
            }
            j++;
        }
    }
    return false;
}
function fibonacci(n)
{
    let i=0;
    let j=1;
    let sum=0;
    let arr=[];
    while(sum<n)
    {
        sum=i+j;
        i=j;
        j=sum;
        arr.push(sum);
    }
    return arr.reverse();
}
console.log(fibonacci(14));