// A buyer is interested in seeing only BMW and Audi cars within the inventory.  
// Execute a function and return an array that only contains BMW and Audi cars.  
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

export const bmwAndAudi = function(inventory){
    let array = []
    for(let i=0;i<inventory.length;i++){
        let car = inventory[i]
        if (car["car_make"]==="Audi"|| car["car_make"]==="BMW"){
            array.push(inventory[i])
        }
    }
    return JSON.stringify(array)
}