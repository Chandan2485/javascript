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



// Q5)  A manager wants to increment each of its employees' salaries by Rs.1000. 
//      You are given an array with the current salary of each employee. 
//      Return the array containing the incremented salary. Use array callback methods.


// function goodManager(arr){
//     let incrementedSalary=[]
//      for(i=0;i<arr.length;i++){
//        incrementedSalary [i]=arr[i]+1000
//      }
//      return incrementedSalary
//    }
//    // console.log(goodManager([1000,2000, 3000]))
   
   
   
//    function i_salary(callback){
//      return callback ([1000,2000, 3000]);
//    }
//    console.log(i_salary(goodManager))


// Q6)   Mickey Mouse gave a task to Goofy. The task is that Mickey will give Goofy an array of numbers and
//       Goofy will find the square of all the numbers.. Help Goofy to find the square of given numbers. 
//       Use callback methods.


// function square(arr){
//     let s_arr=[]
//       for(i=0;i<arr.length;i++){
//         s_arr [i]=(arr[i]**2)
//       }
//       return s_arr
//     }
//     // console.log(square([2, 3, 6]))
//     exports.square = square
    
    
//     function help(callback){
//       return callback([2, 3, 6])
//     }
//     console.log(help(square))



// Q7)  Amit goes to a restaurant, but after seeing the huge menu. 
//      He was confused about what to order. Amit wanted to have something which has Paneer and does not have Rice.
//      Help Amit choose a food item.


// function order(menu){
//     for(let i=0;i<menu.length;i++){
//       if(menu [i].includes('Paneer') == true && menu [i].includes('Rice') == false){
//         return (menu [i]);
//       }
//     }
//   }
//   console.log(order(['Paneer Fried Rice', 'Chicken Biryani','Paneer Paratha', 'Cold Coffee']))


// Q8)  Amit was not satisfied with your food choice, 
//      so he wants you to tell him all the food items that contain Paneer and do not contain Rice.



// function amitHelp(menu){
//     let menu_1=[]
//       for(let i=0;i<menu.length;i++){
//       if(menu [i].includes('Paneer') == true && menu [i].includes('Rice') == false){
//            menu_1.push(menu [i])
//       }
//     }
//     return menu_1
//   }
//   console.log(amitHelp(['Paneer Butter Masala', 'Paneer Fried Rice', 'Chicken Biryani', 
//   'Cold Coffee', 'Paneer Kofta']))
        


// Q9)   Given an array of numbers, create a new array by multiplying each number with 
        //  its square root from the given array.Return original array concatenated with the new array. 
        //  Use map callback method.


        //  function multiply(arr){
        //      let m_arr=[];
        //       for(let i=0;i<arr.length;i++){
        //         m_arr[i]=Math.sqrt(arr[i])*arr[i]
        //          }
        //       return m_arr
        //     }
        //     // console.log(multiply([4, 9, 25, 49]))
        //     exports.multiply = multiply
            
            
        //     function multiplyarr(callbacks){
        //       return callbacks([4, 9, 25, 49]);
        //     }
        //     console.log(multiplyarr(multiply))
