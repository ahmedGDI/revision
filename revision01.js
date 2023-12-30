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
  for (var i = n; i > 0; i--) {
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
}
//_______________________

function reverseIterateAndLogRecursively(n) {
  if (n === 0) {
    console.log(n + " is even number");
  } else if (n === 1) {
    console.log(n + " is odd number ");
  } else {
    console.log(n + " is " + (n % 2 === 0 ? "even" : "odd") + " number");
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

//_______________________

function inverseWeirdDivisionRecursively(n) {
  if (n === 0) {
    return;
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "juliaJames";
  } else if (n % 5 === 0) {
    return "james";
  } else if (n % 3 === 0) {
    return "julia";
  }
  inverseWeirdDivisionRecursively(n - 1);
}

//_______________________

function factorialRecursively(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorialRecursively(number - 1);
}

//_______________________

function laughRecursively(number) {
  if (number === 0) {
    return "";
  }
  return "ha" + laughRecursively(number - 1);
}

function rangeFor(min, max) {
  var res = [];
  if (min > max) {
    var swap = min;
    min = max;
    max = swap;
  }

  for (var i = min; i < max; i++) {
    res.push(i);
  }
  return res;
}

function reverseRecursively(str) {
  if (str.length === 0) {
    return "";
  }
  return reverseRecursively(str.slice(1)) + str[0];
}

function addDigits(num) {
  var str = num.toString();
  var leng = str.length;
  res = 0;
  for (var i = 0; i < leng; i++) {
    res = res + str[i] * 1;
  }
  return res;
}

function fib(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function firstDigit(str) {
  var leng = str.length;
  var res;
  for (var i = leng; i >= 0; i--) {
    var x = +str[i];

    if (!isNaN(x)) {
      res = x;
        return res + " is the first number the the string";
    }
  }
  return 'there is nno number inside the string'
}

