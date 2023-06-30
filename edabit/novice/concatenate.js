function concatenate(...arr)
{
    let con_arr=[].concat(...arr);
    return con_arr;
}
console.log(concatenate([1, 2, 3], [4, 5], [6, 7]))