const birthdayCakeCandles = arr => {
    let result = 0
    const age  = arr.length
    let largest = 0

    for(let  i = 0; i < age; i++) {

        if(arr[i] > largest) largest = arr[i]
        
        if(arr[i] === largest)  result++
    }

    

    return result
}



console.log(birthdayCakeCandles([3, 2, 1, 3]))