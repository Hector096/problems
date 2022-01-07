function expandedForm(num) {
    let number = num.toString().split("")
    let result = [];
    for ( let i=0;i< number.length; i+=1){
     result.push(number[i] + "0".repeat((number.length - i) -1))
    }
     result = result.filter((v)=> parseInt(v) > 0 )
    return result.join(" + ").toString()
  }