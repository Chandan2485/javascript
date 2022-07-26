// console.log(!!0)
// let a="2", b=1
// let a =[1,2,3]

// let a=1.00001
// console.log(Math.ceil(a))

// let arr=[2,1,9,7,5,11,1]

// let min=arr[0]

// for(let i=0;i<arr.length;i++){

//     if(arr[i]<min)
//     min=arr[i]
// }
// // console.log(min)
// // let m=min
// for(let i=0;i<arr.length;i++){

//     if(arr[i]==min){
//     console.log(i)
//     break;
//     }
// }


// let obj={
//     chandan: 26,
//     suman: 25,
//     abhi:27,
//     anup:24,
// }

// for(let key in obj){
//     console.log(`Name is ${key} and age is ${obj[key]}`)
// }

let arr=[2,3,8,3,9,7,3]


// let filterarr=arr.filter(function(num){
//     return num>5
// })

// console.log(filterarr)

let n=5;

function getfact(num,fact=1){

if(num>0){
    fact=fact*num
    return getfact(num-1,fact)
}

return fact
}
console.log(getfact(5))