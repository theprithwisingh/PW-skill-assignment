function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

let arr = [15, 22, 37, 1, 9];
let result = findMinMax(arr);
console.log(result); // Output: { max: 37, min: 1 }
