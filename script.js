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

// 11 Is he gonna survive?
function hero(bullets, dragons){
    return bullets >= dragons * 2
}

// 12 Multiplication table for number
const multiTable = (number) => {
    let table = '';

    for(let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }
    return table;
}

// 13 Multiply
function multiply (a, b) {
    return a * b;
}

// 14 Plural
function plural(n) {
    return n !== 1;
}

// 15 Grasshopper - Summation
var summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}

// 16 Square(n) Sum
function squareSum(numbers){
    let result = 0
    for (let i=0; i<numbers.length; i++) {
        debugger
        result += numbers[i]**2
    }
    return result
}

// 17 Volume of a Cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        let result = length * width * height
        return result
    }
}

//  18 Convert a String to a Number!
const stringToNumber = (str) => Number(str);

// 19 What is between?
function between(a, b) {
    let arr = [a]
    for(i=a; i<b; i++){
        arr.push(i+1)
    }
    return arr
}

// 20 Remove String Spaces
function noSpace(x){
    let result = x
    return result = result.replace(/\s/g, '')
}

// 21 Beginner - Reduce but Grow
function grow(x){
    return x.reduce((acc, el) => acc * el)
}

// 22 Use reduce() to calculate the sum of the values in an array
function sum(array) {
    return array.reduce( (acc, el) => acc + el)
}

//23 Training JS #30: methods of arrayObject---reduce() and reduceRight()
// function tailAndHead(arr){
//     debugger
//     return arr.reduce( (acc, el) => acc % 10 + ( + el)[0])
// }

//24 Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))]
}
//25 Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
    return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}


//26 Simple multiplication
function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9
}


//27 7kyu Count cubes in a Menger Sponge
function calc_ms(n) {
    let result = 1
    if(n === 0 ){
      return result
    }else{
      for(let i=1; i<=n; i++){
        result = result*20
      }
    }
    return result
}


//28 7kyu Vowel Count
function getCount(str) {
    let newArr = Array.from(str)
    .filter( el => el === 'a' | 'e' | 'i' | 'o' | 'u')
    return newArr.length
}


//29 7kyu Credit Card Mask
function maskify(cc) {
    let newArr = Array.from(cc)
    let newAllArray = ''
    if( newArr.length > 4 ){
        let tempArr = newArr.splice( -4, 4)
        let allSymbol = newArr.map( el => '#')
        newAllArray = allSymbol.concat(tempArr)
        return newAllArray.join('')
    }
    return newAllArray
}


//30 8kyu Keep Hydrated!
function litres(time) {
    return Math.floor(time/2)
}


//31
function basicOp(operation, value1, value2) {
  let result = 0
  if(operation === '+'){
    return result = value1 + value2
  }
  if(operation === '-'){
    return result = value1 - value2
  }
  if(operation === '*'){
    return result = value1 * value2
  }
  if(operation === '/'){
    return result = value1 / value2
  }
}


//32 8kyu get character from ASCII Value
const getChar = (c) => String.fromCharCode(c)


//33 8kyu String repeat
function repeatStr (n, s) {
    let word = s
    for(let i=1; i<n; i++){
        word = word+s
    }
    return word;
}


//34 8kyu Remove String Spaces
//const noSpace = x => x.replaceAll(' ', '')


//35 8kyu Calculate average
const findAverage = array => array.length !== 0 ? array.reduce((acc, number) => acc + number, 0) / array.length : 0


//36 7kyu What dominates your array?
function dominator(arr) {
    return  arr.filter((number, index, numbers) => {
        return numbers.indexOf(number) !== index;
    })
}
//console.log(dominator([1, 1, 1, 1, 2, 2]))












