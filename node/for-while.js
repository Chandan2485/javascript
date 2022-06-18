


                                                 //1   print all number

// let a = parseInt(process.argv[2])
// for (var i = 1; i <= a; i++) {             //  for
//     console.log(i)
// }

// let a = parseInt(process.argv[2])
// let i = 1;                                  // while
// while (i <= a) {
//     console.log(i)
//     i++
// }


                                                 //2  even no

// let a = parseInt(process.argv[2]);
// for (var i = 1; i <= a; i++) {                 for
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// let a = parseInt(process.argv[2]);
// let i = 1
// while (i <= a) {                           while
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }



            
                                                   //3  reverse no

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);                 for
// for (var i = b; i >= a; i--) {

//     console.log(i)
// }

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let i = b
// while (i >= a) {                               while
//     console.log(i)
//     i--
// }



                                                  //4 factorial


// let a = parseInt(process.argv[2]);
// let fact =1
// for (let i = 1; i <=a; i++) {               for
//   fact=fact*i
// }
// console.log(fact)

// let a = parseInt(process.argv[2]);
// let fact =1
// let i=1
// while (i <=a;) {                            while
//   fact=fact*i
//   i++
// }
// console.log(fact)



                                           //5 Fibonacci number


// let a=1;
// let b=1;
// for (let i= 1; i <= 10; i++) {           for
//    console.log(a)
//    let c=a+b;
//    a=b;
//    b=c; 
// }

// let a=1;
// let b=1;
// let i=1;
// while(a<=10){                           while
//    console.log(a)
//    let c=a+b;
//    a=b;
//    b=c; 
//    i++
// }



                                                    // 6 print all no

// let a = parseInt(process.argv[2]);
// while(a!=0){
//     let y=a%10;
//     console.log(y)                           while
//     a=Math.floor(a/10)
//   }



// let x = parseInt(process.argv[2]);
// for (x>0;x!=0;x=Math.floor(x/10)){        for
//     let y=x%10;
//     console.log(y)
    
//   }






                                                        //7  prime or not 

// let a = parseInt(process.argv[2]);
// let count=0
// for (let i= 2; i <a; i++) {
//     if(a%i==0){
//         count++
//     }                                                 for
// }
// if(count==0){
//     console.log('prime no')
// }
// else{
//     console.log('non prime no')
// }


// let a = parseInt(process.argv[2]);
// let count=0
// let i= 2
// While(i <a;) {
//     if(a%i==0){
//         count++                                while
//     } 
// i++
// }
// if(count==0){
//     console.log('prime no')
// }
// else{
//     console.log('non prime no')
// }







                                                          // 8 hallo

// for(let i=1; i<=100; i++){
//     if(i%15==0){
//         console.log('Hello World')
//     }
//     else if(i%5==0){
//         console.log('World')                                     for
//     }
//     else if(i%3==0){
//         console.log('Hello')
//     }
// }


// let i=1;
// While( i<=100;){
//     if(i%15==0){
//         console.log('Hello World')
//     }
//     else if(i%5==0){                                         while
//         console.log('World')
//     }
//     else if(i%3==0){
//         console.log('Hello')
//     }
// i++
// }




                                                                 // 9 palindrome number

// let x = parseInt(process.argv[2]);
// let a =x;
// let rev=0
// while (x != 0) {
//     rem = x % 10;
//     rev = rev * 10 + rem;
//     x=Math.floor(x/10)
// }                                                       while
// if(a==rev){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }


// let x = parseInt(process.argv[2]);
// let a =x;
// let rev=0
// for ( x>0;x != 0; x=Math.floor(x/10) ) {
//     rem = x % 10;
//     rev = rev * 10 + rem;                           for
// }
// if(a==rev){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }



                                              // 10 perfect no
                                              
// let x = parseInt(process.argv[2]);
// let perf=0;
// for(let i=1;1<x; i++){
//     if(x%i==0){
//         perf=perf+i
//     }
// }   
//                                                 //    for
// if(perf==x){
//     console.log('perfect no')
// }
// else{
//     console.log('not a perfect no')
// }


// let x = parseInt(process.argv[2]);
// let perf=0;
// let i=1;
// while(i<x){
//     if(x%i==0){
//         perf=perf+i
//     }
//     i++
// }   
//                                                   //    while
// if(perf==x){
//     console.log('perfect no')
// }
// else{
//     console.log('not a perfect no')
// }
