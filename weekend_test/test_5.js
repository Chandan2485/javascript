// console.log(!!0)
// let a="2", b=1
// let a =[1,2,3]

// let a=1.00001
// console.log(Math.ceil(a))

// let arr=[2,1,9,7,5,11,1]

// let min=arr[0]

// for(let i=0;i<arr.length;i++){

//     if(arr[i]<min)
//     min=arr[i]
// }
// // console.log(min)
// // let m=min
// for(let i=0;i<arr.length;i++){

//     if(arr[i]==min){
//     console.log(i)
//     break;
//     }
// }


// let obj={
//     chandan: 26,
//     suman: 25,
//     abhi:27,
//     anup:24,
// }

// for(let key in obj){
//     console.log(`Name is ${key} and age is ${obj[key]}`)
// }

// let arr=[2,3,8,3,9,7,3]


// let filterarr=arr.filter(function(num){
//     return num>5
// })

// console.log(filterarr)

// let n=5;

// function getfact(num,fact=1){

// if(num>0){
//     fact=fact*num
//     return getfact(num-1,fact)
// }

// return fact
// }
// console.log(getfact(5))


// Given an integer array, find all the elements which are divisible by n and return the count

// function count_all_divisions(arr,n){

    // let count = 0;
    // for(i=0;i<arr.length;i++){
    //   // console.log(i)
    //    if(arr[i]%n==0){
    //      count++
    //    }
    // }
    // return count
  
  
  
  // return arr.filter(function(a){return (a%n==0)}).length
    
    
//   }
//   console.log(count_all_divisions([1,5,7,8],1))



// Given an array, return the descending order

// function descending_order(arr){
//     let c=0,v=0
//       for(i=0;i<arr.length;i++){
//         v++
//       for(j=i+1;j<=arr.length;j++){
//         c++
//         if(arr[i] < arr[j]){
//           temp = arr[i]
//           arr[i]=arr[j]
//           arr[j]=temp
//         }
//       }
//       }
//       console.log(c,v)
//       return arr
//     }
//     console.log(descending_order([4, 3, 6,1,56,78,12,27,11,10,100]))



// function linearSearch(arr,target){
//   for(i=0;i<arr.length;i++){
//     if(arr[i]==target){return i}
//   }
//   return -1
// }
// console.log(linearSearch([4, 3, 6,1,56,78,12,27,11,10,100],11))


// function binarySearch(arr,target){
// arr.sort((a,b)=>{return a-b})
// console.log(arr)

// let right=arr.length-1,left=0
// while(right>=left){
// mid=Math.floor((left+right)/2)
// if(arr[mid]==target){return mid}
// else if(arr[mid]>target){right=(mid-1)}
// else {left=(mid+1)}
// }
// return -1
// }
// console.log(binarySearch([4, 3, 6,1,56,78,12,27,11,10,100],11))



// function bubbleSort(arr){
// for(i=0;i<arr.length-1;i++){
//   for(j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//       let temp=arr[j]
//       arr[j]=arr[j+1]
//       arr[j+1]=temp
//     }
//   }
// }
// return arr
// }
// console.log(bubbleSort([4, 3, 6,1,56,78,12,27,11,10,100,2]))



// function bubbleSort(arr){

// }
// console.log(bubbleSort([4, 3, 6,1,56,78,12,27,11,10,100]))


// console.log(!0,1)
// console.log(!false,2)
// console.log(!null,3)
// console.log(!undefined,4)
// console.log(!-0,5)
// console.log(!0n,6)
// console.log(!NaN,7)
// console.log(!"",8)

// console.log(!true,1)
// console.log(!{},2)
// console.log(![],3)
// console.log(!42,4)
// console.log(!-42,5)
// console.log(!'0',6)
// console.log(!'false',7)
// console.log(!12n,8)
// console.log(!3.14,9)
// console.log(!-3.14,10)
// console.log(!Infinity,11)
// console.log(!-Infinity,12)


// console.log(typeof (0),1)
// console.log(typeof (-NaN),8)
// console.log(typeof (Infinity),8)
// console.log(typeof (undefined),7)
// console.log(typeof (''),2)
// console.log(typeof (true),3)
// console.log(typeof ([]),4)
// console.log(typeof ({}),5)
// console.log(typeof (null),6)


// console.log(NaN*NaN)
// var x=9


// console.log(Infinity)
// console.log(null)
// console.log([])
// console.log({})
// console.log(undefined)

// console.log(1 && 2 && '')


// function abc(num,target,n){
// if(n==0){
//   return -1
// }
// if(num[n]==target){
//   return n
// }
// return abc(num,target,n-1)
// }
// console.log(abc([1,2,3,4,5,6],3,7))



// function lsearce(arr,target){

//   for(i=0;i<arr.length;i++){
//     if(arr[i]==target){
//       return i
//     }
//   }
//   return -1
// }
// console.log(lsearce([4, 3, 6,1,56,78,12,27,11,10,100],1))


// function binary(arr,target){

//   let left=0,right=arr.length-1
//   while(right>=left){
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]==target){return mid}
//     else if(arr[mid]>target){right=mid-1}
//     else{left=mid+1}
//   }
//   return -1
// }
// console.log(binary([1,2,3,4,5,6,7,8,9,10],11))


// function bubbleSort(arr){

//   for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//       if(arr[j]>arr[j+1]){
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//       }
//     }
//   }
// return arr
// }
// console.log(bubbleSort([4, 3, 6,1,56,78,12,27,11,10,100]))



