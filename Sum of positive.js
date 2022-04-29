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


// 4 Reversed Strings
function solution(str){
    return str.split('').reverse().join('');
}

// 5 String repeat
function repeatStr (n, s) {
    return s.repeat(n);
}

// 6 Opposite number

function opposite(number) {
    return(-number);
}

// 7 Return Negative
function makeNegative(num) {
    return -Math.abs(num);
}

// 8 Points of Reflection
function symmetricPoint(p, q) {
    return [2*q[0] - p[0], 2*q[1]  - p[1]];
}

// 9 Even or Odd
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

// 10 DNA to RNA Conversion
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}
