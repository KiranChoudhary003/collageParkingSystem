import Vehicle from "./Vehicle.js";

class Cycle extends Vehicle{
    constructor(vehicleId, owner){
        super(vehicleId, owner)
        this.vehicleType="cycle"
    }
}
export default Cycle