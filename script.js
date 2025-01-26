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
// console.log(dominator([1, 1, 1, 1, 2, 2]))


//37 Contact Manager (task from Sololearn)
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(name, number) {
        return `${this.name}: ${this.number}`
    }
}
let a = new contact("David", 12345);
let b = new contact("Amy", 987654321);
// console.log(a.print());
// console.log(b.print());


//38 Words (task from Sololearn)
class Add {
    constructor(...words) {
        this.words = words;
    }
    print(){
        console.log(`$${this.words.join('$')}$`)
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
// console.log(x.print())
// y.print();
// z.print();

//39 The Snail in the Well
function main() {
    var depth = parseInt(readLine(), 10);
    i = 0;
    for (; depth > 0;) {
        i++;
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(i);
}

//40 Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo(){
    return !true
  }


//41 Sentence Smash
function smash (words) {
    return  words.join(" ")
 };

//42 Draw stairs
function drawStairs(n) {

    let result = ''

    for(let i=0 ; i<n-1; i++){
        result += 'I\n ' + ' '.repeat(i) 
    }

    return result + 'I'
}

// 7 43 Simple Fun #194: Binary String
function binStr(s) {
    let result = [...s]
    let total = 0
    
    if(result.reduce((a, b) => a + b, 0) == 0){
        return total
    }
    for (let i = 0; i < result.length;  i++) {
        if(result[i] === '1'){
            result[i] = '0';
            total += 1;
            for(let a = 1; a < result.length; a++){
                if(result[a] === '0'){
                    result[a] = '1';
                }
            }      
        }
    return total+1
    }
}

// 44 8kyu Short Long Short
function solution(a, b){
    let result
    return result = (a < b ? a : b) + (a > b ? a : b) + (a < b ? a : b)
}


//45 8kyu Find the smallest integer in the array
function findSmallestInt(arr) {
    let result = arr[0]
    for(let a=1; a<=arr.length; a++){
        if ( result > arr[a] ){
            result = arr[a]
        }else{ result }
    }
    return result
  }

//46 8kyu Get the mean of an array
function getAverage(marks){
    let result = 0
    for(let i=0; i<marks.length; i++){
      result = result + marks[i]
    }
    result = result / marks.length
    return Math.round(result)
  }

//47 8kyu Reversed sequence
const reverseSeq = n => {
    let result = []
    for(let i = 0 ; i < n ; i++)result.push(n - i)
    return result;
  };

//48 https://t.me/js_test/3978
const numbers = [1, 2, 3, 4, 5];
const asyncSum = async () => {
   let sum = 0;
   for (const num of numbers) {
      await new Promise(resolve =>
setTimeout(resolve, 1000));
      sum += num;
   }
   return sum;
};
//asyncSum().then(result => console.log(result)); // 15

//49 https://t.me/js_test/3977
// const promise1 = Promise.resolve(5);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// //   .then(values => console.log(values))

// let aa = {}
// let bb = {}
// console.log(aa.prototype == bb.prototype) 

//50 8kyu Fake Binary
// function fakeBin(x){
//     let array = x.split('')    
//     for( i = 0 ; i < array.length ; i++)array[i] >= 5 ? array[i] = '1' : array[i] = '0'
//     return array.join()
// }
// console.log(fakeBin('5284654'))

//51 8kyu Abbreviate a Two Word Name
function abbrevName(name){

    // code away

}

//52 8 kyu Classic Hello World
class Solution{
    static main() {
      console.log("Hello World!");
    }  
}


//53 7 kyu 
function calculateProbability(n){

    function fac(n){
        if( n === 0){
            return 1
        }else{
            return n * fac( n-1 )
        }
    }

  return fac(364) / fac(365 - n) * Math.pow(365, n-1)    

}
//console.log(calculateProbability(23))


//54 задача с собеса
let phrase = 'Hello'
if(true){
    let user = 'Jhon';
    function sayHi(){
        alert(`${phrase}, ${user}`)
    }
}
//sayHi()  // Что выведет?
//Ответ: выведет alert


//55 задача с собеса. Что делает данная функция?
function someFn(f, ms) {
    
    let isCoolDown = false;

    return function(){

        if(isCoolDown)return;

        f.apply(this,arguments);

        isCoolDown = true;

        setTimeout( () => isCoolDown = false, ms)

    }
}


// 56 8kyu Remove First and Last Character

const removeChar = (str) => {
    let result = str
    result = result.split('')
    result.pop()
    result.shift()
    result = result.join('')
    return result
}


// 57 8kyu Opposite number

function opposite(number) {
    return number > 0 ? number * (-1) : number + (-number*2)
  }


// 58 8kyu Calculate average

// function findAverage(array) {
//     let result
//     result = array.reduce((a,b)=>a+b, 0)
//     if(array.length > 0){
//       return result/array.length
//     }
//     return 0
// }

 
// 59 8kyu Polish alphabet

function correctPolishLetters (string) {
  let newString = string.split('')

    let newArr =  newString.map((n) => {
    if(n === 'ą'){
        return n = 'a'
    }else if(n === 'ć')
    {
        return n = 'c'
    }else if(n === 'ę')
    {
        return n = 'e'
    }else if(n === 'ł')
    {
        return n = 'l'
    }else if(n === 'ń')
    {
        return n = 'n'
    }else if(n === 'ó')
    {
        return n = 'o'
    }else if(n === 'ś')
    {
        return n = 's'
    }else if(n === 'ź')
    {
        return n = 'z'
    }else if(n === 'ż')
    {
        return n = 'z'
    }else return n
    })
    return newArr.join('')

}

console.log(correctPolishLetters('Jędrzej'))
