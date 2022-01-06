function longestConsec(strarr, k) {
   let result = "";
  if(k < 0 || k > strarr.length){
    return ""
  }else {
    for(let i=0; i<=strarr.length-k;i++){
      let tempArr = strarr.slice(i,i+k)
      console.log(tempArr)
      let tempStr = tempArr.join("")
      if(tempStr.length> result.length){
        result = tempStr
      }
    }
    return result
    
  }
}