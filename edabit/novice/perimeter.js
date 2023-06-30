function perimeter(l,num)
{
    if(l=='s')
    {
        return num*4;
    }
    else if(l=='c')
    {
        return Math.PI*num*num;
    }
    else
    {
        return 'Error';
    }
}
console.log(perimeter('s',7));