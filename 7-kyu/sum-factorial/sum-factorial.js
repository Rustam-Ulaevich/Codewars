function sumFactorial(arr){
    let resultArr
    let accumulator = 0
    for(j=0; j<arr.length; j++){
         function factorail(n) {
            let result = 1 
            for(i = 1; i<=n; i++) {
                result *= i        
            }
            return result
        }     
        resultArr = factorail(arr[j])
        accumulator += resultArr    
    }
  return accumulator
  
}