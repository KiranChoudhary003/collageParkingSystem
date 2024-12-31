    import Pass from "./Pass.js";

    class Annaully extends Pass{
        constructor(vehicle){
            super(vehicle)
            this.expiry = this.getExpiry()
            this.price = this.getPrice(vehicle.vehicleType)
        }
        getExpiry(){
            let currentDate = new Date()
            currentDate.setFullYear(currentDate.getFullYear() +1)
            return currentDate
            
        }
        getPrice(vehicleType){
            switch(vehicleType){
                case "car" :
                    return 5000
                case "bike" :
                    return 1000
                case "cycle" :
                    return 500
            }
        }
    }
    export default Annaully