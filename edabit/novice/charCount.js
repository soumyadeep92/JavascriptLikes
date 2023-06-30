function countChars(a,str) {
    str=str.toLowerCase();
    let count=0;
    for(let i=0;i<str.length;i++) {
        if(a.toLowerCase()==str.charAt(i)) {
            count+=1;
        }
    }
    return count;
}
console.log(countChars("c", "Chamber of secrets"));