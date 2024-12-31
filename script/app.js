import Annaully from "./pass/Annaully.js"
import Daily from "./pass/Daily.js"
import Monthly from "./pass/Monthly.js"
import Faculty from "./user/Faculty.js"
import Student from "./user/Student.js"
import Bike from "./vehicle/bike.js"
import Car from "./vehicle/car.js"
import Cycle from "./vehicle/cycle.js"

document.addEventListener("DOMContentLoaded",()=>{
   let name=document.getElementById("userName")
   let contact=document.getElementById("userContact")
   let role=document.getElementById("role")
   let userSaveBtn=document.getElementById("userSaveBtn") 
   
userSaveBtn.addEventListener('click',(e)=>{
    let user=null
    e.preventDefault()
    if(name.value && contact.value && role.value){
        user = role.value === "student"
                ?(new Student(name.value, contact.value))
                :(new Faculty(name.value, contact.value))

                console.log(user)
        alert(`${user.name} Successfull filled !`)
        document.querySelector(".user") .style.display = 'none'
    }
    else{
        alert("Please filled the required details")
    }

   let vehicleId=document.getElementById("vehicleId")
   let vehicleType=document.getElementById("vehicleType")
   let vehicleSaveBtn=document.getElementById("vehicleSaveBtn")

   vehicleSaveBtn.addEventListener('click',(e)=>{
    let vehicle=null
    e.preventDefault()
        if(vehicleId.value && vehicleType.value){
            switch(vehicleType.value){
                case 'car':
                    vehicle=new Car(vehicleId.value, user)
                    break
                case 'bike':
                    vehicle=new Bike(vehicleId.value, user)
                break
                case 'cycle':
                    vehicle=new Cycle(vehicleId.value, user)
                break
            }

            console.log(vehicle)
            alert(`${user.name} Your vehicle Successfull registered !`)
            document.querySelector(".vehicle") .style.display = 'none'

        }
        else{
            alert("Please filled the required details")
        }

        const passChoice=document.querySelector(".passchoice")
        let dailyPass = new Daily(vehicle)
        const dailyPassButton=document.createElement("INPUT")
        dailyPassButton.setAttribute("type","button") 
        dailyPassButton.setAttribute("value",`Daily : ${dailyPass.price}`)
        dailyPassButton.addEventListener(`click`,() =>{
            passChoice.style.display = "none"
            dailyPass.print()
        })       
        passChoice.appendChild(dailyPassButton)  
        
        let monthlypass=new Monthly(vehicle)
        const monthlyPassButton=document.createElement("INPUT")
        monthlyPassButton.setAttribute("type","button") 
        monthlyPassButton.setAttribute("value",`Monthly : ${monthlypass.price}`)
        monthlyPassButton.addEventListener(`click`,() =>{
            passChoice.style.display = "none"
            monthlypass.print()
        })
        passChoice.appendChild(monthlyPassButton)  

        let annaullypass=new Annaully(vehicle)
        const annaullyPassButton=document.createElement("INPUT")
        annaullyPassButton.setAttribute("type","button") 
        annaullyPassButton.setAttribute("value",`Annaully : ${annaullypass.price}`)
        annaullyPassButton.addEventListener(`click`,() =>{
            passChoice.style.display = "none"
            annaullypass.print()
        })
        passChoice.appendChild(annaullyPassButton)  

})
})
})