// function slection(arr){
// for(i=0;i<arr.length;i++){
//  let min=i
//  for(j=i+1;j<arr.length;j++){
//     if(arr[j]>arr[min]){
//       min=j
//     }
//  }
//  if(i!=min){
//     let temp=arr[i]
//     arr[i]=arr[min]
//     arr[min]=temp
//  }
// }
// return arr
// }
// console.log(slection([4, 3, 6,1,56,78,12,27,11,10,100]))



// function linearSearch(arr,target){
//  for(let i=0;i<arr.length;i++){
//   if(arr[i]==target){
//     return i
//   }
//  }
//  return -1
// }
// console.log(linearSearch([1,5,4,8,9,7,3,4,5,6,5,4,62,8,9],7))



// function binarySearch(arr,target){
//  let left=0,right=arr.length-1

//  while(right>=left){
//   let mid=Math.floor((left+right)/2)
//   if(arr[mid]==target){return mid}
//   else if(arr[mid]>target){right=mid-1}
//   else{left=mid+1}
//  }
//  return -1
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],5))



// function bubbleSort(arr){
// for(i=0;i<arr.length-1;i++){
//   for(j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//       let temp=arr[j]
//       arr[j]=arr[j+1]
//       arr[j+1]=temp
//     }
//   }
// }
// return arr
// }
// console.log(bubbleSort([1,5,4,8,9,7,3,4,5,6,2,4,62,8,9]))



// function slection(arr){
// for(i=0;i<arr.length;i++){
//  let min=i
//  for(j=i+1;j<arr.length;j++){
//     if(arr[j]<arr[min]){
//       min=j
//     }
//  }
//  if(i!=min){
//     let temp=arr[i]
//     arr[i]=arr[min]
//     arr[min]=temp
//  }
// }
// return arr
// }
// console.log(slection([4, 3, 6,1,56,78,12,27,11,10,100]))


// function insertionsort(arr){
//   for(i=0;i<arr.length;i++){
//     let temp =arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>temp){
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=temp
//   }
//   return arr
// }
// console.log(insertionsort([4, 3, 6,1,56,78,12,27,11,10,100]))


// function lnearsearch(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//       return i
//     }
//   }
//   return -1
// }
// console.log(lnearsearch([4, 3, 6,1,56,78,12,27,11,10,100],15))


// function binarySearch(arr,target){
//   let left =0,right=arr.length-1;

//   while(right>=left){
//     let mid=Math.floor((left+right)/2)

//     if(arr[mid]==target) return mid
//     else if(arr[mid]>target) right=mid-1
//     else left=mid+1
//   }
//   return -1
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],7))



// function bubbleSort(arr){
// for(i=0;i<arr.length-1;i++){
//   for(j=0;j<arr.length-1-i;j++){
//     if(arr[j]>arr[j+1]){
//       let temp=arr[j]
//       arr[j]=arr[j+1]
//       arr[j+1]=temp
//     }
//   }
// }
// return arr
// }
// console.log(bubbleSort([4, 3, 6,1,56,78,12,27,11,10,100]))




// function slectionsort(arr){
// for(i=0;i<arr.length;i++){
//   let min=i
//   for(j=i+1;j<arr.length;j++){
//     if(arr[j]<arr[min]){
//       min=j
//     }
//   }
//   if(i!=min){
//     let temp=arr[i]
//     arr[i]=arr[min]
//     arr[min]=temp
//   }
// }
// return arr
// }
// console.log(slectionsort([4, 3, 6,1,56,78,12,27,11,10,100]))



// function insertionsort(arr){
//   for(i=1;i<arr.length;i++){
//     let temp=arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>temp){
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=temp
//   }
//   return arr
// }
// console.log(insertionsort([4, 3, 6,1,56,78,12,27,11,10,100]))






// function Student(fname,lname,course,age,date,mob,email){
//       this.firstname = fname,
//       this.lastname =lname,
//       this.mobile_no=mob,
//       this.email_id=email,
//       this.age=age,
//       this.course=course,
//       this.date=date,
//       this.fullname=function(){
//         return this.firstname+" "+this.lastname
//       },
//       this.adress=function(){
//         return `mobile no:- ${this.mobile_no} ;email id:- ${this.email_id} ; city:-${this.city}`
//       }

// }


// let Student2= new Student("chan","karumar","MEAN",26,"May-2022",870125460,"zyz@gmail.com")
// let Student1= new Student("chandan","kar","MERN",25,"May-2022",870125460,"zyz@gmail.com")

// Student2.city='kolkata'

 

 //                                                 // get value,key,both

// console.log(Object.keys(Student1))
// console.log(Object.values(Student1))
// console.log(Object.entries(Student1))
// console.log('age' in Student1)    

 //                                                  // loops

// for(let key in Student1){
//     console.log(key)
// }

// for(let key in Student1){
//   console.log(Student1[key])
// }

// for(let key in Student1){
//   console.log(key+" : "+Student1[key])
// }

// let c=0
// for(let key in Student1){
//     c++
// }
// console.log(c)


  ////                                              //   copy

// let obj={
//   fname: 'chandan',
//   lname : 'kar',
//   age : 26
// }

// let copy1obj={...obj}                          // shallow copy,single layer copy
// console.log(copy1obj)
// console.log(copy1obj.age)


// let copy1obj=JSON.stringify(obj)                  // Deep Copy
// // console.log(copy1obj)
// copy1obj=JSON.parse(copy1obj)
// console.log(copy1obj)


