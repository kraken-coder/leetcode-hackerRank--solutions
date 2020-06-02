
// 0(5)
// linear time complexity


const birthdayCakeCandles = arr => {
    const age  = arr.length
    let result = 0
    let tallest = 0


    //  get the tallest candle
    for(let  i = 0; i < age; i++) {

        if(arr[i] > tallest) tallest = arr[i]
        

       }   //  check the ocurence ot the tallest candle

    for(let  i = 0; i < age; i++) {

        if(arr[i] === tallest)  result++
    }

    
    console.log(tallest)
    return result
}



console.log(birthdayCakeCandles([18,90 ,90 ,13 ,90 ,75,90 ,8 ,90 ,43,]))


BIg0(1)

function addSum(a,b) {
    return a + b
}