function powerDigitSum(exponent) {
    // Take exponent and convert to string of digits
    const num = BigInt(Math.pow(2, exponent));
    const digits = num.toString().split('');
    // Sum digits in string representation
    let sum=0;
    for(let i=0;i<digits.length;i++)
    {
        sum+=parseInt(digits[i]);
    }
    return sum;
}
  
console.log(powerDigitSum(1000));