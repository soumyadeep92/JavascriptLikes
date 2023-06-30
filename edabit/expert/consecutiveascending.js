function isConsecutive(str)
{
    let start;
   
    let length = str.length;
   
    for (let i = 0; i < length / 2; i++)
    {
   
        let new_str = str.substring(0, i + 1);
   
        let num = parseInt(new_str);
   
        start = num;
   
        while (new_str.length < length)
        {
   
            num++;
            new_str = new_str + (num).toString();
        }
   
        if (new_str == (str))
        return start;
    }
   
    return -1;
}
console.log(isConsecutive("2324256"))