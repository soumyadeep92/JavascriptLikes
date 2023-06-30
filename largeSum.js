const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
function largeSum(arr)
{
    let arr1=[];
    let num1=arr[0];
    let num2=arr[1];
    let num1_str=num1.split("");
    let num2_str=num2.split("");
    let sum=0;
    let carry=0;
    let nice_sum=0;
    for(let i=num1_str.length-1;i>=0;i--)
    {
        sum=parseInt(num1_str[i])+parseInt(num2_str[i])+carry;
        if(sum>9)
        {
            carry=1;
        }
        if(sum>=10)
        {
            nice_sum=sum%10;
            arr1.push(nice_sum.toString());
        }
        else
        {
            arr1.push(sum.toString());
        }
    }
    return arr1.reverse().slice(0,10).join('');
}

console.log(largeSum(testNums));