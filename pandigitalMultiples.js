function isPandigital(num,k)
{
    let i=1;
    let count=1;
    let arr_orig=[];
    for(let f=0;f<k;f++)
    {
        arr_orig.push(f+1);
    }
    let narr=Number(arr_orig.join(''));
    let count_ini=0;
    let no=0;
    let arr=[];
    while(count<k)
    {
        no*=(10**count_ini);
        no+=(num*i);        
        count=digCount(no);
        i+=1;
        count_ini=digCount(num*i);
    }
    let r=no.toString().split('');
    r.sort((a,b)=>{return a-b});
    let x=Number(r.join(''));
    if(x==narr)
    {
        arr.push(no);
        return arr;
    }
    return false;
}
function pandigitalMultiples(k)
{
    let arr=[];
    for(let i=1;i<=10000;i++)
    {
        if(isPandigital(i,k)!=false)
        {
            arr.push(isPandigital(i,k)); 
        }
    }
    let k1=arr.filter((a)=>digCount(a)==k);
    k1.sort((a,b)=>{return a-b;});
    return k1[k1.length-1];
}
function digCount(n)
{
    let count=0;
    while(n>0)
    {
        count++;
        n=parseInt(n/10);
    }
    return count;
}
console.log(pandigitalMultiples(8));
