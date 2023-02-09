let arr = [1, 1, 1,1,1,1,1,1];
let k = 4;

const mulSubArr = (arr, k) => {
    arr.sort();
    let count = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] < k) {
            count++;
        }
    }
    let start = 0;
    let startPlusOne = 1;
    while (startPlusOne < length) {
        if (arr[start] * arr[startPlusOne] < k) {
            count++;
            startPlusOne++;
        }
        if (arr[start] * arr[startPlusOne] >= k) {
            start++;
            startPlusOne = start + 1;
        }
    }
    return count;
}

console.log(mulSubArr(arr, k));