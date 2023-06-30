function wordHide(n)
{
    const arr=n.split('');
    let ch='';
    for(let i in arr)
    {
        if(arr[i]==arr[i].toLowerCase())
        {
            ch+=arr[i];
        }
        else
        {
            continue;
        }
    }
    return ch;
}
console.log(wordHide('ULDJFHJFcJKDOIEKaKDKIFORtKDKIIR'));