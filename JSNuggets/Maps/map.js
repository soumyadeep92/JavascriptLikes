const people=[
    {
        id:1,
        name:'Bob',
        job:'programmer'
    },
    {
        id:2,
        name:'Sally',
        job:'boss'
    },
    {
        id:3,
        name:'Alan',
        job:'developer'
    },
    {
        id:4,
        name:'Bill',
        job:'designer'
    },
]
const person=people.map((one)=>{
    return(`<h2 key=${one.id}>${one.name}</h2>`)
});
const res=document.querySelector('#result');
res.innerHTML=person.join('');
