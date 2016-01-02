function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;
 
var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle( {
                    state: "omg..so bad.",
                    color: "pink",
                    wheelSize: "so big" } );
 
// Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log( myBigTruck instanceof Truck );
 
// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg. so bad"
console.log( myBigTruck );