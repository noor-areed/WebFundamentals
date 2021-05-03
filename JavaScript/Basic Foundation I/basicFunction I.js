//1. 
function get_array() {
    var arr = [];
    for(var i=1; i <= 255; i++){
        arr.push(i);
    }
    return arr; 
} 
var reasult=get_array();
console.log(reasult);

//2.
function sum_even_numbers(){
    var sum = 0;
     for(var i=1; i<=1000; i++){
        if(i%2===0){
            sum = sum+i;
       
     }
    }
    return sum; 
}
var reasult=sum_even_numbers();
console.log(reasult);

//3.
function sum_odd_numbers(){
    var sum = 0;
     for(var i=1; i<=5000; i++){
        if(i%2!=0){
            sum = sum+i;
       
     }
    }
    return sum; 
}
var reasult=sum_odd_numbers();
console.log(reasult);

//4.
function iterArr(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
var reasult=iterArr();
console.log(reasult);

//.5
function max(arr) {
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
    if(arr[i]>max){
    max = arr[i];
    
    }
        
  }
    return max;
}

//.6
function Avg(arr){
    var age = 0;
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    age = sum / arr.length;
    return age;

}

//7.
function Arrary_odd(){
    var arr = [];
    for(var i=1; i<=50; i++){
        if(i%2 !=0){
            arr.push(i);
        }
    }
    return arr;
}

//.8
function greater(arr, Y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]> Y){
            count++;
        }
    }
    return count;
}

//.9
function squares(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
}


//.10
function Negatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

//.11
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}

//.12
function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}

//.13
function NumbertoString(arr){
    for (var i = 0; i< arr.length; i++){
        // examine each value and see if it's negative.
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}