function addName(obj,pet,val)
{
    return {...obj, [pet]: val};
}
console.log(addName({"Peter" : 400}, "Brutus", 300));