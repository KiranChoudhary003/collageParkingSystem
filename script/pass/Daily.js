import Pass from "./Pass.js";

class Daily extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.expiry = this.getExpiry()
        this.price = this.getPrice(vehicle.vehicleType)
    }
    getExpiry(){
        let currentDate = new Date()
        currentDate.setDate(currentDate.getDate() +1)
        return currentDate

         
    }
    getPrice(vehicleType){
        switch(vehicleType){
            case "car" :
                return 50
            case "bike" :
                return 10
            case "cycle" :
                return 5
        }
    }
}
export default Daily