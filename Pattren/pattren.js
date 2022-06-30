
// Question 3.

// let num1=5;
// let c=1

// for(i=1;i<=num1;i++){
//   let str="";
//   for(j=1;j<=i;j++){
   
//     if(c<=9){
//         str=str+`${c}   `
//         c++
//     }
//     else{
//         str=str+`${c}  `
//         c++ 
//     }
//   }
//   console.log(str)
// }




// Question 4.

// let a=0;
// let b=1;
// let i=1;
// let x=5

// for(j=1;j<=x;j++){
//     let str=""
// for(k=1;k<=j;k++){
//     while(i<=((j*(j+1)/2))){
//         // console.log(a)
//         str=str+`${a} `
//         c=a+b
//         a=b
//         b=c
//         i++
//     } 
// }
// console.log(str)
// }








// Question 1.


// let n=11;
// for(i=1;i<=n;i++){
//  let str=''
//  for(j=1;j<=n;j++){
//     if(i==j || (i+j==n+1)){
//         str=str+`${' * '}`
//     }
//     else{
//         str=str+`${'   '}`
//     }
//  }
//  console.log(str)
// }



// Question 2.


let n=3;
for(i=1;i<=n;i++){
 let str=''
 for(j=n;j>i;j--){
   str=str+`${'   '}`
 }
 for(k=1;k<(i*2);k++){
  str=str+" * "
 }
 console.log(str)
}

