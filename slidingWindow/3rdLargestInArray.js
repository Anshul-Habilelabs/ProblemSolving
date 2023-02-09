let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8];

const getThirdLargest = (arr) => {

    arr.sort((a, b) => a - b);
    let thirdLargest;
    let count = 0;
    let l=arr.length-1

    for (let i = l; i >=0 ; i--) {
    
        if (arr[i] !== arr[i - 1]) {
            count++;
            if (count === 3) {
                thirdLargest = arr[i];
                break;
            }
        }
    }
    return thirdLargest;
}
console.log(getThirdLargest(arr));