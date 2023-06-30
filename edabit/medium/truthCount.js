function countTruths(s) {
    let count=0;
    for(let i=0;i<s.length;i++) {
        if(s[i]==true) {
            count++;
        }
    }
    return count;
}