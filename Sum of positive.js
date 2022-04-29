//1. Sum of positive
function positiveSum(arr) {
    let sum = 0
    for(i=0; i<arr.length; i++){
        if(arr[i]>0) sum += arr[i]
    }
    return sum
}

// 2 Yes or no
function boolToWord( bool ){
    if(bool === true){return 'Yes'}
    else{return 'No'}
}

// 3 Convert a Number to a String!
function numberToString(num) {
    return num.toString();
}


