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
}
console.log(mulSubArr(arr, k));