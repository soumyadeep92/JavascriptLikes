function rightShiftByDivision(a,b)
{
    const res=Math.floor(a/(Math.pow(2,b)));
    return res;
}
console.log(rightShiftByDivision(80,3));
console.log(rightShiftByDivision(-24,2));