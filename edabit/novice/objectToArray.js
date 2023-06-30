function objectToArray(obj)
{
    let arr=[];
    if(obj=={})
    {
        return [];
    }
    else{
        for(let i in obj)
        {
            arr.push([i,obj[i]]);
        }
    }
    return arr;
}
console.log(objectToArray({ a: 1, b: 2 }))