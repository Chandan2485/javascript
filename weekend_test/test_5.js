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

// let n=5;

// function getfact(num,fact=1){

// if(num>0){
//     fact=fact*num
//     return getfact(num-1,fact)
// }

// return fact
// }
// console.log(getfact(5))


// Given an integer array, find all the elements which are divisible by n and return the count

// function count_all_divisions(arr,n){

    // let count = 0;
    // for(i=0;i<arr.length;i++){
    //   // console.log(i)
    //    if(arr[i]%n==0){
    //      count++
    //    }
    // }
    // return count
  
  
  
  // return arr.filter(function(a){return (a%n==0)}).length
    
    
//   }
//   console.log(count_all_divisions([1,5,7,8],1))



// Given an array, return the descending order

// function descending_order(arr){
//     let c=0,v=0
//       for(i=0;i<arr.length;i++){
//         v++
//       for(j=i+1;j<=arr.length;j++){
//         c++
//         if(arr[i] < arr[j]){
//           temp = arr[i]
//           arr[i]=arr[j]
//           arr[j]=temp
//         }
//       }
//       }
//       console.log(c,v)
//       return arr
//     }
//     console.log(descending_order([4, 3, 6,1,56,78,12,27,11,10,100]))