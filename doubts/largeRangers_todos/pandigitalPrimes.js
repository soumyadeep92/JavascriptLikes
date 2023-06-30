function isPandigital(n)
{
    let arr_old=[];
    let arr=n.toString().split('');
    arr.sort((a,b)=>{return a-b});
    let max_num=arr[arr.length-1];
    for(let i=0;i<max_num;i++)
    {
        arr_old[i]=i+1;
    }
    let num_old=arr_old.join('');
    let num=arr.join('');
    if(num===num_old)
    {
        return true;
    }
    return false;
}
function isPrime(n)
{
    if(n==1)
    {
        return false;
    }
    if(n==2)
    {
        return true;
    }
    else
    {
        let k=2;
        while(n>=k)
        {
            if(n%k==0 && n!=k)
            {
                return false;
            }
            else
            {
                k++;
            }
            if(n==k)
            {
                return true;
            }
        }
    }
}
function pandigitalPrimes(n)
{
    let max_num=0;
    for(let i=9876543;i>=1234567;i-=1)
    {
        console.log(i);
        if(isPrime(i)===true && isPandigital(i)===true)
        {
            max_num=i;
            break;
        }   
    }
    return max_num;
}
console.log(pandigitalPrimes(4));