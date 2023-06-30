function greetingMaker(s)
{
    return function greeting(st)
    {
        return s+", "+st;
    }
}
const greeting = greetingMaker("Hello");
console.log(greeting("James"));