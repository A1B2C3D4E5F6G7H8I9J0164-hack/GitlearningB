// Promises
function promisecall(resolve ,rejected){
    
}

const promise = new Promise((promisecall))

console.log(promise);


function promisecall1(resolve ,rejected){
    resolve()
}

const promise1 = new Promise((promisecall1))

console.log(promise1)

function promisecall2(resolve ,rejected){
    rejected()
}

const promise2 = new Promise((promisecall2))

console.log(promise2)


// create promise
const promise3 = new Promise((resolve,rejected)=>{
    const random_value = Math.ceil(Math.random()*10);
    if(random_value%2==0){
        resolve('even')
    }else{
        rejected('odd')
    }
})
console.log(promise3);


// function promis (useCallback){
//     function rejected(){

//     }
//     function resole(){

//     }
//     useCallback(rejected,resole)
// }

function success(value){
    console.log('Promises success',value);

}
function error(value){
    console.log('promise error',value)
}
promise3.then(success).catch(error)














