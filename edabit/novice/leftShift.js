function leftShift(x,y)
{
    let result=x<<y;
    let ans=x*Math.pow(2,y);
    if(result==ans)
    {
        console.log(ans);
        return true;
    }
    else{
        return false;
    }
}
leftShift(10,3);
leftShift(-32,2);