

// Write the recursive function to check whether a given number is prime or not.

function prime(no,i=2){

    if(i<no){
        if(no%i==0){
            return no+" is Not a Prime Number"
        }
        else {
            return prime(no,i+1)
        }
    }
    return no+" is A Prime Number"
}

console.log(prime(21))






