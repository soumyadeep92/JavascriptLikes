function callback(name,cb)
{
    const nameFull=`${name} Smith`;
    cb(nameFull);
}
function toUpper(n)
{
    console.log(n.toUpperCase());
}
function rev(n)
{
    console.log(n.split('').reverse().join(''));
}
callback('Peter',toUpper);
callback('Peter',rev);
callback('Peter',(value)=>console.log(value))
const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    callback('soumya',toUpper)
})