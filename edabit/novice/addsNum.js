function addsNum(num)
{
    return function(e){
        return e+num;
    }
}
const addsOne=addsNum(1);
console.log(addsOne(3));