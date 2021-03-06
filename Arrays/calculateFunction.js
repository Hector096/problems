function zero(operator) {
    return operator ? operator(0) : 0;
  }
  
  function one(operator) {
    return operator ? operator(1) : 1;
  }
  
  function two(operator) {
    return operator ? operator(2) : 2;
  }
  
  function three(operator) {
    return operator ? operator(3) : 3;
  }
  
  function four(operator) {
    return operator ? operator(4) : 4;
  }
  
  function five(operator) {
    return operator ? operator(5) : 5;
  }
  
  function six(operator) {
    return operator ? operator(6) : 6;
  }
  
  function seven(operator) {
    return operator ? operator(7) : 7;
  }
  function eight(operator) {
    return operator ? operator(8) : 8;
  }
  
  function nine(operator) {
    return operator ? operator(9) : 9;
  }
  
  function plus(rightVal) {
    return function(leftVal) {
      return leftVal + rightVal;
    }
  }
  
  function minus(rightVal) {
    return function(leftVal) {
      return leftVal - rightVal;
    }
  }
  
  function times(rightVal) {
    return function(leftVal) {
      return leftVal * rightVal;
    }
  }
  
  function dividedBy(rightVal) {
    return function(leftVal) {
      return leftVal / rightVal;
    }
  }


//   This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // m