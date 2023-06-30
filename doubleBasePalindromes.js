function toBinary(n)
{
    let binary=0;
    let s='';
    let n1=n;
    while(n>0)
    {
        binary*=10;
        binary+=n%2;
        s=binary.toString();
        n=parseInt(n/2);
    }
    if(n1%2==0)
    {
        s+='0';
    }
    let arr=s.split('');
    let arr1=[];
    for(let i=arr.length-1;i>=0;i--)
    {
        arr1.push(arr[i]);
    }
    let s1=Number(arr.join(''));
    let s2=Number(arr1.join(''));
    return isPalind(s1);
}
function isPalind(num)
{
    let fin_n=0;
    let n=num;
    while(num>0)
    {
        fin_n*=10;
        fin_n+=(num%10);
        num=parseInt(num/10);
    }
    if(fin_n==n)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function sumOfPalinds(n)
{
    let arr=[];
    for(let i=1;i<=n;i++)
    {
        if(isPalind(i)==true && toBinary(i)==true)
        {
            arr.push(i);
        }
    }
    return arr;
}
console.log(sumOfPalinds(1000));