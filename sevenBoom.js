function sevenBoom(arr)
{
    let c,n;
    for(let elem in arr)
    {
        c=arr[elem];
        while(c>0)
        {
            n=c%10;
            if(n==7)
            {
                console.log("Boom!");
                return;
            }
            else
            {
                c/=10;
                continue;
            }
        }
    }
}
sevenBoom([1,7,3,8,5]);