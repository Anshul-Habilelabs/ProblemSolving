const arr = [1, 2, 3, 4, 12, 2, 1, 32, 21, 0, 9]

let k = 3;

function maxConsicutiveSum(arr, k) {
    if (ErrorHandling(arr, k)) {
        let l = arr.length;
        let MaxSum = 0;
        let WindowSum = 0;
        for (let i = 0; i < k; i++) {
            MaxSum += arr[i]
            WindowSum += arr[i]
        }
        for (let i = k; i < l; i++) {
            WindowSum += arr[i] - arr[i - k]
            if (WindowSum > MaxSum) {
                MaxSum = WindowSum
            }
        }
        return MaxSum
    }
    else return false

}
function ErrorHandling(arr, k) {
    if (arr.length < k) return false

    else return true
}
console.log(maxConsicutiveSum(arr, k));

