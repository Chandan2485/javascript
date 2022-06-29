// Q.1     Accept the number of days from the user and calculate the charge for library according to following :
//         Till five days : Rs 0/day.
//         Six to ten days : Rs 3/day.
//         11 to 15 days : Rs 4/day
//         After 15 days : Rs 5/day



function calculateCharge(number_of_days){
    let x=number_of_days;
  if(x>15){
    return (5*3)+(5*4)+((x-15)*5)
  }
    else if(x>10){
       return (5*3)+((x-10)*4)
    }
     else if(x>5){
     return ((x-5)*3)
    }
     else {
      return 0
    }
    
  }
  console.log(calculateCharge(10))




// Q.2  Take a time in 24 hour fomrat and onvert it to 12 hour format.
//      Also if hour or minute is of single digit add "0" before it
//      Note: "0" has been added before 7 as it was single digit



function amPm(hr,min){
    if(hr==0){
      min = min<10 ? "0"+min:min;
      hr = hr<10 ? "0"+hr:hr;
      if(min<10){
        return ('12'+':'+min+' '+'AM')
      }
         else{
        return ('12'+':'+min+' '+'AM')
      }
    }
    else if(hr>=12){
      hr=hr-12;
      min = min<10 ? "0"+min:min;
      hr = hr<10 ? "0"+hr:hr;
    
      if(hr==0){
         if(min<10){
        return ('12'+':'+min+' '+'PM')
      }
      else{
        return ('12'+':'+min+' '+'PM')
      }
      }
    else{
      return (hr+":"+min+' PM')
      }
      
    }
     else{
      min = min<10 ? "0"+min:min;
      hr = hr<10 ? "0"+hr:hr;
      return (hr+":"+min+' AM')
    }
      
    }
    console.log(amPm(1,1))


    // Q.3  Write a code to take time in seconds and convert it into hour, mins and seonds


    function time(seconds){

      // return ?
    let h=Math.floor(seconds/3600);
      // console.log(h)
    let m=Math.floor((seconds%3600)/60);
       // console.log(m)
    let s=(seconds%3600)%60
       // console.log(s)
      return ('In '+seconds+' seconds '+h+' hours , '+m+' minutes and '+s+' seconds are possible')
    }
    console.log(time(5000))



// Q 4.  Write a code to take temperature in Fahrenheit and convert it to Celsius.



function temperature(temp){
  return (temp-32)*(5/9)
}

console.log(temperature(57))


// Q 5.   Take a number and find the "ans" by sum of sqaure of digits. 
// once you find this "ans" repeat the steps 
// ( I mean find sum of square of digits of ans) and repeat this process until you get 1.


function checkNumber(n){
  // let sum=0
  let counter =0;
  while(counter < 100 && n !=1 ){
    let sum=0
        while(n!=0){
          let x=n%10
          sum=sum+(x*x)
          n=Math.floor(n/10)
           // console.log(n)
        }
    counter++;
    n=sum
    // console.log(n)
  }
  
  if(n==1){
    return ('CodeSpecial')
  }
    else{
       return ('SomethingUnusual')
    }
  }
  console.log(checkNumber(173))



// Q 6.   Radhika wants to calculate the no. of balls present in n boxes. The nth box has n balls inside it,
//  n-1 box has n-1 balls inside it and so on till 1st box. Can you help her to calculate the total no. of balls
//   present in n boxes.


function totalBalls(n){
  let sum=0
  for(let i=1;i<=n;i++){
    sum=sum+i
  }
  return sum
  
    
  }
  console.log(totalBalls(5))



  // Q7.  Take two numbers and find product of all numbers between them that satisfy following condition 
//   (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4



function product(a,b){
  let p=1;
 for(let i=a; i<=b;i++){
   let c=Math.floor(i/10);
   if(i%2==0 && c%10==4){
     p=p*i
   }
 }
 if(p>1){
   return p
 }
 else {
   return 0
 }
}
console.log(product(40,41))