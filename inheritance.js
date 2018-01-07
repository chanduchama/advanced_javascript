// Javascript prototype implementation of inheritance

var Vehicle = function(name, vehicleType, wheelsCount) {
    this.name = name;
    this.vehicleType = vehicleType;
    this.wheelsCount = wheelsCount;
}

Vehicle.prototype.getVehicleName = function() {
    return this.name;
}

Vehicle.prototype.getVehicleType = function() {
    return this.vehicleType;
}

Vehicle.prototype.getWheelsCount = function() {
    return this.wheelsCount;
}

var hondaUnicorn = new Vehicle('Unicorn','Bike','2');
console.log(hondaUnicorn.getVehicleName());
console.log(hondaUnicorn.getVehicleType());
console.log(hondaUnicorn.getWheelsCount());

var AdvancedVehicle = function(name, vehicleType, wheelsCount) {
    Vehicle.call(this, name, vehicleType, wheelsCount);

    this.ABS = false;
    this.airBags = false;
}

AdvancedVehicle.prototype = new Vehicle();
AdvancedVehicle.prototype.constructor = Vehicle;

// Adding new functionalities to Advanced Vehicle
// Advanced vehicle will inherit the features of vehicle and will also having additional features

AdvancedVehicle.prototype.enableABS = function() {
    this.ABS = true;
};

AdvancedVehicle.prototype.enableAirBags = function() {
    this.airBags = true;
};

AdvancedVehicle.prototype.isABSActive = function() {
    return this.ABS;
};

AdvancedVehicle.prototype.isHavingAirBags = function() {
    return this.airBags;
};

//over riding the base class Vehicle functionality
AdvancedVehicle.prototype.getWheelsCount = function() {
    // calling parent class function
    return Vehicle.prototype.getWheelsCount.call(this)  + ' wheels with all wheel drive';
}

var hondaCity = new AdvancedVehicle('Honda City', 'Car', '4');
hondaCity.enableABS();
hondaCity.enableAirBags();
console.log(hondaCity.getVehicleName());
console.log(hondaCity.isABSActive());
console.log(hondaCity.isHavingAirBags());
console.log(hondaCity.getWheelsCount());