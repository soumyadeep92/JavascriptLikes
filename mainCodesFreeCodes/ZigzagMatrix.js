function ZigZagMatrix(n) 
{
    height = n;
    width = n;

    mtx = [];
    for (var i = 0; i < n; i++)
    {
        mtx[i] = [];
    }
    var i=1, j=1;
    for (var e = 0; e < n*n; e++) 
    {
        mtx[i-1][j-1] = e;
        if ((i + j) % 2 == 0) 
        {
            if (j < n)
            { 
                j ++;
            }
            else
            {
                i += 2;
            }
            if(i > 1)
            { 
                i --;
            }
        } 
        else 
        {
            if (i < n)
            {
                i ++;
            }
            else
            {       
                j += 2;
            }
            if(j > 1)
            {
                j --;
            }
        }
    }
    return mtx;
}
console.log(ZigZagMatrix(4));