function swap(n)
{
    let s_num=0;
    let k=n;
    while(k>0)
    {
        s_num*=10;
        s_num+=(k%10);
        k=parseInt(k/10);
    }
    if(s_num>n)
    {
        return false;
    }
    return true;
}
console.log(swap(72));