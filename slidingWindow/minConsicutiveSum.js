
const arr = [1, 2, 3, 4, 12, 2, 1, 32, 21, 0, 9]

let k = 3;

function minConsicutiveSum(arr, k) {
    if (ErrorHandling(arr, k)) {
        let l = arr.length;
        let minSum = 0;
        let WindowSum = 0;
        for (let i = 0; i < k; i++) {
            minSum += arr[i]
            WindowSum += arr[i]
        }
        for (let i = k; i < l; i++) {
            WindowSum += arr[i] - arr[i - k]
            if (WindowSum < minSum) {
                minSum = WindowSum
            }
        }
        return minSum
    }
    else return false

}
function ErrorHandling(arr, k) {
    if (arr.length < k) return false

    else return true
}
console.log(minConsicutiveSum(arr, k));
