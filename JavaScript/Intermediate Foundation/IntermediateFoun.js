//1.
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
    sum += i;
}
    
    return sum;
}
sigma(5);
sigma(4);
sigma(3);
sigma(2);

//2.
function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
      product *= i;
    }
   
    return product;
  }
  console.log(factorial(3));
  console.log(factorial(5));

  //3.
  function fib(n) {
  
    var a = 0, b = 1, sum = 1;
    
    for(var i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    
    return sum;
  }
  console.log(fib(6))
  console.log(fib(7))
  console.log(fib(8))
  console.log(fib(9))
  console.log(fib(10))

  //4.
  function SecToLast (arr){
    if (arr.length<2){
      return null;
    } else{
    return arr[arr.length-2];
    }
  }
  console.log(SecToLast([42, true, 4, "Liam", 7]));
  console.log(SecToLast ([4]));


//5.
function NthtoLast (arr, num){
    return arr[arr.length-num];
    }
  var arr = [1,2,3,4,5,6, 7];
  var reasult= NthtoLast(arr,5)
  console.log(reasult);

  //6.
  function secMax(arr){
    var max = arr[0];
    var max2 = arr[1];
        for(var i=0;i<arr.length;i++){
           if(arr[i]>max){
                max2= max;
              max = arr[i];
            }
          else if(arr[i]>max2 && arr[i] < max)
            max2 = arr[i];
        }
      return max2;
      
    }
    console.log(secMax([9, 7, 8, 4]));

//7.
function doubleTrouble(arr){
    var count=1;
    var newarray=[];
    
     for(var i=0; i<arr.length ; i++){{
         while(count<3){
             newarray.push(arr[i]);
             count++;
 
         }
         count=1;
     }
   
 
     }
     return newarray;
 }
 var arr=[4, "Ulysses", 42, false];
 var result= doubleTrouble(arr);
 console.log(result);