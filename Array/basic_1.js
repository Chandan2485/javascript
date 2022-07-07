// Q1) Create an Array with the following elements: “Bike”, “Scooter”, “Car”, “Truck”, “JCB” , “Helicopter” 
//      and return the 4th element from the Array.


// function createArray(){
//     let elements =['bikes','Scooter','Car','Truck','JCB','Helicopter']
//     return elements[3]
//   }
//   console.log(createArray())


// Q2)  You are given an array arr, if the length of the array is greater than 5 return “Hello”
//       else return “World”


// function arrayHelloWorld(arr){
//     return (arr.length > 5)?"Hello":"World"
//   }
//   console.log(arrayHelloWorld([1, 2, 3 ,4 ,5 ,6 ,7]))



// Q3)  You are given an integer array as function parameters. 
//      Find and return the sum of the first and last element of the array.


// function sumFirstLast(arr){
//     return arr[0]+arr[arr.length -1]
    
//   }
//   console.log(sumFirstLast([1, 2, 3 ,4 ,5 ,6,7]))


// Q4  Aunt May wants to distribute candies to 5 childrens, 
//    you are given an array of 5 elements, each element depicts how many candies each child will get.
//    Find and return how many candies Aunt May have in total.


// function totalCandies(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//       sum += arr[i]
//     }
//    return sum
//   }
//   console.log(totalCandies([1, 3, 4, 7, 5]))


// Q5)  You are given two arrays arr1 and arr2, concatenate arr1 and arr2, and return the resulting array.


// function arrayConcat(arr1, arr2){
//     return arr1.concat(arr2)
//   }
//   console.log(arrayConcat([1, 3],[2, 5]))


// Q6)  Given a variable arr as function parameter, 
//      return “YES” if the given variable arr is an array else return “NO”


// function isArray(arr){
//     return (Array.isArray(arr) == true)? 'YES' : 'NO'
//   }
//   console.log(isArray([1,2,3]))



// Q7) You are given two variables arr and element as function parameters.
//     Check if the given variable arr is an array or not, 
//     if it is an array return the index of element in the array, else return “Not Array”.
//     Note: If variable arr is an array but element is not present inside of it return -1


// function elementIndex(arr, element){
//     if(Array.isArray(arr)==false){return "Not Array"}
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]==element){return i}
//     }
//     return -1
//   }
//   console.log(elementIndex(123,3))



// Q8)  Given an integer array and an element as function parameter,
//      return the index of the given element if it exists, else return “Not Found”. 
//      If the array contains multiple occurence of an element return the index of last occurrence of the element.


// function indexOf(arr, element){
//     for(i=arr.length -1;i>=0;i--){
//       if(arr[i]== element){return i}
//     }
//     return "Not Found"
//   }

//   console.log(indexOf([2,5,10] ,9))



let nums=[1,2,3,4,5,6,7
]