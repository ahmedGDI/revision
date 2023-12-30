//-------------------------------------------------------------HOF---------------------------------------------------------------
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}
function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}
function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}
function addOne(array) {
    return map(array,function(e,i){
        return e+1
  })
}
function removeEveryOther(arr){
    return filter(arr,function(e,i){
        if(i%2===0){
            return e 
        }
  
    })
    }
    function doubleAll(nums) {
       
         return map(nums,function(e,i){
             return e*2
         })
      }
      function squareAll(nums) {
        return map(nums,function(e,i){
            return Math.pow(e,2)
        })
      }
      
      function stringLengths(array) {
        return map(array, function(e,i){
            return e.length
        })
      }
      // stringLength(["hello", "how", "are", "you", "doing?"]) => [5, 3, 3, 3, 6]
      function sum(nums) {
        return  reduce(nums,function(acc,e){
            return acc + e  
        })
      }
      function product(nums) {
        return  reduce(nums,function(acc,e){
            return acc * e  
        })
      }
      function allOdds(nums) {
        if(!Array.isArray(nums) || nums.length === 0){
            return undefined
        }
            return reduce(nums,function(acc,e,i){
                if(e === undefined || typeof e !== 'number'){
                    return 'fill the empty index'
                }
                if(e % 2 === 1 ){
                    return acc
                }
                acc = false
                return acc
            },true)
        }
      function squareSum(nums) {
        return reduce(nums,function(acc,e,i){
            return acc + Math.pow(e,2)
        })
      }
  //squareSum([1,2,2])==>9
function each2(array,array1, func) { 
          for (var i = 0; i < array.length; i++) { 
              func(array[i],array1[i],i)
                  } 
        }
        function map2(arr, arr1, callback) {
    var acc = []
      each(arr,arr1,function(e,e2,i){
          acc.push(callback(e,e2,i))
          })
        return acc
    }
 // map2([1, 2, 3], [4, 5, 6], function(a, b) {return a * b;}) => [4, 10, 18] 
var students = [ 
	{ name: "Alice", grade: 90, teacherNotes: "Excellent work", level: "A" }, 
	{ name: "Bob", grade: 80, teacherNotes: "Good effort", level: "B" },
    { name: "guedri", grade: 79, teacherNotes: "Good effort", level: "B" },
	{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" }, 
	{ name: "Dave", grade: 75, teacherNotes: "Needs improvement", level: "C" }
]
//1_Using filter, create a new array that only contains students who have a grade higher than or equal to 90.
function higherThanOrEqualTo90(arr){
    return filter(arr,function(e,i){
        return e.grade > 90
    })
}
//2_higherThanOrEqualTo90(students) ==> [{name: 'Charlie', grade: 95, teacherNotes: 'Impressive performance', level: 'A+'}]

//Using map, create a new array that contains the names of all the students in the given array of student objects.
function names(array){
   
    return map(sorted, function(e,i){
        return e.name
    })
}
//3_names(studens) ==> ['Alice', 'Bob', 'Charlie', 'Dave']

//Using reduce, find the average grade of all the students in the given array of student objects.
function average(array){
    return reduce(array,function(acc,e,i){
        return acc+e.grade
    },0)/array.length
}
//average(students) ==> 85 

//Using filter, create a new array that only contains students who have a level of "A+".
var level = function(array){
            return  filter(array, function(e,i){
                return e.level === 'A+'
            })
}
//level(student) ==> [{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" }]
//Using map, create a new array that contains the grade of each student in the given array of student objects.
function garde(array){
    return map(array,function(e,i){
        return e.grade
    })
}
//grade(students) ==> [90,80,95,75]

//Using filter, find the student with the highest grade in the given array of student objects .
function highestGrade(array){
    var higher = array[0].grade
        var acc = []
    return filter(array,function(e,i){
        
        for(var j = 0 ;j<array.length; j++){
            if(higher < array[j].grade){
                higher = array[j].grade 
                acc.push(higher)
                console.log(acc)
            }
            }
        return e.grade === acc[0]
    })
}
//highestGrade(students) ==> [{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" }]

//Using filter and reduce, find the average grade of all the students who have a level of "B".
function averageGrade(array){
    var filterGrade = function(array){
   return filter(array,function(e,i){
        return e.level === 'B'
    })
    }
    return average(filterGrade(array)) //average already work with reduce 
}
//averageGrade(students) ==> average of how many student got "B" level which is 79.5 of '80+79/total' cuz i added myself in list ;)

//Using map and reduce, create a new array that contains the name and grade of each student in the given array of student objects, sorted by grade in descending order.

function sortStudent(array){
    var sortDescending = function(array){ 
var callBack =function (a,b){
    return b.grade - a.grade
}
return  array.sort(callBack)
}
var sorting = sortDescending(array) 
return map(sorting,function(e,i){
        return e.name + ' ' +e.grade
    })
}
//it works but , i did't follow the question i'll update it later 
//i just used map without reduce



//-------------------------------------------------------------OBJECT---------------------------------------------------------------