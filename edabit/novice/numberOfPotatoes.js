function countPotato(a) {
    let s=a.split('potato')
    let count=0;
    for(let i=0;i<s.length;i++) {
        if(s[i]=='') {
            count+=1;
        }
    }
    if(count==s.length) {
        count=count-1;
    }
    return count;
}
console.log(countPotato("potatopotatopotatoapple"))