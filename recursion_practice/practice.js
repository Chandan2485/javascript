//1) print all number from 1 to n

// function allnumber(n,i=1){
//     // console.log(i)
//     if(i<=n){
//         console.log(i)
//         return allnumber(n,i+1)
//     }
// }

// console.log(allnumber(10))



//2) print all number from 1 to n in revarse order

// function allnumber(n,i=1){
//     if(i<=n){
//         console.log(n)
//         return allnumber(n-1)
//     }
// }

// console.log(allnumber(10))



//3) print all the number from a given range

// function allnumber(a,b){
//     if(a<=b){
//         console.log(a)
//         return allnumber(a+1,b)
//     }
// }

// console.log(allnumber(10,15))



//4)  print all the number from a given range in revarse order

// function allnumber(a,b){
//     if(a<=b){
//         console.log(b)
//         return allnumber(a,b-1)
//     }
// }

// console.log(allnumber(10,15))


//5) sum all the number from 1 to n

// function sum(n,i=1,s=0){
//     if(i<=n){
//         s=s+i
//         return sum(n,i+1,s)
//     }
//     else{
//         return s
//     }
// }

// console.log(sum(10))



//6) sum all the number between a given range

// function sum(a,b,s=0){
//     if(a<=b){
//         s=s+a
//         return sum(a+1,b,s)
//     }
//     else{
//         return s
//     }
// }

// console.log(sum(10,15))



//7) find all the even/odd number from 1 to n

// function even(n,i=1){
//     if(i<=n){
//         // if(i%2!=0)
//         if(i%2==0)
//         {
//             console.log(i)
//             return even(n,i+1)
//         }
//         return even(n,i+1)
//     }
// }

// console.log(even(10))



//8) find all the even/odd number between a given  range

// function odd(a,b,s=0){
//     if(a<=b){
//          // if(i%2!=0)
//         if(a%2==0)
//         {
//             s=s+a
//             return odd(a+1,b,s)
//         }
//         return odd(a+1,b,s)
//     }
//     return s
// }

// console.log(odd(10,20))


//9) print first n odd/even number

// function first(n,i=1,j=1){
//     if(j>0 && i<=n){
//         // if(j%2==0)
//         if(j%2!=0)
//         {
//             console.log(j)
//             return first(n,i+1,j+1)
//         }
//         return first(n,i,j+1)
//     }
// }

// console.log(first(10))



//10) sum of all the even/odd number from 1 to n

// function sumeven(n,i=1,s=0){
//     if(i<=n){
//         if(i%2==0)
//         // if(j%2!=0)
//         {
//             s=s+i
//             return sumeven(n,i+1,s)
//         } 
//         else{
//             return sumeven(n,i+1,s)
//         }
//     }
//     else{
//         return s
//     }
// }

// console.log(sumeven(10))



//11) sum all the even/odd number between a given  range

// function sum(a,b,s=0){
//     if(a<=b){
//         if(a%2!=0)
//         if(i%2==0)
//         {
//             s=s+a
//             return sum(a+1,b,s)
//         }
//         else{
//             return sum(a+1,b,s) 
//         }
//     }
//     else{
//         return s
//     }
// }

// console.log(sum(10,15))



//12) sum first n odd/even number

// function sum(n,j=1,i=1,s=0){
//     if(j>0 && i<=n){
//         // if(j%2==0)
//         if(j%2!=0)
//         {
//             s=s+j
//             return sum(n,j+1,i+1,s)
//         }
//         else{
//             return sum(n,j+1,i,s)
//         }
//     }
//     else{
//         return s
//     }
// }

// console.log(sum(6))



// find a number is prime or not

// function prime(n,i=2){
//     if(i<n){
//         if(n%i==0){
//             return "not a prime no"
//         }
//         else{
//             return prime(n,i+1)
//         }
//     }
//     else {
//         return "prime no"
//     }
// }

// console.log(prime(23))



// find the all prime no between a range

// function prime(a,b,i=2){
    
//    if(a<=b){
//     if(i<a){
//         if(a%i==0){
//             return prime(a+1,b,i=2)
//         }
//         else{
//             return prime(a,b,i+1)   
//         }
//     }
//     console.log(a)
//    }
//    return prime(a+1,b,i=2)
// }

// console.log(prime())



// function flate(arr, ans=[]){
//     // console.log(arr)
//     for(i=0;i<arr.length;i++){
//         if(Array.isArray(i)){
//        return  flate(arr[i],ans)
            
//         }
//         else{
//             ans.push(arr[i])
//             // console.log(ans)
//             // console.log(i)
//         }
//     }
//     // return ans
// }

// console.log(flate([1,2,[4,5]]))




function flate(arr){
    let flatearr=[]
    for(i=0;i<arr.length;i++){
        if(Array.isArray(i)){
       flatearr=[...flatearr,...flate(arr[i])]
        }
        else{
            flatearr.push(arr[i])
        }
    }
    return flatearr
}

console.log(flate([1,2,[4,5]]))