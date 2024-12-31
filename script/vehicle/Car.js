import Vehicle from "./Vehicle.js";

class Car extends Vehicle{
    constructor(vehicleId, owner){
        super(vehicleId, owner)
        this.vehicleType="car"
    }
}
export default Car