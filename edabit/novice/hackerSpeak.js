function hackerSpeak(str) 
{
    var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
    str = str.replace(/[aeios]/g, letter => chars[letter]);
    
    return str;
}
console.log(hackerSpeak("javascript is cool"));