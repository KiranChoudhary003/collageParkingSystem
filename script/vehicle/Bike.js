import Vehicle from "./Vehicle.js";

class Bike extends Vehicle{
    constructor(vehicleId, owner){
        super(vehicleId, owner)
        this.vehicleType="bike"
    }
}
export default Bike