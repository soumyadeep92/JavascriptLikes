function truncateString(str, num) {
    let arr=str.split(" ");
    if(str.length>num)
    {
      return str.substr(0,num).toString()+"..."
    }
    return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));