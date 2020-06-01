/**
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

For example, given the array  there are  elements, two positive, two negative and one zero. Their ratios would be ,  and . It should be printed as
 *
 */




 const plusMinus = (arr) => {
    let positive = []
    let negative = []
    let zero = []

    const length = arr.length
    for(let i = 0; i < length; i++ ) {
        if(arr[i] < 0) {
            negative.push(arr[i])
        } else if( arr[i] > 0) {
            positive.push(arr[i])
        } else if( arr[i] === 0) {
            zero.push(arr[i])
        } else {
            return 
        }
    }
    console.log(positive.length/length)
    console.log( negative.length/length)
    console.log( zero.length/length)
    return 
}


plusMinus([1,5,-9,9, -4 ,8, 0 ,6, 0 ,3, 0])

