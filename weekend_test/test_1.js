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



Q.3  