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
        job:'designer'
    },
    {
        id:4,
        name:'Bill',
        job:'designer'
    },
]
const jobs=people.filter((itm)=>
    itm.job==='designer'
);
const firstMatch=people.find((itm)=>itm.name='Bill');
console.log(jobs);
console.log(firstMatch);