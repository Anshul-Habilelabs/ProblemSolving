const arr=[1,2,2,3,4,5,6]
let  N=4;

function removeElement(arr,N){
    let newarr=[]
    let l=arr.length;
    for(i=0;i<l;i++){
        if(arr[i]!=N){
            newarr.push(arr[i])
        }
    }
    return newarr;
}

console.log(removeElement(arr,N));