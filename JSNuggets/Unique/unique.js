const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
];
const categories=['all',...new Set(menu.map((item)=>item.category))];
const res=document.querySelector('.result');
res.innerHTML=categories.map((itm)=>{
    return `<button>${itm}</button>`
}).join('');
