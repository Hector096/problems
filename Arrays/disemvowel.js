function disemvowel(str) {
    let result =[]
     for(let i =0; i<str.length; i+=1){
       if(str[i].match(/[aeiou]/ig)){
         continue;
       }
       result.push(str[i])
       
     }
    
    return result.join("");
  }


  disemvowel("This website is for losers LOL!") = "Ths wbst s fr lsrs LL!"