function greet(str, num) {
  var res;
  for (var i = 0; i < num; i++) {
    res = console.log(str);
  }
  return res;
}

//-----------------------

function iterateAndLogWithFor(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even number ");
    } else if (i % 2 === 1) {
      console.log(i + " is odd number ");
    }
  }
}
//_______________________

function iterateAndLogWithWhile(n) {
  var i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      console.log(i + " is even number ");
    } else if (i % 2 === 1) {
      console.log(i + " is odd number ");
    }
    i++;
  }
}

//_______________________


function reverseIterateAndLogWithFor(n) {

    for(var i = n ;i>0; i--){
        if (i % 2 === 0) {
            console.log(i + " is even number ");
          } else if (i % 2 === 1) {
            console.log(i + " is odd number ");
          }
    }
  
  }
//_______________________

  function reverseIterateAndLogRecursively(n) {

    if (i % 2 === 0) {
        console.log(i + " is even number ");
      } else if (i % 2 === 1) {
        console.log(i + " is odd number ");
      }
      
      return
  
  }
//_______________________ç

  function reverseIterateAndLogRecursively(n) {
    if (n === 0) {
        console.log(n + ' is even number');
    } else if (n === 1) {
        console.log(n + ' is odd number ');
    } else {
        console.log(n + ' is ' + (n % 2 === 0 ? 'even' : 'odd') + ' number');
        reverseIterateAndLogRecursively(n - 1);
    }
}

/* 

reverseIterateAndLogRecursively(5)

 5 is odd number 
 4 is even number 
 3 is odd number 
 2 is even number 
 1 is odd number
 */

 