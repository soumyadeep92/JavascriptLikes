import fetch from 'node-fetch';
const people=[
    {
        id:1,
        name:'Bob',
        job:'programmer',
        salary:200
    },
    {
        id:2,
        name:'Sally',
        job:'boss',
        salary:1200
    },
    {
        id:3,
        name:'Alan',
        job:'developer',
        salary:2500
    },
    {
        id:4,
        name:'Bill',
        job:'designer',
        salary:400
    },
]
const reducerFunc=people.reduce((total,itm)=>{
    total+=itm.salary;
    return total;
},1000)
console.log(reducerFunc);
 
const {totalItems,totalSalary}=people.reduce((total,itm)=>{
    total.totalItems+=itm.salary+1
    total.totalSalary+=itm.salary
    return total
},{totalItems:0,totalSalary:0});
console.log(totalItems);
const url='https://api.github.com/users/john-smilga/repos?per_page=100'
const fetchRepos=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    const newData=data.reduce((total,repo)=>{
        const {language}=repo;
        if(language)
        {
            total[language]=total[language]+1 || 1
        }
        return total
    },{})
    console.log(newData)
}
fetchRepos()