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


// let n=5;
// for(i=n;i>=1;i--){
//  let str=''
//  for(j=n;j>i;j--){
//    str=str+`${' '}`
//  }
//  for(k=1;k<(i*2);k++){
//  if(k>1 && k<(i*2)-1){
//  str=str+`${' '}`
//  }
// else{
//   str=str+`${'*'}`
// }

//  }
//  console.log(str)
// }





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




// Question 5.


// let x=9;
// let y=(x+1)/2

//                                 //  for upper part
// for(i=1;i<=y;i++){
//   let a=i
//   // let b=i
//   let str=""
//   for(j=i;j<y;j++){
//     str=str+`${'  '}`
//   }
//   for(k=1;k<=i;k++){
//     str=str+`${a} `
//     a++
//   }
//   a--
//   for(l=1;l<i;l++){
//     a--
//     str=str+`${a} `
//   }
//   console.log(str)
// }

//                                   // for lower part 

// for(i=1;i<=y-1;i++){
//   str=""
//   for(j=1;j<=i;j++){
//     str=str+`${'  '}`
//   }
//   let z=y-i
//   for(k=i;k<=y-1;k++){
//     str=str+`${z} `
//     z++
//   }
//   z--
//   for(l=i;l<y-1;l++){
//     z--
//     str=str+`${z } `
//   }
//   console.log(str)
// }