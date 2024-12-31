class Pass{
    constructor(vehilce){
        this.vehilce=vehilce
    }
    print(){
            const passToBePrint = `
                <label for="css">Name</label>
                <label for="css">${this.vehilce.owner.name}</label>
                <label for="css">Vechicle Id</label>
                <label for="css">${this.vehilce.vehicleId}</label>
                <label for="css">Expiry Date</label>
                <label for="css">${this.expiry}</label>
                <img src="https://quickchart.io/qr?text=${this.expiry}&size=200" alt="qr" />
            `

            const pass=document.querySelector('.pass')
            pass.innerHTML=passToBePrint

    }
}
export default Pass