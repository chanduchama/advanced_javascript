// Generic implementation of prototypes

//Basic class creation using prototypes

function Math(arguments) {
    this.arguments = arguments;

    var that = this;
    this.getArguments = function() {
        return this.arguments;
    }

    this.add = function() {
        var sum = 0;
        for (var index = 0; index < this.arguments.length; index++) {
            var element = this.arguments[index];
            sum += element;
        }
        return sum;
    }
}

Math.prototype.multiply = function() {
    var value = 1;
    for (var index = 0; index < this.arguments.length; index++) {
        var element = this.arguments[index];
        value *= element;
    }
    return value;
}

var arguments = [1,2,3,4,5,6];
var math = new Math(arguments);
console.log(math.add());
console.log(math.multiply());


// Public Static members

function Cult() {
}

//defining static members inside the Cult class
Cult.trainings = ['Boxing', 'MMA', 'S&C', 'Zumba', 'Yoga'];
Cult.getTrainings = function() {
    return Cult.trainings;
};

//Accessing static members inside the prototype methods
Cult.prototype.addTrainings = function(trainingName) {
    Cult.trainings.push(trainingName);
}

var cultHSR = new Cult();

console.log(Cult.trainings);
console.log(Cult.getTrainings());

cultHSR.addTrainings('RugbyTraining');
console.log(Cult.getTrainings());

// private Static members
var GYM = (function() {

    //private static member
    var locationsCount = 0;

    //private static method
    var isValidTraining = function(locationName) {
        if( locationName === '' )
            throw new Error('invalid location name');
    }

    function GYM(gymLocation) {
        isValidTraining(gymLocation);
        locationsCount++;
        this.gymLocation = gymLocation;

        this.getLocationsCount = function() {
            return locationsCount;
        }
    }

    return GYM;
})();

var powerFitness = new GYM('GOLD');
console.log(powerFitness.gymLocation);
var snapFitness = new GYM('SNAP');
console.log(snapFitness.gymLocation);
console.log(snapFitness.getLocationsCount());

// private fields
function Vehicle() {

    // private field
    var wheelsCount = 0;

    this.getWheelsCount = function() {
        return wheelsCount;
    }
    
    this.setWheelsCount = function(wheels) {
        wheelsCount = wheels;
    }

    this.vehicleType = function() {
        if ( wheelsCount === 2 ) {
            return '2 wheeler';
        } else if ( wheelsCount === 4 ) {
            return 'car';
        } else if ( wheelsCount > 4 ) {
            return 'heavy vehicle';
        } else {
            return 'not a vehicle';
        }
    }
}

var vehicle = new Vehicle();
console.log(vehicle.vehicleType());
vehicle.setWheelsCount(2);
console.log(vehicle.vehicleType());
vehicle.setWheelsCount(4);
console.log(vehicle.vehicleType());
vehicle.setWheelsCount(6);
console.log(vehicle.vehicleType());

// private methods
function Baleno(engineType){
    var manufacturer = 'Maruthi';
    var engine = this.engineType

    // private method
    var getManufacturer = function() {
        return manufacturer;
    }
    this.getMakerName = getManufacturer();
    this.getEngineType = function() {
        return this.engine;
    }
}

var newCar = new Baleno('petrol');
console.log(newCar.getMakerName);

// Privileged or Protected methods
function Encrypt(passwordString) {
    var tokenValue = '123';
    this.password = passwordString

    //protected methods to access the private fields
    this.addTokenValue = function() {    
        return this.password + tokenValue;
    }
}

Encrypt.prototype.encryptPassword = function() {
    // token value cannot be accessed in this way
    // console.log(tokenValue);
    return this.addTokenValue();
}

var encryptPassword = new Encrypt('password');
console.log(encryptPassword.encryptPassword());


