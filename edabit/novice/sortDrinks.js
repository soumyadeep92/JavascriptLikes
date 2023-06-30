function sortAsc(arr) {
    arr.sort((a,b)=>a.price-b.price);
    return arr;
}
let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
];

console.log(sortAsc(drinks));
