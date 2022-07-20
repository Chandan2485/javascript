// Q1) Given a sentence and a word, add the given word to the end of the string.

// function appendEnd(str1, str2){
//     let str11=str1.split('')
//     let str22=str2.split('')
//     return str11.concat(str22).join('')
//   }
//   console.log(appendEnd('air','campus'))


// Q2)  Ravi wrote two javascript programs, each programs have a and b number of bugs. 
//      Calculate total number of bugs and return "Total number of bugs are a + b". Use template literal

// function numberOfBugs(a, b){

//     let c=a+b
//     return `Total number of bugs are ${c}`
   
//   }


// Q3)  Given a string and two index values, return the string from the start index to end index.

// function substring(str, a, b){
//     return str.slice(a,b)
//   }
//   console.log(substring('aircampus',3 ,9))


// Q4) Given a string, remove all the whitespaces and then return the new string.

// function removeSpace(str){
//     let str1=str.split('')
    
//    let  str2=str1.filter((s)=>{
//        return s!=' '
//      })
   
//      return str2.join('')
//    }
//    console.log(removeSpace('     java script'))


// Q5) Given a string, remove all the whitespaces from the start and then return the new string

// function removeSpace(str){
//     return str.trimStart()
//   }
//   console.log(removeSpace(" air campus "))


// Q6) Given a string, remove all the whitespaces from the end and then return the new string


// function removeSpace(str){
//     return str.trimEnd()
//   }
//   console.log(removeSpace(" air campus "))


// Q7)  Given a string, replace the first occurrences of Ram with Shyam

// function ramShyam(str){
// return str.replace(/ram/i,'Shyam')
//  }
// console.log(ramShyam('Ram owns a dog. Ram likes animals'))


// Q8) Given a string, replace all the occurrences of Ram with Shyam

// function ramShyam(str){
// return str.replace(/ram/ig,'Shyam')
//  }
// console.log(ramShyam('Ram owns a dog. Ram likes animals'))


// Q9)Given a strings, return all the characters of string separated by comma (,)

// function commaSep(str){
    //  let strans=''
    // for(i=0;i<str.length;i++){
    //   strans=strans+','+str[i]
    // }
    //  return strans.slice(1)
   
   
//    return str.split('').join(',')
   
     
//    }
//    console.log(commaSep('aircampus'))



// Q10) Given 3 strings, join string1 and string2 separated by string3. Return the final string.

// function stringSep(str1, str2, str3){
  
//     return str1.split(' ').concat(str2.split(' ')).join(` ${str3} `)
//   }
//   console.log(stringSep('air', 'campus', '-'))
