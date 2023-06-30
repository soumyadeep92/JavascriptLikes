//21
function mergeLists(s) {
    let a=[]
    for(let i=0;i<s.length;i++) {
        a=a.concat(s[i])
    }
    return a.sort((e,f)=>e-f);
}
console.log(mergeLists([[1,4,5],[1,3,4],[2,6]]));