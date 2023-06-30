const fs=require('fs');
fs.readFile('read.txt',(err,data)=>{
    console.log(data.toString());
});