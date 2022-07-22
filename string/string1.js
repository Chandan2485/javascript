// Q1) Given a string, return the string in reverse

// function reverse(str){

  // let revstr='';
  // for(i=0;i<str.length;i++){
  //   revstr=str[i]+revstr
  // }
  // return revstr


// return str.split('').reverse().join('');
  
// }
// console.log(reverse('aircampus'))


// Q2) Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.

// function anagram(str1, str2){

//     if(str1.length != str2.length){return false}
  
//   let str11=str1.split('').sort().join('')
//   let  str22=str2.split('').sort().join('')
  
//    return (str11==str22)? true:false
  
//   }
//   console.log(anagram('elbow','below'))



// Q3) Given a string, if it is a palindrome return true else return false.


// function palindrome(str){

//     strrev=str.split('').reverse().join('')
//     return (str==strrev)? true : false
//   }
//   console.log(palindrome('arora'))


// Q4) Given a string, if the string is alphanumeric return true else return false.


// function alphanumeric(str){

//     let flag=false
//     for(i=0;i<str.length;i++){
//       if(!isNaN(str[i])){
//         // console.log (str[i])
//         flag=true
//       }
//     }
//     return flag
//   }
//   console.log(alphanumeric('aircampus9'))


// Q5)Given a string sentence, reverse the string word by word


// function reverse(str){

//     return  str.split(' ').reverse().join(' ')
    
//     }
//     console.log(reverse('the sky is blue'))


// Q6)Given a string, capitalize the first letter of each word.

// function capitalization(str){
//   let strans='';
  
//     let first=str[0].toUpperCase()
//     strans=first
  
//     for(i=1;i<str.length;i++){
//       if(str[i]==' '){
//          strans=strans+' '+str[i+1].toUpperCase()
//         i=i+1
//       }
//       else{
//         strans=strans+str[i]
//       }
//     }
//     return strans
//   }
//   console.log(capitalization('capitalize every word'))



// Q7)  Given a string, return the middle character, if the string length is odd, else return the middle two characters.


// function middleChar(str){
//   let len=str.length
//     if(len % 2!=0){
//       return str[(len-1) / 2]
//     }
//     else{
//       return str.slice((len/2)-1,(len/2)+1)
//     }
// }
// console.log(middleChar('test'))



// Q8) Given a string which contains an email address, return true if the given email is valid, else return false.


// function validEmail(str){
//   if(str.endsWith('@aircampus.in')){
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(validEmail('admin@aircampus'))