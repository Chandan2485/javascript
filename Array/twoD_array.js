let array=
[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]]


// array[row][column]

// let row=array.length
// console.log(row)

// let column=array[0].length
// console.log(column)

// for ever element-----------------------------------------------------

// for(i=0;i<array.length;i++){
//     for(j=0;j<array[0].length;j++){
//         console.log(array[i][j])
//     }
// }

// for diognal element----------------------------------------------------

// for(i=0;i<array.length;i++){
//         console.log(array[i][i])
// }                                            //             *
//                                             //                *
//                                            //                   *
// let start=0                               //                      *
// for(i=0;i<array.length;i++){
//     console.log(array[start][i])
//     start++
// }

// for diognal element reverse---------------------------------------------------

// let start=array.length-1
// for(i=0;i<array.length;i++){
//     console.log(array[i][start])
//     start--                                    //                     *
// }                                             //                    *
//                                              //                   *
//                                             //                  *
// for(i=0;i<array.length;i++){
//     console.log(array[i][(array.length-1)-i])
// }

// for print any row-----------------------------------------------------------------------

// let row=2;                                        
// for(i=0;i<array.length;i++){                        
//     console.log(array[row][i])                     //   * * * *
// }                                                 

// for print any column-----------------------------------------------------------------------

// let column=3;                                         //       *
// for(i=0;i<array.length;i++){                         //        *
//     console.log(array[i][column])                   //         *
// }                                                  //          *

// for zig-zag-----------------------------------------------------------------

//                                                               //       ___________
//                                                              //        ___________|
//                                                              //        |___________
//                                                              //        ____________|

