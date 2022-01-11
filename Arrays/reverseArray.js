const reverseArray = (arr)=>{
 let result = [];
 for(let y = arr.length -1; y>=0; y-=1 ){
     result.push(arr[y])
 }
return result
}

console.log(reverseArray([1,4,3,2]))