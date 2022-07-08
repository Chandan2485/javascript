// Q1) Given two integer arrays, remove all the odd numbers from both the arrays and
//     merge them into one array. Return the new array in descending order.


// function oddOne(arr1, arr2){
//     let a3=arr1.concat(arr2)
//      let a4=a3.filter((num)=>{
//       return num%2==0
//     })
//      return a4.sort((a,b)=>{
//       return b-a
//     })
//   }
//   console.log(oddOne([2, 5, 10, 7, 5],[5, 17, 20, 15, 44, 55]))


// Q2)  Given an array, if the array contains duplicate elements return true, else return false


//  function isDuplicate(arr){
//     for(i=0;i<arr.length;i++){
//   return (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))? false:true
//     }
//   }
//   console.log(isDuplicate([1, 2, 3, 4, 5]))



// Q3)  You are given a sorted array in ascending order, 
//      remove the duplicate elements and return the new sorted array.


// function deleteDuplicate(arr){
//     return [...new Set(arr)]
//   }
//   console.log(deleteDuplicate([2, 5, 5, 7, 10, 12, 12, 15]))



// Q4)  When God was creating planets, he forgot to create one planet. Can you find which planet it is ?
//      Note: You are given an array of numbers. Each number denotes one planet. 
//            The array contains elements in the range of [0, array-size].


// function lostPlanet(planets){
//     for(i=0;i<planets.length;i++){
//       if (planets.includes(i) == false){
//         return i
//       }
//     }
//   }
//   console.log(lostPlanet([1, 5, 7, 8, 3, 0, 2, 6]))