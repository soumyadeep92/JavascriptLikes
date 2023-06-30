function palindrome(str) {
    str=str.toLowerCase();
    let arr=str.split(' ');
    let s='';
    for(let i=0;i<arr.length;i++)
    {
      let word=arr[i].split('');
      for(let j=0;j<word.length;j++)
      {
        if(word[j]=='_' || word[j]==',' || word[j]=='*' || word[j]=='#' || word[j]=='.' || word[j]==':' || word[j]=='(' || word[j]==')' || word[j]=='-')
        {
          continue;
        }
        else
        {
            s+=word[j];
        }
      }
    }
    return isPalind(s);
}
function isPalind(s)
{
    let arr=s.split('');
    let a=[];
    for(let i=arr.length-1;i>=0;i--)
    {
        a.push(arr[i]);
    }
    let s1=a.join('');
    if(s==s1)
    {
        return true;
    }
    return false;
}
console.log(palindrome('five|\_/|four'));