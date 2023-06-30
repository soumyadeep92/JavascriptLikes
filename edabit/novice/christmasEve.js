function christmasEve(d)
{
    const s=d.split('/');
    if(s[0]==='24' && s[1]==='12')
    {
        return true;
    }
    return false;
}
console.log(christmasEve('24/12/2001'));
const date1 = new Date("2022-12-24");
console.log(date1);
function christmas(date)
{
    x=date.toString().split(" ");
    if(x[2]==='24' && x[1]==='Dec')
    {
        return true;
    }
    return false;
}
console.log(christmas(date1));