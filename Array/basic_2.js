// Q1)  A teacher is about to take the attendance of the class, 
//      you being the monitor someone informs you that one student is missing.
//      Check if the student is present in the class or not.


// function attendance(studentsInClass, student){
//     return (studentsInClass.includes(student))? 'Present' : 'Not Present'
//   }
//   console.log(attendance([2, 5, 10, 7, 5], 2)) 


// Q2)  Given an array of numbers, sort the array in ascending order and then return the sorted array.


// function sort(arr){
//     return arr.sort()
//   }
//   console.log(sort([2, 5, 7, 5]))
//   console.log(sort(['a', 'b', 'c']))


// Q3)  Given an array of strings, sort the array and then return concatinating 
//      the 2nd and 2nd last element of the array.


// function sortSum(arr){
//     arr=arr.sort()
//    return `${arr[1]}${arr[arr.length - 2]}`
//   }
//   console.log(sortSum(['2', '5', '10', '7', '5']))



// Q4)  Given an array, return the array in reverse order.


// function reverseArray(arr){
//     return arr.reverse()
//     }
// console.log(reverseArray([2, 5, 10, 7, 5]))


// Q5)  Given an array, a start index and an end index,
//      change all the elements to 0 from the start index to end index.

// function changeToZero(arr, start, end){
//     for(i=start;i<end;i++){
//       arr[i]=0
//     }
//     return arr
//   }
//   console.log(changeToZero([2, 5, 10, 7, 5], 1, 4))



// Q6)  Given an array, convert the given array to string.


// function arrString(arr){
//     let str=''
//     for(i=0;i<arr.length;i++){
//    (i==arr.length -1)?str =str + `${arr[i]}`: str =str + `${arr[i]},`
//     }
//     return str
//   }
//   console.log(arrString([2, 5, 10, 7, 5]))


// Q7)  Given an array of characters, convert the given array to string separated by ‘-’ hyphens.


// function arrString(arr){
//     return arr.join('-')
//     }
//     console.log(arrString([2, 5, 10, 7, 5]))



// Q8)  Given an array, start index and an end index. Return the array from the start index to end index


// function subArray(arr, start, end){
//     return arr.slice(start,end)
//   }
//   console.log(subArray([2, 5, 10, 7, 5, 5, 17, 20, 15, 44, 55],4,8))



// Q9)  Given an array and a number, add the number to the end of the array.


// function addEnd(arr, number){
//     arr.push(number)
//     return arr
//   }
//   console.log(addEnd([1, 2, 3] ,5))



// Q10)  Given an array and a number, add the number to the beginning of the array.


// function addBeginning(arr,num){
//     arr.unshift(num)
//     return arr
//   }
//   console.log(addBeginning([1, 2, 3] ,5))


// Q11)  Given an array, delete the last element of the array


// function removeEnd(arr){
//     arr.pop()
//    return arr
//  }
//  console.log(removeEnd([1, 2, 3]))


// Q12)   Given an array, delete the first element of the array


// function removeBeginning(arr){
//     arr.shift()
//      return arr
//    }
//    console.log(removeBeginning([1, 2, 3]))