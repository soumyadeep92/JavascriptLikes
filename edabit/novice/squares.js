function squares(n)
{
    const arr_squares=[];
    for(let i=1;i<=n;i++)
    {
        arr_squares.push(i*i);
    }
    let sum_squares=0;
    for(let j=0;j<arr_squares.length;j++)
    {
        sum_squares+=arr_squares[j];
    }
    return sum_squares;
}
console.log(squares(5));