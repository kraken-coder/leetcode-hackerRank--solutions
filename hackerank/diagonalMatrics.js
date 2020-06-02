function diagonalDifference(arr) {  
    let leftDiag = 0
    let rightDiag = 0
    let length = arr.length
    for (var i = 0, j = length - 1; i < length; i++, j--) {
            leftDiag += arr[i][i]
            rightDiag += arr[i][j]  
    }

    console.log(leftDiag)
    console.log(rightDiag)
    return Math.abs(leftDiag - rightDiag)

}




console.log(diagonalDifference([ [1,2,4], [3,5,5], [1,5,-4]]))