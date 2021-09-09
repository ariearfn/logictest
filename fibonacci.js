const fibonacci = (num) => {
    const arr = [0, 1]
    let a, b
    for(let i = 2; i < num; i++) {
        a = arr[i - 1]
        b = arr[i - 2]
        arr.push(a + b)
    }
    return arr
};

const sumEvensInArray = (arr) => {
    let sum = 0
    arr.forEach(elem => {
        if(elem % 2 === 0) {
            sum += elem
        }
    })
    return sum
}

const arr = [15,1,3];
console.log(sumEvensInArray(arr));