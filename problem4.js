// he accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

export const allYears = function(inventory){
    let years = []
    for (let i=0 ;i<inventory.length;i++){
        let car = inventory[i]
        years.push(car["car_year"])
    }
    return years
} 