// Creating a Class in JavaScript
var Training = function (trainingName, warmUp, actualWorkout, coolDown) {
    this.trainingName = trainingName;
    this.warmUp = warmUp;
    this.actualWorkout = actualWorkout;
    this.coolDown = coolDown;
}

// How to override toString() method in Javascript?
// JavaScript way of overriding default toString() method for better understanding of the Object
Training.prototype.toString = function() {
    var trainingInfo = 'Training Name:' + this.trainingName + ', Warm Up:' + this.warmUp + ', Actual Workout' + this.actualWorkout + ', Cool Down:' + this.coolDown;
    return trainingInfo;
}
var hrx = new Training('hrx', 15, 30, 15);
console.log(hrx.toString());

// How to add additional functionality to string variable ? eg: "value".reverse();
String.prototype.reverse = function(){
    var splitString = this.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
}
console.log("cool".reverse());

//What is Javascript closure?

//What is Hoisting in JavaScript?

//Write a singleton function in JavaScript

//call() vs apply() vs bind() functions in JavaScript



