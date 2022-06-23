
// find fact 

// function fact(num,facto) {
//     if(num>0){
//         facto=facto*num
//         return fact(num-1,facto)
//     }
//     else{
//         return facto
//     }
// }
// console.log(fact(5,1))


// fibonacci series

// function num(n,y,i){
//   if(i<=10){
//         console.log (n)
//         let c=n+y
//     return num(y,c, i+1)
//   }
// }
// console.log(num(0,1,1))



// / fibonacci series

// function num(n,y,i){
//   if(i<10){
//         // console.log (n)
//         let c=n+y
//     return num(y,c, i+1)
//   }
//   console.log (n)
// }
// console.log(num(1,1,1))




// add number

// function sum(a,b,s){
//     if(a<=b){
//         s=s+a
//         return sum(a+1,b,s)
//     }
//     return s;
// }
// console.log(sum(1,5,0))



// add even number


// function sum(a,b,s){
//     if(a<=b){
//         if(a%2==0){
//             s=s+a
//         }
//       return sum(a+1,b,s)  
//     }
//     return s
// }
// console.log(sum(1,10,0))


// add odd number

// function sum (a,b,s){
//     if(a<=b){
//         if(a%2!=0){
//             s=s+a
//         }
//         return sum(a+1,b,s)
//     }
//     return s
// }
// console.log(sum(1,10,0))





// print all no

// function num(a,b){
//     if(a<=b){
//         console.log(a)
//         return num(a+1,b)
//     }
// }
// console.log(num(10,20))





// print all no                            2

// function num(n,i){
//     if(i<=n){
//         console.log(i)
//         return num(n,i+1)
//     }
// }
// console.log(num(10,1))






// print all no reverse                     3

// function num(n,i){
//     if(i<n){
//         console.log(n)
//         return num(n-1,i)
//     }
// }
// console.log(num(10,0))






// no of digit                                6

// function digit(n,i){
//      if(n!=0){
//         let y=Math.floor(n/10)
//         i=i+1
//         return digit(y,i)
//      }
//      console.log(i)
// }
// console.log(digit(157255,0))





// print all odd no                           8


// function odd(n,i){
//     if(i<=n){
//         if(i%2!=0){
//         console.log(i)
//         }
//         return odd(n,i+1)
//     }
// }
// console.log(odd(20,1))






// print all even no                           10

// function num(n,i){
//     if(i<n){
//         if(n%2==0){
//             console.log(n)
//         }
//         return num(n-1,i)
//     }
// }
// console.log(num(10,0))








// palindrome                                    11

// function p(no,sum ,new_no){
//     // new_no= no
//     if(no!=0){
//         let r=no%10
//         sum=sum*10+r
//         no=Math.floor(no/10)
//         return p(no,sum,new_no)
//     }
//     console.log(sum)

//     if(new_no==sum){
//         return "palindrome"
//     }
//     else{
//         return "not a palindrome"
//     }
// }
// console.log(p(121,0,121))




// 2^n                                             12

function power(n,i){
    if(i<=n){
         p=2**i
    return (power(n,i+1))
    }
   
    return p
    
}
console.log(power(6,0))




