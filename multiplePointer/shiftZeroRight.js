let arr=[1,0,2,3,0,4,0,5,6,7]

function shiftZero(arr){
    let l=arr.length
    let count=0
    for(let i=0;i<l;i++){
        if(arr[i]!=0){
            arr[count]=arr[i];
            count++;
        }
    }
    for(i=count;i<l;i++){
        arr[i]=0;
    }
    return arr
}

console.log(shiftZero(arr));

