const  miniMaxSum = (arr) =>  { 
    let smallest = arr[0]
    let largest = 0
    let minSum = 0
    let maxSum = 0
  
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) largest = arr[i]
        
    }
  
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === largest) {
        continue
    }
    minSum += arr[i]
    }
  
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < smallest) smallest = arr[i]
      
  
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === smallest) {
       
      continue
  }
  maxSum += arr[i]
  }
  
  
  console.log(minSum, maxSum)
  
  }