// Q.1   Take an integer input and print 'YES' if the integer is a mars number, else print 'NO'.


function marsNumber(n){
    counter =0;
  while(n>9){
    let sum=0
        while(n!=0){
          let x=n%10
          sum=sum+x
          n=Math.floor(n/10)
        }
    counter++;
    n=sum
  }
  // console.log(counter)
  if(counter%2==0&&counter!==0){
    return "YES"
  }
  else{
     return "NO"
  }
    
  }
  console.log(marsNumber(199))




//   Q.2  Input a Number and return number of digits. (using recursion only)



function numberOfDigits(n,count=0){
    // if(n<0){
    //   n=n*(-1)
    // }
    if(n!=0){
      a=n%10
      count=count+1
      n=Math.floor(n/10)
      return numberOfDigits(n,count)
    }
    return count
  }
  console.log(numberOfDigits(5950))




//   Q.3 Take a number and check whats the minimum number of digits 
//       that need to be changed to make it pallindrome.



function pallindrome(str){
    let n=str
    rev=0;
    count=0
    while(n!=0){
      x=n%10;
      rev=rev*10+x
      n=Math.floor(n/10)
    }
    // console.log(rev)
    //  console.log(str)
    if(rev==str){
      return 0
    }
    
    while(rev!=0 && str!=0) {
      a=rev%10;
      b=str%10;
      if(a!=b){
        count++
      }
      rev=Math.floor(rev/10)
      str=Math.floor(str/10)
    }
    return (count/2)
   
  }
  console.log(pallindrome(12345))




//   Q.4   Take an integer N and print the sum of series given below upto N numbers.
//          S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n)



function sum(n){
    s=0
    for(i=1;i<=n;i++){
      s=s+(2/(i+1))
      // console.log(s)
    }
     // s=s.toFixed(3)
    return parseFloat(s.toFixed(3))
  }
  console.log(sum(3))





// Q.5  For number from 1 to "n" count total numbers that are divisible by 3,
//      also find sum of all numbers that are divisible by 5,
//      if number is divisible by both 3 and 5 take product of those number. 
//      and finally return the sum of all three ans.




function calculate(n){
    count=0;
    sum=0;
    product=1;
    for(let i=1;i<=n;i++){
      if(i%3==0 && i%5==0){
        product=product*i
      }
      else if(i%5==0){
        sum=sum+i
      }
      else if(i%3==0){
        count++
      }
    }
    // console.log(count)
    // console.log(product)
    // console.log(sum)
   if(product==1){
     return (sum+count)
   }
    else{
      return (sum+count+product)
    }
  }
  console.log(calculate(10))



//   Q.6  Take a number and find the sum all the even digits of the number.
//        if there are no even digit in number return -1.




function evenSum(n){
    let sum=0
    while(n!=0){
       var a = n%10
      if(a%2==0){
        sum=sum+a
      }
        n=Math.floor(n/10)
    }
   if(sum>0){
      return sum
   }
    else{
       return (-1)
    }
  }
  console.log(evenSum(12346))


  
  