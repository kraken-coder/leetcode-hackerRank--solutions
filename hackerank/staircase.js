


const stairCase = (num) => {
    const consoleGen  = (x , v) => {
        const hash = '#'
        const space = ' '
        console.log( i.repeat(space - 1)  +  s.repeat( hash + 1) )
    }
    for (let i = 0,  v = num;  i < num; i++,  v--) {
        consoleGen(i, Math.abs(v))
    }
    return 
}




// test

stairCase(10)
