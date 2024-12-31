import Pass from "./Pass.js";

class Monthly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.expiry = this.getExpiry()
        this.price = this.getPrice(vehicle.vehicleType)
    }
    getExpiry(){
        let currentDate = new Date()
        currentDate.setMonth(currentDate.getMonth() +1)
        return currentDate

         
    }
    getPrice(vehicleType){
        switch(vehicleType){
            case "car" :
                return 500
            case "bike" :
                return 100
            case "cycle" :
                return 50
        }
    }
}
export default Monthly