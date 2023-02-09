let arr=[1,2,2,3,3,4,5,6]

function uniquValue(arr){
    let l=arr.length
    let obj={}
    for(let i=0;i<l;i++){
        if(obj[arr[i]]){
            obj[arr[i]]=++obj[arr[i]]
        }
        else{
            obj[arr[i]]=1;
        }
    }

    return obj
}

console.log(uniquValue(arr));