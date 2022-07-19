// Q1) Given two arrays. Check if both arrays are equal or not.

// function isArray(arr1, arr2){
//     if(arr1.length != arr1.length){return false}
    
//     let arr11=arr1.sort(function(a,b){return a-b })
//     let arr22=arr2.sort(function(a,b){ return a-b})
  
//     for(i=0;i<arr11.length;i++){
//       if(arr11[i] != arr22[i]){
//         return false
//       }
//     }
//     return true 
//   }
//   console.log(isArray([1, 5, 7, 8],
//   [5, 8, 7, 1]))


// Q2) Given an integer array, and a number ‘n’. 
//    In the range of [1 to n] add all the numbers in the middle of the array.

// function addMiddle(arr, n){
//     let len=Math.ceil(arr.length/2)
//     // console.log(len)
//     for(i=1;i<=n;i++){
//        // console.log(i)
//       arr.splice(((len-1)+i),0,i)
//     }
//     return arr
//   }
//   console.log(addMiddle([1, 2, 3],5))


// Q3) Given an array, the array has elements and operation to be performed. 
//     The operations are ADD_END’, REM_END’, ‘ADD_BEG’,’REM_BEG’.
//     Create a new array by performing the given operations after each element.
//     Return the resulting array.

// function operations(arr){
//     let ans=[]
//     for(i=0;i<arr.length;i++){
  
//       if(arr[i]>0){
//         x=arr[i];
//       }
//       else if(arr[i]==='ADD_BEG'){
//       ans.unshift(x)
//     }
//       else if(arr[i]==='ADD_END'){
//       ans.push(x)
//     }
//      else  if(arr[i]==='REM_BEG'){
//       ans.shift()
//     }
//     else   if(arr[i]==='REM_END'){
//       ans.pop()
//     }
//     }
//     return ans
//   }
//   console.log(operations([2, 'ADD_BEG', 'REM_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END', 'REM_BEG']))


// Q4) Unlce Ben is giving choclates to all the kids.
//     He wants to find out which kid has got the highest number of choclates and
//     which kid got least number of choclates


// function find_min_max(arr){
//     let newarr=[...arr]
//     let arrs=arr.sort(function(a,b){ return a-b })
  
//     let max=arrs[arrs.length-1], min=arrs[0];
  
//      return [(newarr.indexOf(max)+1),(newarr.indexOf(min)+1)]
//   }
//     console.log(find_min_max([2,3,1,5,7]))


// Q5) Unlce Ben decides to give chocolates to kids in his neighbourhood.
//    He predecides the number of chocolates he wants to give each kid and arranges them in a bag.
//   Now he wants to give 2 more chocolates to kids who less than 5 and reduce 1 chocolate who got more than 10.

// function more_choclates(arr){
//     for(i=0;i<arr.length;i++){
//       if(arr[i]<5){
//         arr[i]=arr[i]+2
//       }
//       else if(arr[i]>10){
//         arr[i]=arr[i]-1
//       }
//     }
//      return arr
//    }
//    console.log(more_choclates([1, 6, 7, 11]))


// Q) Mary wants to distribute pens to all the kids in her neighbourhood.
//    Can you help her by creating an array where all the kids except her neighbour get 'm' number of pens
//    and her neighbour kids get 'm+5'. Please note she doesn't have a kid.
//    Three numbers m ,n and pos. Here m is the number of pens, n is the number of houses with kids and 
//    pos is where Mary lives.

// function neighbours(m,n,pos){
//     let arr=[]
//     for(i=0;i<n;i++){
//       arr[i]=m
//     } 
//   if(pos==0){
//       arr.splice(pos,2,0,(m+5))
//     }
//    else if(pos==n-1){
//      arr.splice((pos-1),2,(m+5),0)
//    }
//   else{
//     arr.splice((pos-1),3,(m+5),0,(m+5))
//   }
//   return arr
//   }
//   console.log(neighbours(5,10,0))


// Q6)Given an integer array, and a number ‘n’, please return the sum of integers at odd position
//    and sum of integers at even position

// function odd_even_position(arr) {
//     let oddsum = 0, evensum = 0;
//     for (i = 0; i < arr.length; i++) {
//       if (i% 2 == 0) {
//         evensum += arr[i]
//       }
//       else {
//         oddsum += arr[i]
//       }
//     }
//     return [oddsum,evensum]
//   }
//   console.log(odd_even_position([1,2,3]))


// Q7) Given an integer array, find all the elements which are divisible by the index position in which they 
//     are present. Consider the index of array starts from 1

// function count_all_divisions(arr){

//     let arra=arr.filter(function(a,i){
//       return (a%(i+1)==0)
//     })
//     return arra.length
      
//     // let count=0;
//     //   for(i=0;i<arr.length;i++){
//     //     if(arr[i]%(i+1)==0){count++}
//     //   }
//     //   return count
    
      
//     }
//     console.log(count_all_divisions([1, 5, 7, 8]))
