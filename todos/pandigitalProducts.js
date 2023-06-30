function pandigitalProducts(n)
{
    let prod=1;
    let num=0;
    let arr1=[];
    let arr=[];
    for(let j=1;j<=n;j++)
    {
        for(let k=j;k<=n;k++)
        {
            prod=k*j;
            arr.push(j);
            arr.push(k);
            arr.push(prod);
            // num=j.toString()+k.toString()+prod.toString();
            num=Number(arr.join(''));
            console.log(num);
            if(isPandigital(num,n)==true)
            {
                arr1.push(prod);
                console.log(num);
            }
            arr.pop();
            arr.pop();
            arr.pop();
        }
    }
    return arr1;
}
function isPandigital(num,k)
{
    let arr=[];
    for(let i=0;i<k;i++)
    {
        arr.push(i+1);
    }
    let n=Number(arr.join(''));
    let n1=num.toString().split('');
    let numb=Number(n1.sort((a,b)=>{return a-b;}).join(''));
    if(n==numb)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(pandigitalProducts(5))
// console.log(isPandigital(456312,6));