//.1
function Big(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

//.2
function Low_High(arr){
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }
        else if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

//.3
function  print_return(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            return arr[i];
        }
    }
}
 console.log(print_return([0,2,1,4,3]));

 //.4
 function doubleVision(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(doubleVision([1,2,3]));

//.5
function countPositives(arr){
    var positives = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            positives++;
        }
    }
    arr[arr.length-1] = positives-1;
    return arr;
}
console.log(countPositives([1,1,0,0]));

//.6
function evensOdds(arr){
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            odds++;
            evens = 0;
        }else{
            evens++;
            odds = 0;
        }
        if (odds == 3){
            console.log("That's odd!");
        }else if(evens == 3){
            console.log("Even more so!");
        }
    }
}
 evensOdds([1,1,2,2,2,1,1,1])

 //.7
 function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5]));


//.8
function previousLengths(arr){
  for (var i=arr.length-1;i>0;i--){
	  arr[i] = arr[i-1].length;
  }
  return arr;
}

var x = ["hello","dojo","awesome"];
console.log(previousLengths(x));


//9.
function addSeven(arr){
  var newArr = [];
  for(var i=0;i<arr.length;i++){
    newArr.push(arr[i]+7);
  }
  return newArr;
}

var y = [1,2,3];
console.log(addSeven(y));


//10.
function reverse(arr){
  for (var i=0;i<arr.length/2;i++){
    var temp = arr[i];
    arr[i] =  arr[arr.length-1 - i]; 
    arr[arr.length-1 - i] = temp;
  }
  return arr;
}

var x = [2,4,6,1,3];
console.log(reverse(x));


//11.
function allNegative(arr){
  var newArr = [];
  for (var i=0;i<arr.length;i++){
    newArr.push(-Math.abs(arr[i]));
    }
  return newArr;
}

var y = [1,-3,5];
console.log(allNegative(y));


//12.
function alwaysHungry(arr){
  var sum = 0;
  for (var i=0;i<arr.length;i++){
    if (arr[i] == "food"){
      console.log("yummy");
    }
    else{
      sum++;
    }
  }
  if(sum == arr.length){
    console.log("I'm hungry");
  }
}

var x = [1,2,4,6];
var y = [1, "food", 1, "food"];
alwaysHungry(x);
alwaysHungry(y);


//13.
var array = [true,42,"Ada",2,"pizza"];
var nums = [1,2,3,4,5,6];
function swapTowardCenter(arr){
  var temp = arr[0]; 
  arr[0] = arr[arr.length-1];
  arr[arr.length-1] = temp;
  var temp2 = arr[2];
  arr[2] = arr[arr.length-3];
  arr[arr.length-3] = temp2;
  return arr;
}
console.log(swapTowardCenter(array));
console.log(swapTowardCenter(nums));

//14.
function scaleArray(arr,num){
  for (var i=0;i<arr.length;i++){
    arr[i] = arr[i]*num;
  }
  return arr;
}

var array = [1,2,3];
var number = 3;
console.log(scaleArray(array,number));




 
