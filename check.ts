function check(likes:number){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            (likes >= 10000) ? resolve("Enough likes") : reject("Not enough likes"); 
        }, 1000);
    });
}

//.then notation
const result = check(10);
result
.then((value)=>{
    console.log(value);
})
.catch((value)=>{
    console.log(value);
});


//async await notation
async function secondCheck() {
    try{
        const promise = check(10);
        const result = await promise;
        console.log(result)
    }catch(e){
        console.log(e)
    }  
}

secondCheck();
