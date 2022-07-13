let array=[0,1,2,3,4,5,6,7,8,9,10,11];

// ---------------------------------------------------------

// length--------------------------length of array

// let x=array.length;
// console.log(x);


// Array or not-----------------------true/false

// let x=Array.isArray(array);
// console.log(x)

// ----------------------------------------------------------------------

// push------------------------------add value at end

// array.push("chandan")
// console.log(array)

// pop---------------------------------add value at end

// array.pop()
// console.log(array)

// ----------------------------------------------------------------------

// unshift--------------------------add value at start

// array.unshift("chandan")
// console.log(array)

// shift-----------------------------remove value at start

// array.shift()
// console.log(array)

// ----------------------------------------------------------------------

// Includes(value)  --------------------->true/false

// let x=array.includes(10)
// console.log(x);

// let x=array.includes(13)
// console.log(x);

// Includes(value,n) start from n index  ------------>true/false

// let x=array.includes(10,3)
// console.log(x);

// let x=array.includes(10,6)
// console.log(x);

// --------------------------------------------------------------------------

// indexOf(value)--------------------------if present return index else -1

// let x=array.indexOf(10)
// console.log(x)

// let x=array.indexOf(15)
// console.log(x)

// indexOf(value,n)  start from n index-------------------if present return index else -1

// let x=array.indexOf(10,2)
// console.log(x)

// let x=array.indexOf(15,5)
// console.log(x)

// --------------------------------------------------------------------------

// lastIndexOf(value)--------------------------if present return index else -1

// let x=array.lastIndexOf(10)
// console.log(x)

// let x=array.lastIndexOf(15)
// console.log(x)

// lastIndexOf(value,n)  start from n index-------------------if present return index else -1

// let x=array.lastIndexOf(10,2)
// console.log(x)

// let x=array.lastIndexOf(15,5)
// console.log(x)

// ---------------------------------------------------------------------------------------------------------

// Reverse------------------------------------>Reverse the array

// let x=array.reverse()
// console.log(x)

// concat------------------------------------>concat more array

// let array1=[20,21,22,23,24,25]
// let array2=[30,31,32,33,34,35]

// let x=array.concat(array1)--------------concat array and array1 return rew array x
// console.log(x)

// let y=array.concat(array2)--------------concat array and array2 return rew array y
// console.log(y)

// let z=array1.concat(array2)--------------concat array1 and array2 return rew array z
// console.log(z)

// let a=x.concat(array2)--------------concat array and array1 return rew array x and concat array2 return a
// console.log(a)

// ---------------------------------------------------------------------------------------------------------------

// toString------------------------convart array to string ","

// let x=array.toString()
// console.log(x)

// join("/")------------------------convart array to string "any thing we put like = / , "

// let x=array.toString('/')
// console.log(x)

// ------------------------------------------------------------------------------------------------------------



// let arr1=[1,2,3,4]
// let arr2=[4,6,7,8]
// // let x=i<(arr1.length+arr2.length)-1
// let arr=[]
// for(i=0;i<arr1.length;i++){
//    arr[i]=arr1[i]
// }

// for(i=0;i<arr2.length;i++){
//     arr[arr1.length+i]=arr2[i]
//  }
// console.log(arr)