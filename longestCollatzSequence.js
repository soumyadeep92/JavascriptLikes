function longestCollatzSequence(n)
{
    let count=1,count1=0,max=0;
    let c=0,k=0;
    for(let i=1;i<=n;i++)
    {
        if(i==1)
        {
            max=1;
            continue;
        }
        else
        {
            k=i;
            count=1;
            while(k>1)
            {
                if(k%2==0)
                {
                    c=k/2;
                }
                else
                {
                    c=3*k+1;
                }
                count++;
                k=c;
            }
            if(count1<count)
            {
                count1=count;
                max=i;
            }
        }
    }
    return max;
}
console.log(longestCollatzSequence(5847));