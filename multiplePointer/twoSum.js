const arr = [1, 1, 2, 3, 4, 5, 7, 8]
let N = 15


function twoSum(arr,N) {
    let l = arr.length
    let s = 0;
    let e = l - 1
    while(s<e) {

        if (arr[s] + arr[e] < N) {
            s++;
        }
        else if (arr[s] + arr[e] > N) {
            e--;
        }
        else return true
    }
    return false
}

console.log(twoSum(arr,N));