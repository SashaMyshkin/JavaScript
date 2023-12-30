const myPromise = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve("Resolved");
    }, 2000);
});

/*myPromise.then((value)=>{
    consle.log(value);
});*/

async function callMyPromise(){

    /*I'm not sure if a promise will be resolved*/
    /*Syntax*/
    const result = await myPromise;
    console.log(result)

}

/*undefined, Promise..., posle 2 sekundi Resolved*/ 

callMyPromise();

