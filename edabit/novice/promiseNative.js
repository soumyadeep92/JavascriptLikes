function promiseNative()
{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("edabit")
        },1000)
    }).then(()=>{
        console.log("Promise resolved")
    }).catch((err)=>{
        console.log(err)
    });
}
promiseNative();