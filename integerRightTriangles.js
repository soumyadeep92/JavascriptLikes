function genTriangle(p)
{
    let k=0;
    let arr=[];
    for(let i=1;i<p;i++)
    {
        for(let j=i+1;j<p;j++)
        {
            k=p-j-i;
            if(Math.pow(i,2)+Math.pow(j,2)===Math.pow(k,2))
            {
                arr.push([i,j,k]);
            }
        }
    }
    return arr;
}
function integerRightTriangles(n)
{
    let max=0;
    let arr_len=0;
    for(let p=3;p<=n;p++)
    {
        arr_len=genTriangle(p);
        if(max<arr_len.length)
        {
            max=arr_len.length
            res=p;
        }
    }
    return res;
}
console.log(integerRightTriangles(500));