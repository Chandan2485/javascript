// Q1. Print Pattren

// 1
// 3 6
// 10 15 21
// 28 36 45 55
// 66 78 91 105 120

// function sum(n){
//     let x=0
//     let z=0
//     for(i=1;i<=n;i++){
//       let str=''
//       for(j=1;j<=i;j++){
//           x++
//           z=z+x
//           str=str+`${z} `
//       }
//     console.log(str)
//     }
//   }
//   console.log(sum(5))


// Q2. Print Pattren

// 12345
// 23451
// 34512
// 45123
// 51234

// function pattern(n){
//     for(i=1;i<=n;i++){
//       str=''
//       let k=i
//     for(j=1;j<=n;j++){
//       str=str+`${k}`
//       k++
//       if(k>5){
//         k=1
//       }
//     }
//       console.log(str)
//     }
//   }
//   console.log(pattern(5))



// Q3. Print Pattren


// 1
// 01
// 101
// 0101
// 10101
// 010101

// let n = 6;
// let str = "";
// for(let i = 1; i <= n ; i++){
  
//     if(i%2 == 0){
//       str = "0" + str 
//     }else{
//       str = "1" + str 
//     }
//   console.log(str);
// }


// Q4. Print Pattren

// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5


// function pattern(n){
//     let a=0
//     for(i=n;i>=1;i--){
//       str=''
//       let sum=0
//     for(j=i;j<=n;j++){
//       str=str+`${j}`
//       sum=sum+j
//     }
//         console.log(str)
//       // console.log(sum)
//        a=a+sum
//     }
//   return a
//   }
//   console.log(pattern(5))


// Q5. Print Pattren


// 8 8 8 8 8 8
// 8 8     8 8
// 8         8
// 8 8     8 8
// 8 8 8 8 8 8


// function pattern(n){
//     let x=n/2
//     let y=x-1
    
      
//     for(i=1;i<=x;i++){
//       str=''
//     for(j=i;j<=x;j++){
//       str=str+"8 "
//     }
//     for(k=1;k<=i-1;k++){
//       str=str+"  "
//     }
//     for(k=1;k<=i-1;k++){
//       str=str+"  "
//     }
//       for(j=i;j<=x;j++){
//       str=str+"8 "
//     }
//       console.log(str)
//     }
    
    
//     for(i=1;i<=y;i++){
//       str=''
//       for(j=1;j<=i+1;j++){
//       str=str+"8 "
//       }
//       for(k=i;k<y;k++){
//       str=str+"  "
//     }
//        for(k=i;k<y;k++){
//       str=str+"  "
//     }
//      for(j=1;j<=i+1;j++){
//       str=str+"8 "
//       }
//        console.log(str)
//     }
//     }
    
//     console.log(pattern(20))


// Q6. Print Pattren
// Take a number and return all the even digits of the number.

// function evenDigits(n){
//     let new_n =n
//     let str=""
//     let rev=0
//     let c=0
//      let i=0
//      let j=0
//   while(n!=0){
//     let x=n%10
//     rev=rev*10+x
//     n=Math.floor(n/10)
//     i++
//   }
//   while(rev!=0){
//     let a=rev%10
//     if(a%2==0){
//       str=str+`${a}`
//       c++
//     }
//     rev=Math.floor(rev/10)
//     j++
//   }
// let k=i-j
// for(l=1;l<=k;l++){
//   str=str+"0"
// } 
// if(new_n==0){
//   return `${new_n}`
// }
//  else if(k!=0){
//     return str
//   }
//  else if(c==0 ){
//     return ("-1")
//   }
//   else{
//     return str
//   }
// }
//  console.log(evenDigits(10010))


// Q7. Print Pattren

// A number is called Aircampus number if the sum of its own digits each raised
//  to the power of the number of digits is equal to the original number itself.

// function aircampus(n){
//     let x=n
//     let y=n
//     let c=0
//     let a=0
//     while(n!=0){
//         c++
//         n=Math.floor(n/10)
//     }
//    while(x!=0){
//      b=x%10
//      a=a+b**c
//       x=Math.floor(x/10)
//    }
//     if(a==y){
//       return "aircampus"
//     }
//     else{
//        return "no"
//     }
//   }
//   console.log(aircampus(1234))

// Q8. Print Pattren

// A special number is a number which is equal to the sum of the factorials of its digits.
//  Example: For number = 145,
//  the output should be 1! + 4! + 5! = 145 Hence 145 is a special number.


// function specialNumber(n){
//     let a=n,sum=0
  
//     if(a==0){
//     return "NO"
//     }
//     while(n!=0){
//       let x=n%10
//       let fact=1
//       for(let i=1;i<=x;i++){
//         fact=fact*i
//       }
//       sum=sum+fact
//       n=Math.floor(n/10)
//     }
//     if(a==sum){
//       return "YES"
//     }
//     else{
//       return "NO"
//     }
//   }
//   console.log(specialNumber(2))